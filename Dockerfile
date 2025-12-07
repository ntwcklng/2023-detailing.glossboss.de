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

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs bunuser

# Nur Standalone + static files kopieren
COPY --from=builder --chown=bunuser:nodejs /app/.next/standalone ./
COPY --from=builder --chown=bunuser:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=bunuser:nodejs /app/public ./public

USER bunuser

EXPOSE 3000
CMD ["bun", "server.js"]
