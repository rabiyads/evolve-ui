FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-workspace.yaml .npmrc ./
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm fetch
COPY . .
RUN pnpm install --offline && pnpm build
EXPOSE 3000
CMD ["pnpm","start"]
