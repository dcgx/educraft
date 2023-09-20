

interface IUser {
    id: string
    name: string | null
    email: string | null
    emailVerifiedAt: Date | null
    // avatarUrl: string | null
}


export class User {
    id: string
    name: string | null
    email: string | null
    emailVerifiedAt: Date | null
    // avatarUrl: string | null

    constructor(user: IUser) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.emailVerifiedAt = user.emailVerifiedAt
        // this.avatarUrl = user.avatarUrl
    }
}