# ---- Build Stage ----
FROM node:24-slim AS builder
WORKDIR /app

# pnpm installieren (empfohlene Art)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Nur package.json + pnpm-lock.yaml kopieren
COPY package.json pnpm-lock.yaml ./

# Prod + Dev deps installieren (für Build braucht man devDependencies)
RUN pnpm install --frozen-lockfile

# Rest rein
COPY . .
# Build Next.js
RUN pnpm run build

# ---- Production Stage ----
FROM node:24-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs nodeuser

# pnpm aktivieren (nur nötig, falls du Scripts nutzt)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Nur Standalone + static files kopieren
COPY --from=builder --chown=nodeuser:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nodeuser:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nodeuser:nodejs /app/public ./public

USER nodeuser

EXPOSE 3000

# Start Befehl (server.js kommt aus standalone build)
CMD ["node", "server.js"]
