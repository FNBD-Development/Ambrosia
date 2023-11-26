FROM oven/bun:latest
WORKDIR /opt/Ambrosia
COPY . .
CMD ["bun", "install", "&&", "bun", "."]
EXPOSE 3295