
import { prisma } from '../database/client.js'

const controller = {}

controller.create = async function(req, res) {
  try {

    await prisma.tarefa.create({
      data: req.body
    })

    return res.status(201).end()

  }
  catch(error) {

    console.error(error)
    return res.status(500).send(error)

  }
}

controller.retrieveAll = async function(req, res) {
  try {

    const result = await prisma.tarefa.findMany({
      include: {
        usuario: true,
        categoria: true,
        itens: true,
        notificacoes: true
      },
      orderBy: [
        { titulo: 'asc' }
      ]
    })

    return res.send(result)

  }
  catch(error) {

    console.error(error)
    return res.status(500).send(error)

  }
}

controller.retrieveOne = async function(req, res) {
  try {

    const result = await prisma.tarefa.findUnique({
      where: { id: req.params.id },
      include: {
        usuario: true,
        categoria: true,
        itens: true,
        notificacoes: true
      }
    })

    if(result) {
      return res.send(result)
    }

    return res.status(404).end()

  }
  catch(error) {

    console.error(error)
    return res.status(500).send(error)

  }
}

controller.update = async function(req, res) {
  try {

    await prisma.tarefa.update({
      where: { id: req.params.id },
      data: req.body
    })

    return res.status(204).end()

  }
  catch(error) {

    console.error(error)

    if(error?.code === 'P2025') {
      return res.status(404).end()
    }

    return res.status(500).send(error)

  }
}

controller.delete = async function(req, res) {
  try {

    await prisma.tarefa.delete({
      where: { id: req.params.id }
    })

    return res.status(204).end()

  }
  catch(error) {

    console.error(error)

    if(error?.code === 'P2025') {
      return res.status(404).end()
    }

    return res.status(500).send(error)

  }
}

export default controller
