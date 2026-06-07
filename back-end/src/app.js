import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import categoriasRouter from './routes/categorias.js'

import categoriasRouter from './routes/categorias.js'
import usuariosRouter from './routes/usuarios.js'
import tarefasRouter from './routes/tarefas.js'
import itensTarefaRouter from './routes/itensTarefa.js'
import notificacoesRouter from './routes/notificacoes.js'

const app = express()
app.use(express.json())

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())


app.use('/categorias', categoriasRouter)
app.use('/usuarios', usuariosRouter)
app.use('/tarefas', tarefasRouter)
app.use('/itensTarefa', itensTarefaRouter)
app.use('/notificacoes', notificacoesRouter)


app.use('/', indexRouter)
app.use('/users', usersRouter)

export default app


