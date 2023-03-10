FROM node:18-alpine3.16

WORKDIR /usr/src/app 

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

RUN npm run build

CMD ["node", "dist/server.js"]
