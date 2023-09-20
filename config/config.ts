import { z } from 'zod'

const envVarsSchema = z.object({
    ENV: z.union([z.literal('production'), z.literal('development'), z.literal('test')]),
    DATABASE_URL: z.string(),
})

export interface Config {
    env: 'production' | 'development' | 'test',
    database: {
        url: string,
    }
}

let config: Config

export const getConfig = (env: string): Config => {
    if (config) return config

    const envVars = envVarsSchema.parse(env)

    config = {
        env: envVars.ENV,
        database: {
            url: envVars.DATABASE_URL,
        },
    }
    return config
}