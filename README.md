# Senhas Ocultas

"Senhas Ocultas" é um projeto que disponibiliza APIs RESTful escaláveis com suporte para bancos de dados relacionais (MySQL e PostgreSQL) e não relacionais (MongoDB). O projeto está organizado em duas pastas principais: uma para ORMs utilizando Mongoose e Sequelize, e outra exclusiva para MySQL, apresentando uma API mais simples. Ambas as pastas seguem o modelo de arquitetura MVC (Model-View-Controller).

<hr>

## Bancos de Dados

Este projeto suporta os seguintes bancos de dados:

### Relacionais:
- **MySQL**
  - [Download MySQL](https://dev.mysql.com/downloads/)
- **PostgreSQL**
  - [Download PostgreSQL](https://www.postgresql.org/download/)
  - [DBeaver (Ferramenta GUI)](https://dbeaver.io/)

### Não Relacionais:
- **MongoDB**
  - [Download MongoDB](https://www.mongodb.com/try/download/community)
  - [MongoDB Compass (Ferramenta GUI)](https://www.mongodb.com/products/compass)
 
<hr>

## Estrutura do Projeto

O projeto está dividido nas seguintes pastas:

### 1. ORMs
Esta pasta contém implementações usando Mongoose para MongoDB e Sequelize para MySQL e PostgreSQL, permitindo interações mais avançadas com os bancos de dados.

### 2. MySQL
Esta pasta contém uma API mais simples especificamente para MySQL.

<hr>

## Rotas Disponíveis

As APIs RESTful fornecem os seguintes endpoints para gerenciamento de senhas:

<li><h4><span>/passwords</span> - Para ver todas as senhas (GET)</h4></li>
<li><h4><span>/password/:id</span> - Para ver uma senha (GET)</h4></li>
<li><h4><span>/password/new</span> - Para criar uma senha (POST)</h4></li>
<li><h4><span>/password/:id</span> - Para atualizar uma senha (PUT)</h4></li>
<li><h4><span>/password/:id</span> - Para deletar uma senha (DELETE)</h4></li>

<hr>

## Ferramentas de Teste

Para testar as APIs, recomendo o uso de uma das seguintes ferramentas:

- **Insomnia**
  - [Download Insomnia](https://insomnia.rest/download)
- **Postman**
  - [Download Postman](https://www.postman.com/downloads/)
 
<hr>

## Como começar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gui-silva-github/senhasOcultas.git
   cd senhasOcultas

2. **Instale as dependências:**
   ```bash
   npm install

3. **Crie um arquivo .env e configure as variáveis do Banco de Dados escolhido**

4. **Rode o projeto com:**
   ```bash
   npm start

<hr>

## Tecnologias

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
