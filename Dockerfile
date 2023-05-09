ARG REGION
ARG ENVIRONMENT=dev
ARG ACCOUNT_ID=129462528407

# Install dependencies only when needed
FROM ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/sb-node-18-x-al2-master-32be132-0-${ENVIRONMENT}-base-${REGION}:latest as builder

ARG REGION
ARG ENVIRONMENT
ARG STAGE
ARG BRANCH_NAME

# Cache args
ARG BNW_CACHE_BUCKET
ARG BNW_CACHE_BUCKET_PATH
ARG BNW_CACHE_NAMESPACE
ARG BNW_CACHE_DEFAULT_NAMESPACE

WORKDIR /sbapp
USER sbapp

# Install dependencies
COPY --chown=sbapp package.json yarn.lock ./
RUN \
  --mount=type=secret,uid=1103,gid=1103,id=AWS_ACCESS_KEY_ID \
  --mount=type=secret,uid=1103,gid=1103,id=AWS_SECRET_ACCESS_KEY \
  --mount=type=secret,uid=1103,gid=1103,id=AWS_SESSION_TOKEN \
  bnw_cache_yarn_install
COPY --chown=sbapp . .

# Disable Next.js telemetry during build
# Learn more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

ENV NODE_ENV production
ARG GIT_COMMIT
RUN yarn build

# Install dependencies only when needed
FROM ${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/sb-node-18-x-al2-master-32be132-0-${ENVIRONMENT}-base-${REGION}:latest

WORKDIR /sbapp
USER sbapp

ENV NEXT_TELEMETRY_DISABLED 1

# Workaround for https://github.com/vercel/next.js/issues/48077
COPY --from=builder /sbapp/node_modules/next/dist/compiled/jest-worker ./node_modules/next/dist/compiled/jest-worker
COPY --from=builder --chown=sbapp /sbapp/.next/standalone .
COPY --from=builder --chown=sbapp /sbapp/public ./public
COPY --from=builder --chown=sbapp /sbapp/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
