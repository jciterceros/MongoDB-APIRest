
# JSONPlaceholder API with Node.js, TypeScript, MongoDB, and Mongo Express

## Descrição

Esta aplicação é uma API construída em Node.js com TypeScript que consome dados da API [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) e os salva em um banco de dados MongoDB. A aplicação também utiliza o Mongo Express para gerenciar o banco de dados de maneira visual.

### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenar os dados.
- **Mongoose**: Biblioteca de modelagem de objetos do MongoDB para Node.js.
- **Mongo Express**: Interface gráfica para visualizar e gerenciar os dados no MongoDB.
- **Docker**: Ferramenta para criar e gerenciar contêineres.
- **Docker Compose**: Orquestração de contêineres para rodar múltiplos serviços.

## Estrutura do Projeto

- `docker-compose.yml`: Configuração dos serviços Docker, incluindo Node.js, MongoDB e Mongo Express.
- `src/`: Contém os arquivos de código fonte da aplicação.
  - `index.ts`: Arquivo principal que inicializa o servidor e consome os dados da API.
  - `services/`: Pasta para serviços da API.
- `.env`: Arquivo de variáveis de ambiente.
- `Dockerfile`: Arquivo para construção da imagem Docker da aplicação.

## Como Rodar a Aplicação

### Pré-requisitos

- Docker e Docker Compose instalados no seu sistema.
- Porta 3000 (para a API) e porta 8081 (para o Mongo Express) liberadas.

### Passos

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Entre no diretório do projeto:
   ```bash
   cd <diretorio-do-projeto>
   ```

3. Crie o arquivo `.env` baseado no exemplo acima.

4. Execute o Docker Compose:
   ```bash
   docker-compose up --build
   ```

5. A aplicação estará disponível em:
   - **API**: `http://localhost:3000`
   - **Mongo Express**: `http://localhost:8081`

6. Teste a rota principal da API:
   ```bash
   curl http://localhost:3000/fetch-users
   ```

   Isso consumirá os dados de [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) e os salvará no MongoDB.

### Endpoints

A API possui os seguintes endpoints:

- **GET `/fetch-users`**: Consome dados da API JSONPlaceholder e salva no MongoDB.

## Gerenciamento do Banco de Dados

Você pode visualizar e gerenciar o banco de dados MongoDB utilizando o Mongo Express:

- Abra o navegador e vá para: `http://localhost:8081`
- Nome de usuário: `admin`
- Senha: `password`
- Banco de dados padrão: `mydatabase`

## Scripts NPM

- **`npm run dev`**: Roda a aplicação em modo de desenvolvimento com `ts-node-dev`.
- **`npm run build`**: Compila o código TypeScript para JavaScript.
- **`npm start`**: Roda a aplicação usando o código compilado em JavaScript.

## Estrutura Docker

- **API**: Roda um contêiner Node.js para servir a aplicação.
- **MongoDB**: Contêiner do MongoDB para armazenar dados.
- **Mongo Express**: Interface gráfica para gerenciar o banco de dados.

## Considerações Finais

Este projeto foi desenvolvido para demonstrar como consumir dados externos e armazená-los em um banco de dados utilizando Node.js, TypeScript, MongoDB e contêineres Docker. A interface Mongo Express facilita a visualização e a manipulação dos dados diretamente no MongoDB.
