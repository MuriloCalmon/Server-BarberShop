import Fastify from 'fastify'
import cors from '@fastify/cors'
import { DataBaseMemory } from './database-memory.js'
import { DataBasePostgres } from './database-postgres.js'
const fastify = Fastify()

//const database = new DataBaseMemory()
const database = new DataBasePostgres()

fastify.register(cors, {
    origin: '*' // Permitir que qualquer origem acesse a API
});

fastify.post('/user', async (request, reply) => {
    const { login, password, confirmPassword } = request.body

    await database.registerUser({
        login,
        password,
        confirmPassword
    })

    reply.status(201).send()
})

fastify.get('/user', async (request, reply) => {
    const user = await database.listUser()
    return user
})

fastify.post('/barber', async (request, reply) => {

    const
        { name, srcImg, stars: [star1, star2, star3, star4, star5] }
            = request.body
    await database.registerBarber({
        name,
        srcImg,
        stars: [star1, star2, star3, star4, star5]
    })

    reply.status(201).send()
})

fastify.get('/barber', async (request) => {
    const name = request.query.name
    const barber = await database.listBarbers(name)

    return barber
})

fastify.post('/services', async (request, reply) => {
    const services = request.body
    const servicesId = request.query.id
    await database.registerServices(servicesId, services)

    reply.status(201).send()
});

fastify.get('/services/:id', async (request, reply) => {
    const { id } = request.params
    const services = await database.listServices(id)
    return services
})

fastify.post('/datetime', (request, reply) => {
    const dateTime = request.body
    const dateTimeId = request.query.id
    database.registerDateTime(dateTimeId, dateTime)

    reply.status(201).send()
})

fastify.get('/datetime/:id', (request, reply) => {
    const { id } = request.params
    const dateTime = database.listDateTime(id)
    return dateTime
})

try {
    await fastify.listen({ port: 3334 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
