<h1 align="center"> Divino Burger - API com Node.js :hamburger:</h1>

## Projeto 5 - Burger Queen API desenvolvido no bootcamp de Front-End da SAP006 Laboratória :yellow_heart:

## Índice
1. [Apresentação](#briefcase-apresentação)
2. [Resumo do Projeto](#clipboard-resumo-do-projeto)
3. [Endpoints da API Divino Burger](#gear-endpoints-da-API-Divino-Burger)
4. [Estrutura do Banco de Dados](#bar_chart-estrutura-do-banco-de-dados)
5. [Tecnologias Utilizadas](#robot-tecnologias-utilizadas)
6. [Estrutura dos Principais Arquivos](#file_folder-estrutura-dos-principais-arquivos)
7. [Resultados](#%EF%B8%8F-resultados)
8. [Sobre a Desenvolvedora](#woman_technologist-sobre-a-desenvolvedora)

---
## :briefcase: Apresentação ✨

Um pequeno restaurante de hamburgueres, em crescimento, necessitava de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação LaBurger já foi criada [acesse aqui](https://sap-005-burger-queen-ale-alves.vercel.app/) para conhecer.

E agora foi criado o back-end para manejar os dados. Feito através de uma _API rest_ que é compatível com as requisições vindas do front. [Aqui](https://laburger-api.herokuapp.com/) você consegue acessar API.

---

## :clipboard: Resumo do projeto 💡

Como back-end, nesse caso nos referimos a um _servidor web_, que é basicamente
um programa que _ouve_ o que acontece na aplicação através de uma porta de rede,
pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

Um servidor web deve _manejar_ as requisições que chegam e devolver respostas a elas,
que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_,
isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa
que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc)
e o servidor é o programa que recebe essas requisições e as responde.

---

## :gear: Endpoints da API LaBurger 📁

#### 3.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 3.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 3.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

---

## :bar_chart: Estrutura dos dados 📊
Diagrama para visualizar as tabelas com os todos endpoints, através do aplicativo Dbeaver.

![Estrutura dos dados](https://trello-attachments.s3.amazonaws.com/6058c726179e310da8b9368e/412x447/2bc4b6e9b1084e3f6134575fb6357759/ER-DIAGRAMA-DBEAVER.jpeg.jpg)

---

## :robot: Tecnologias Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `React` | Uma biblioteca JavaScript para criar interfaces de usuário |
| `HTML 5` | Linguagem de marcação |
| `SCSS/SASS` | Linguagem de estilização |
| `JavaScript` |  Linguagem de programação interpretada estruturada |
| `Jest` | Framework de teste em JavaScript |
| `Node.js` | Software de execução de códigos JavaScript |
| `Git e GitHub` | Sistemas de controle de versões distribuídos |
| `Figma` | Editor gráfico de vetor e prototipagem de projetos |


* Node.js
* Express
* Sequelize
* Heroku
* PostgreSQL
* Dbeaver 
* Postman 

## :file_folder: Estrutura dos Principais Arquivos
```
.
├── 📁public
|
├── 📁src
|   ├── 📁components
|   |   ├── 📁All-day
|   |   ├── 📁Breakfast
|   |   ├── 📁ButtonDefault
|   |   ├── 📁ButtonImg
|   |   ├── 📁ButtonRadio
|   |   ├── 📁ButtonSelect
|   |   ├── 📁CarArea
|   |   ├── 📁CartItem
|   |   ├── 📁DateTime
|   |   ├── 📁ErrorMessage
|   |   ├── 📁Header
|   |   ├── 📁Input
|   |   ├── 📁LinkAside
|   |   ├── 📁ListAllOrders
|   |   ├── 📁Loader
|   |   ├── 📁NotFound
|   |   ├── 📁Popup
|   |   ├── 📁PopupCancel
|   |   └── 📁ProductArea
|   |
|   ├── 📁img
|   |
|   ├── 📁pages
|   |   ├── 📁Hall
|   |   ├── 📁Login
|   |   ├── 📁OrdersPanel
|   |   └── 📁Register
|   |
|   ├── 📁services
|   |   
|   ├── 📁utils
|   |
|   ├── 📄global.scss
|   ├── 📄index.js
|   └── 📄routes.js
|   
├── 📄README.md
└── 📄package.json

```

---

## ✔️ Resultados

* #### Tablet
<div style="display: flex" align="center">
  <img align="center" alt="gif-cadastro" height="600" width="800" src="./src/img/gif-cadastro.gif"><br><br>
  <img align="center" alt="gif-carrinho" height="600" width="800" src="./src/img/gif-carrinho.gif"><br><br>
  <img align="center" alt="gif-pedidos" height="600" width="800" src="./src/img/gif-pedidos.gif"><br><br>
  <img align="center" alt="gif-status" height="600" width="800" src="./src/img/gif-status.gif">
</div>

* #### Responsivo
![img](./src/img/gif-responsivo.gif)

---
## :woman_technologist: Sobre as desenvolvedoras

### Karen Freitas

- [LinkedIn](https://www.linkedin.com/in/karen-freitas/)
- E-mail: karenfcorrea@gmail.com
### Patrícia Barnabé

- [LinkedIn](https://www.linkedin.com/in/patriciabarnabe)
- E-mail: patbarnabe5@gmail.com




