FROM node:18-alpine

WORKDIR /usr/scr/app

COPY package.json ./

RUN  npm install

COPY . .

EXPOSE 8080
CMD [ "node", "test.js" ]