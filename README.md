<h1 align="center">
    <bold>Node Challenge - Mutant</bold>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/fabriciodorneles/desafio-nodejs?style=flat-square">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fabriciodorneles/desafio-nodejs?style=flat-square">
  <img alt="Made by Fabricio Dorneles" src="https://img.shields.io/badge/made%20by-Fabricio Dorneles-%237519C1?style=flat-square"><br/>

</p>
<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-execute">Como Executar</a>
</p>


## 📌 Sobre

This is an API for a challenge of Mutant Company.  

Author: [Fabricio Dorneles](https://github.com/fabriciodorneles)   

The API consumes the data of another [API](https://jsonplaceholder.typicode.com/users), normalize and store it in a MySql Data Base.  
You can see the API Documentation via postman, in this [link](https://explore.postman.com/api/8408/desafio-nodejs---mutant). After install in you machine you can test the API in the same [link](https://explore.postman.com/api/8408/desafio-nodejs---mutant).  
The Error Logs are stored in a file in the project directory via [Winston](https://www.npmjs.com/package/winston) Lib.



It has two basic functionalities:  
### **'/download' Functionality**
this route consumes the API, downloading the data and temporarily storing it crudely in memory. This route returns a JSON with the stored content.
### **'/store' Funcionality**
This route stores the downloaded crude user data on the mysql DB.  
The crude user data is normalized and stored in **3 different Tables**:  
- users_address_data  
(street, suite, zipcode, city, lat(latitude), lng(longitude))
- users_contact_data  
(email, phone, website) 
- users_personal_data(this table links the two other with foreign keys)  
(name, username, address_id, contact_id)

## ⚙ Technologies
-  [Typescript](https://www.typescriptlang.org/)
-  [Node.js](https://nodejs.org/en/)
-  [axios](https://github.com/axios/axios)
-  [Docker](https://www.docker.com/)
-  [MySql](https://www.mysql.com/)
-  [Typeorm](https://typeorm.io/#/)
-  [Jest](https://jestjs.io/)
-  [Winston](https://www.npmjs.com/package/winston)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [EditorConfig](https://editorconfig.org/)


NodeJS, Express, MySql, Typeorm, Axios, Winston, Jest, Eslint, Prettier

## ⚒ How to Execute
This is a Local version of the API. You need to run it from you local machine.
- ### **Pre-requisites**
  - **[Node.js](https://nodejs.org/en/)** installed
  - **[Git](https://git-scm.com/)** installed and configured
  - **[NPM](https://www.npmjs.com/)** or **[Yarn](https://yarnpkg.com/)** installed and configured
  - **[Docker Desktop](https://www.docker.com/products/docker-desktop)** installed and configured

1. Clone the repository:

```sh
  $ git clone https://github.com/fabriciodorneles/desafio-nodejs
```

2. Executing the application:

```sh
  # Change dir
  $ cd desafio-node-js

  # Installing dependencies
  $ yarn # ou npm install

  # Configuring DataBase Container
  $ docker run --name mysql-mutant -p 32769:3306 -e MYSQL_ROOT_PASSWORD=mutant -e MYSQL_DATABASE=mutantDB -d mysql:5.7.31
  # YOU MIGHT HAVE TO WAIT A WHILE BEFORE EXECUTING THE NEXT COMMAND
  # (Because Docker have to initiate the Database)

  # Run the migrations to create the Mysql DB Tables
  $ yarn typeorm migration:run

  # Start the API
  $ yarn dev:server

  # Now you can acess the routes via Browser / Postman / Insomnia / Etc.
```
