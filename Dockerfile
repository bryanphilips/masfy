# Use the latest Bun official image
FROM oven/bun:1.2.7

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 5400

CMD ["bun", "run", "dev"]
