FROM node:lts-alpine as build-stage

WORKDIR /app
RUN npm config set registry "https://registry.npm.taobao.org/"
RUN npm config set unsafe-perm true && npm install
RUN npm install pm2 -g

EXPOSE 3001
CMD ["pm2-runtime", "start", "index.js", "-n", "uni-docker" ]

