import httpStatus from 'http-status'
import { github } from 'worker-auth-providers'
import { StatusCode } from 'hono/utils/http-status'

export const redirect = async (c) => {
    // const config = getConfig(c.env)
    const location = await github.redirect({
        options: {
            clientId: 'clientId',
            // clientId: config.oauth.github.clientId
        }
    })
    return c.redirect(location, httpStatus.FOUND as StatusCode)
}


export const callback = (c) => {
    return c.redirect()
}