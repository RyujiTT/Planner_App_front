# FROM node:14.4.0-alpine 使用不可
FROM node:18.17.1-alpine

ARG WORKDIR
ARG API_URL

ENV HOME=/${WORKDIR} \
    LANG=C.UTF-8 \
    TZ=Asia/Tokyo \
    HOST=0.0.0.0 \
    API_URL=${API_URL}

WORKDIR ${HOME}

COPY package*.json ./
RUN yarn install

COPY . ./

RUN yarn run build