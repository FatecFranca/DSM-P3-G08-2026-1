# DSM-P3-G08-2026-1
Repositório do GRUPO 08 do Projeto Interdisciplinar do 3º semestre DSM 2026/1. Aluno: Guilherme Laurindo de Souza Silva.

# Daily Task API

API REST desenvolvida para gerenciamento de tarefas utilizando Node.js, Express, Prisma ORM e MongoDB Atlas.

O projeto foi desenvolvido para a disciplina de Banco de Dados Não Relacional (BDNR), utilizando modelagem NoSQL orientada a documentos.

---

# Tecnologias Utilizadas

* Node.js
* Express
* Prisma ORM
* MongoDB Atlas
* JavaScript
* Nodemon

---

# Objetivo do Projeto

O sistema Daily Task tem como objetivo auxiliar usuários no gerenciamento de tarefas, permitindo:

* Cadastro de usuários
* Criação de categorias
* Gerenciamento de tarefas
* Controle de itens da tarefa
* Envio de notificações

A aplicação utiliza MongoDB como banco de dados não relacional e Prisma ORM para manipulação dos dados.

---

# Estrutura do Projeto

```txt
src/
│
├── app.js
├── bin/
│   └── server.js
│
├── controllers/
│   ├── categorias.js
│   ├── usuarios.js
│   ├── tarefas.js
│   ├── itensTarefa.js
│   └── notificacoes.js
│
├── routes/
│   ├── categorias.js
│   ├── usuarios.js
│   ├── tarefas.js
│   ├── itensTarefa.js
│   └── notificacoes.js
│
├── database/
│   └── client.js
│
├── generated/
│   └── prisma/
│
└── prisma/
    └── schema.prisma
```

---

# Modelagem do Banco

O banco de dados foi modelado utilizando MongoDB com as seguintes entidades:

* Usuario
* Categoria
* Tarefa
* ItemTarefa
* Notificacao

Os relacionamentos foram implementados utilizando Prisma ORM.

---

# Instalação do Projeto

## Clonar repositório

```bash
git clone https://github.com/seu-repositorio.git
```

---

## Acessar pasta do backend

```bash
cd back-end
```

---

## Instalar dependências

```bash
npm install
```

---

# Configuração do Banco

Criar um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/task?retryWrites=true&w=majority"
```

---

# Gerar Prisma Client

```bash
npx prisma generate
```

---

# Sincronizar banco de dados

```bash
npx prisma db push
```

---

# Executar projeto

```bash
npm run dev
```

Servidor executando em:

```txt
http://localhost:8888
```

---

# Rotas da API

## Categorias

| Método | Rota            |
| ------ | --------------- |
| GET    | /categorias     |
| GET    | /categorias/:id |
| POST   | /categorias     |
| PUT    | /categorias/:id |
| DELETE | /categorias/:id |

---

## Usuários

| Método | Rota          |
| ------ | ------------- |
| GET    | /usuarios     |
| GET    | /usuarios/:id |
| POST   | /usuarios     |
| PUT    | /usuarios/:id |
| DELETE | /usuarios/:id |

---

## Tarefas

| Método | Rota         |
| ------ | ------------ |
| GET    | /tarefas     |
| GET    | /tarefas/:id |
| POST   | /tarefas     |
| PUT    | /tarefas/:id |
| DELETE | /tarefas/:id |

---

## Itens da Tarefa

| Método | Rota             |
| ------ | ---------------- |
| GET    | /itensTarefa     |
| GET    | /itensTarefa/:id |
| POST   | /itensTarefa     |
| PUT    | /itensTarefa/:id |
| DELETE | /itensTarefa/:id |

---

## Notificações

| Método | Rota              |
| ------ | ----------------- |
| GET    | /notificacoes     |
| GET    | /notificacoes/:id |
| POST   | /notificacoes     |
| PUT    | /notificacoes/:id |
| DELETE | /notificacoes/:id |

---

# Exemplo de Requisição

## Criar usuário

```http
POST /usuarios
```

Body:

```json
{
  "nome": "Guilherme",
  "email": "gui@email.com",
  "senha": "123456"
}
```

---

# Considerações Finais

O projeto demonstrou a utilização prática de banco de dados não relacional utilizando MongoDB integrado ao Node.js através do Prisma ORM.

A arquitetura da aplicação foi organizada seguindo o padrão MVC, permitindo maior organização, escalabilidade e manutenção do sistema.

Além disso, o projeto implementa operações CRUD completas e relacionamentos entre coleções utilizando recursos do Prisma ORM.
