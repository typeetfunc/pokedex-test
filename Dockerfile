FROM node:18-alpine AS builder

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./lerna.json ./
COPY ./tsconfig.build.json ./
COPY ./tsconfig.json ./

WORKDIR /app/packages/components
COPY ./packages/components ./

WORKDIR /app/packages/utils
COPY ./packages/utils ./

WORKDIR /app/packages/pokedex
COPY ./packages/pokedex ./

WORKDIR /app

RUN yarn

RUN yarn run build

WORKDIR /app/packages/pokedex

ENV NODE_ENV production

USER node

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "start"]
