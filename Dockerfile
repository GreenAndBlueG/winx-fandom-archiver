# syntax=docker/dockerfile:1

FROM node:14-slim

WORKDIR /app

COPY ./src/package*.json ./

RUN npm install

COPY ./src .

CMD [ "npm", "start" ]
