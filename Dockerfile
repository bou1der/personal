FROM oven/bun:latest AS base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV SKIP_ENV_VALIDATION=true
ENV NODE_ENV=production

RUN bun run build

FROM base AS release
COPY ./public .
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=install /temp/prod/package.json package.json
COPY --from=prerelease /usr/src/app/.next .next

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "start" ]
