import { initTRPC } from "@trpc/server"
import { z } from 'zod'

const t = initTRPC.create({ isServer: true })
export const router = t.router({
    msg: t.procedure.query(() => {
        return 'Hello from trpc!!!'
    })
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof router
export default router
