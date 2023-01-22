import prisma from './lib/prisma'
import { z } from 'zod'
import { FastifyInstance } from 'fastify'
import dayjs from 'dayjs'

export default async function appRoutes(app: FastifyInstance) {
  app.post('/habits', async (req) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(
        z.number().min(0).max(6)
      )
    })

    const { title, weekDays } = createHabitBody.parse(req.body)

    const today = dayjs().startOf('day').toDate()

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map(weekDay => ({
            week_day: weekDay
          }))
        }
      }
    })
  })
}