import { Hono } from "hono";
import { Bindings } from "hono/dist/types/types";

import * as githubController from '../controllers/auth/oauth/github.controller'

export const route = new Hono<{ Bindings: Bindings }>()

route.get('/github/redirect', githubController.redirect)

route.post('/github/callback', githubController.callback)
