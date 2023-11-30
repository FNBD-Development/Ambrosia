#!/bin/bash

install_on_debian() {
    sudo apt-get update -y && sudo apt-get upgrade -y
    sudo apt-get install -y wget curl git nc
}

install_on_redhat() {
    sudo yum -y install wget curl git nc
}

install_on_arch() {
    sudo pacman -Syu --noconfirm wget curl git nc
}

if [ "$EUID" -ne 0 ]; then
    echo "This script must be run with sudo. Please enter your password."
    sudo "$0" "$@"  # Run the script with sudo
    ping -c 1 8.8.8.8 > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        if [ -f /etc/os-release ]; then
            source /etc/os-release
            OS=$ID
        else
            echo "Unable to detect the operating system."
            exit 1
        fi
        
        # Use conditional statements to install packages based on the detected OS
        case "$OS" in
            "arch")
                echo "Detected Arch Linux."
                install_on_arch
            ;;
            "debian" | "ubuntu")
                echo "Detected Debian-based system."
                install_on_debian
            ;;
            "centos" | "rhel" | "fedora")
                echo "Detected Red Hat-based system."
                install_on_redhat
            ;;
            *)
                echo "Unsupported operating system: $OS"
                exit 1
            ;;
        esac
        
        curl -fsSl https://bun.sh/install | bash
        read -p "Enter the Ambrosia server IP address and Port or Valid FQDN (Add HTTP or HTTPS): " server_ip
        http_response=$(curl -Is http://"$server_ip" | head -n 1)
        if [[ $http_response == *"200 OK"* ]]; then
            echo "HTTP is available on $server_ip."
        else
            echo "HTTP is not available on $server_ip."
        fi
        
        # Check if the server is accessible over HTTPS
        https_response=$(curl -Is https://"$server_ip" | head -n 1)
        if [[ $https_response == *"200 OK"* ]]; then
            curl -fsSl $server_ip/agent/agent_server.zip
            unzip "agent-server.zip" -d .
            cd agent-server
            nc -zv "ip route get 1 | awk '{print $7}" "19103"
            if [ $? -eq 0 ]; then
                echo "Port 19103 open."
                sed -i "s/^ambrosiaip=.*/ambrosiaip=$serverip/" "..env"
                bun i
                cd "./node_modules/better-sqlite3"
                bun .
            else
                echo "Port 19103 is used or closed."
            fi
            
        else
            echo "Foot"
        fi
        
    else
        echo "No internet access. please connect to internet"
    fi
fi

