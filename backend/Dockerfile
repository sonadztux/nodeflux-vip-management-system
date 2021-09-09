# syntax=docker/dockerfile:1
FROM node:14.14-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]