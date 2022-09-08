FROM node:18-alpine

LABEL maintainer="Saggaf Arsyad <saggaf.arsyad@gmail.com>"

WORKDIR /usr/src/app

COPY src ./src
COPY views ./views
COPY package.json package-lock.json ./

ENV NODE_ENV="production"

RUN npm ci

ENTRYPOINT ["npm", "start"]