/* Hard code cause i am stupid */
function a(b) {
    if (b == "1m") {
     return "*/1 * * * *"
    }

    if (b == "5m") {
        return "*/5 * * * *"

    }

    if (b == "10m") {
        return "*/10 * * * *"
    }

    
}

module.exports = a
