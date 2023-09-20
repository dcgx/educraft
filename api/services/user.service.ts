import { getDBClient } from "../../config/database"

import { User } from "../models/user.model"

export const getUserByProviderIdType = async (providerUserId: string, providerType: string): Promise<User | undefined> => {
    const db = await getDBClient()
    const user = await db.user.findFirst({
        where: {
            authorizations: {
                some: {
                    providerUserId,
                    providerType
                }
            }
        }
    })
    return user ? new User(user) : undefined
}

export const createOauthUser = async (providerUser: object): Promise<User> => {
    const db = await getDBClient()
    try {
        const createdUser = await db.user.create({
            data: {
                name: 'Test',
                email: 'test@test.test',
                emailVerifiedAt: new Date(),
            }
        })

        await db.authorization.create({
            data: {
                userId: createdUser.id,
                providerType: 'github',
                providerUserId: '1234567890'
            }
        })
        const user = (await getUserByProviderIdType(
            '1234567890',
            'github',
        )) as User

        return new User(user)
    } catch (err) {
        throw new Error('Cannot signup with github, user already exists with that email')
    }
}

// export const createOauthUser = async (
//     providerUser: OAuthUserModel,
//     databaseConfig: Config['database']
//   ): Promise<User> => {
//     const db = getDBClient(databaseConfig)
//     try {
//       await db.transaction().execute(async (trx) => {
//         const userId = await trx
//           .insertInto('user')
//           .values({
//             name: providerUser._name,
//             email: providerUser._email,
//             is_email_verified: true,
//             password: null,
//             role: 'user'
//           })
//           .executeTakeFirstOrThrow()
//         await trx
//           .insertInto('authorisations')
//           .values({
//             user_id: Number(userId.insertId),
//             provider_type: providerUser.providerType,
//             provider_user_id: providerUser._id
//           })
//           .executeTakeFirstOrThrow()
//         return userId
//       })
//     } catch (error) {
//       throw new ApiError(
//         httpStatus.FORBIDDEN,
//         `Cannot signup with ${providerUser.providerType}, user already exists with that email`
//       )
//     }
//     const user = (await getUserByProviderIdType(
//       providerUser._id,
//       providerUser.providerType,
//       databaseConfig
//     )) as User
//     return new User(user)
//   }
