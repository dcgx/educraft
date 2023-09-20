import * as userService from './user.service'

export const loginOrCreateUserWithOauth = async (oauthUser: object) => {
    const user = await userService.getUserByProviderIdType('1234567890', 'github')
    if(user) return user
    return userService.createOauthUser(oauthUser)
}