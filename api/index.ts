import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'
import { Bindings } from 'hono/dist/types/types'
const app = new Hono()

app.get('/', (c) => c.text('Educraft API'))
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

const middleware = new Hono<{ Bindings: Bindings }>()
middleware.use('*', prettyJSON())

export default app