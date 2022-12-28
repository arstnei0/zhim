import { ipcLink } from "electron-trpc/renderer"
import type { AppRouter } from "../../../main/trpc"
import { createTRPCSolid } from "zihan-solid-trpc"
import { QueryClient } from "@tanstack/solid-query"

export const queryClient = new QueryClient()
export const trpc = createTRPCSolid<AppRouter>({
	queryClient,
})
export const trpcClient = trpc.createClient({
	links: [ipcLink()],
})
