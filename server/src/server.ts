import Fastify from 'fastify'
import cors from '@fastify/cors'
import appRoutes from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

const PORT = process.env.PORT
  ? parseInt(process.env.PORT)
  : 5568

app.listen({
  port: PORT
}).then(() => {
  console.log(`HTTP Server running on http://localhost:${PORT} !`)
})