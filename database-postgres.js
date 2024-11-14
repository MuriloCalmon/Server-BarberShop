// import { randomUUID } from 'crypto'
import { sql } from "./db.js";

export class DataBasePostgres {


    async registerUser(user) {
        const { login, password } = user

        await sql`INSERT INTO "user" (login, password) VALUES (${login}, ${password}) `
    }

    async listUser() {
        const user = await sql`SELECT * FROM "user"`

        return user
    }

    async registerBarber(barber) {
        const { name, srcImg, stars } = barber

        await sql`INSERT INTO barber (name, src_img, stars) VALUES (${name}, ${srcImg}, ${stars})`
    }

    async listBarbers() {
        const barber = await sql`SELECT * FROM barber`

        return barber
    }

    async registerServices(servicesId, services) {
        for (const {service, price} of services) {
            await sql`INSERT INTO services (barber_id, service_name, price) VALUES (${servicesId}, ${service}, ${price})`;
        }
    }

    async listServices(id) {
        const services = await sql`SELECT * FROM services WHERE barber_id = ${id}`
        return services
    }

    async registerDateTime(dateTimeId, dateTime) {
        const {date, time} = dateTime
            console.log(date,time)
            await sql`INSERT INTO datetime (barber_id, date, time) VALUES (${dateTimeId}, ${date}, ${time})`;
        
    }

    async listDateTime(id) {
        const dateTime = await sql`SELECT * FROM datetime WHERE barber_id = ${id}`
        return dateTime
    }

}

