FROM node:current-alpine

WORKDIR /usr/src/app

COPY server/package*.json ./

RUN npm install

COPY server/ .

EXPOSE 3001

CMD [ "npm", "start" ]