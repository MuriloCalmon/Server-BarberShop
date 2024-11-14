import { randomUUID } from 'crypto'

export class DataBaseMemory {

    #user = new Map()
    #barber = new Map()
    #services = new Map()
    #dateTime = new Map()

    registerUser(user) {
        const userId = randomUUID()

        this.#user.set(userId, user)
    }

    listUser() {
        return Array.from(this.#user.entries())
            .map((users) => {
                const id = users[0]
                const credentials = users[1]

                return {
                    id,
                    ...credentials
                }
            })
    }

    registerBarber(barber) {
        const barberId = randomUUID()
        this.#barber.set(barberId, barber)
    }

    listBarbers(name) {
        return Array.from(this.#barber.entries())
            .map((barbers) => {
                const id = barbers[0]
                const data = barbers[1]

                return {
                    id,
                    ...data
                }
            })
            .filter(barber => {
                if (name) {
                    return barber.name.includes(name)
                }

                return true
            })
    }

    registerServices(servicesId, services) {
        this.#services.set(servicesId, services)
    }

    listServices(id) {
        return Array.from(this.#services.entries())
            .map((data) => {
                const [id, services] = data

                return {
                    id,
                    services
                }
            })
            .filter(service => {
                if (id) {
                    return service.id.includes(id)
                }

                return true
            })
    }

    registerDateTime(dateTimeId, dateTime) {
        this.#dateTime.set(dateTimeId, dateTime)
    }

    listDateTime(id) {
        return Array.from(this.#dateTime.entries())
            .map((data) => {
                const [id, dateTime] = data

                return {
                    id,
                    dateTime
                }
            })
            .filter(dateTime => {
                if (id) {
                    return dateTime.id.includes(id)
                }

                return true
            })
    }

}

