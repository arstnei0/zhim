import { ipcLink } from "electron-trpc/renderer"
import type { AppRouter } from "../../../main/trpc"
import { createTRPCSolid } from "solid-trpc"
import { QueryClient } from "@tanstack/solid-query";

export const trpc = createTRPCSolid<AppRouter>()
export const trpcClient = trpc.createClient({
	links: [ipcLink()],
})
export const queryClient = new QueryClient();
