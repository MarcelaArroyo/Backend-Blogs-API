# Projeto Blogs-API

É a criação de uma API REST E RESTful com node.js e express, construida em camadas de Arquitetura (controllers, middleware, services e models). Criando o banco de dados relacional sql e as relaçõess entre as tabelas com o mapeamento objeto-relacional (ORM) Sequelize. Além disso, é utilizada a biblioteca JasonWebToken (jwt) para gerar um token do usuário e fazer a verificação desse token.

* Rota /login, endpoint POST que verifica se o usuário possui um cadastro, se sim gera um token, se não retorna uma mensagem de erro.

* Rota /user, endpoint GET que lista todos os usuários
* Rota /user/:id, endpoint GET que lista o usuário pelo ID
* Rota /user, endpoint POST que cria um usuário

* Rota /categories, endpoint GET que lista todas as cetegorias
* Rota /categories, endpoint POST que cria uma categoria

* Rota /post, endpoint GET que lista todos os posts
* Rota /post/:id, endpoint GET que lista o post pelo ID
* Rota /post, endpoint POST que cria um post
* Rota /put, endpoint PUT que atualiza um post
