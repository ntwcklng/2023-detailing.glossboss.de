# ---- Build Stage ----
FROM node:24-slim AS builder
WORKDIR /app

# pnpm store lives here so it can be reused via a BuildKit cache mount
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# pnpm installieren (empfohlene Art)
RUN corepack enable && corepack prepare pnpm@latest --activate

# Nur package.json + pnpm-lock.yaml kopieren
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Prod + Dev deps installieren (für Build braucht man devDependencies)
# Shared pnpm store cache mount (id is deliberately shared across projects
# on this builder so downloaded packages are reused between repos)
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store pnpm install --frozen-lockfile

# Rest rein
COPY . .
# Next 16.3's Turbopack filesystem cache lives in .next/cache; the BuildKit
# cache mount persists it across image builds so repeat Coolify deploys
# reuse unchanged compile artifacts. The id is unique per project so repos
# on the same builder don't share one cache volume.
RUN --mount=type=cache,id=nextcache-2023-detailing.glossboss.de,target=/app/.next/cache pnpm run build

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
