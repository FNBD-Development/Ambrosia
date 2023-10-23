FROM oven/bun:latest
WORKDIR /Ambrosia
COPY . .
CMD ["bun", "install", "&&", "bun", "."]
EXPOSE 3012