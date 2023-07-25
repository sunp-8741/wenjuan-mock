FROM node:lts-alpine as build-stage

WORKDIR /app
COPY . /app
RUN npm config set registry "https://registry.npm.taobao.org/"
RUN npm install

EXPOSE 3001
CMD ["node", "index.js"]

