FROM node:14-slim

WORKDIR /app

COPY ./src/package*.json ./

RUN npm install

COPY ./src .

WORKDIR /app/src

CMD [ "npm", "start" ]
