# Definindo o sistema
FROM node:18-alpine3.16

# Criando o diretório para o workdir
RUN mkdir -p /usr/src/app

# Definindo o workdir
WORKDIR /usr/src/app 

#Copiando o package.json e o package-lock.json para o workdir
COPY package*.json .

# Rodando o npm install para instalar os pacotes presentes
RUN npm install

# Copiando o restante dos arquivos para o workdir
COPY . .

# Expondo a porta 4000
EXPOSE 4000

# Comando que vai rodar o rimraf para apagar arquivos existentes na dist e recriar com o tsc
RUN npm run build

# Comando para rodar a aplicação no server.js na pasta dist
CMD ["node", "dist/server.js"]
