import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

const PORT = process.env.PORT
  ? parseInt(process.env.PORT)
  : 5568

app.listen({
  port: PORT
}).then(() => {
  console.log(`HTTP Server running on http://localhost:${PORT} !`)
})