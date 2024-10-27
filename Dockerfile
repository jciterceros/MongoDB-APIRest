# Use a imagem oficial do Node.js como base
FROM node:alpine

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta da aplicação
EXPOSE ${APP_PORT}

# Comando para rodar a aplicação
CMD ["npm", "start"]
