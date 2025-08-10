# ---- Build Stage ----
FROM oven/bun:latest AS builder
WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# ---- Production Stage ----
FROM oven/bun:latest AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Nur Standalone + static files kopieren
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["bun", "server.js"]
