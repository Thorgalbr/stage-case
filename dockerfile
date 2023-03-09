FROM node:18-alpine3.16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app 

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5000

RUN npm run build

CMD ["node", "dist/server.js"]
