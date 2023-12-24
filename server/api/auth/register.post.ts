
import { getClient } from "~/lib/prisma"

const prismaClient = getClient()

export default defineEventHandler(async (event: any) => {
    try {
        const { name, email, password } = event.data
        console.log({ name, email, password })

        if (!name || !email || !password) {
            throw createError({
                statusCode: 500,
                statusMessage: 'Missing Info'
            })
        }
        const user = prismaClient.user.create({
            data: {
                name,
                email,
            }
        })
        return { user }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Something Went Wrong'
        })
    }
})