ARG NODE_VERSION

FROM node:${NODE_VERSION} AS build

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN yarn install \
  --frozen-lockfile \
  --no-optional \
  --production

FROM node:${NODE_VERSION}
WORKDIR /app
COPY --from=build /app /app

ENTRYPOINT ["yarn", "start"]

