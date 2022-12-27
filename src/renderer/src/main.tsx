import { render } from "solid-js/web"
import "./styles/index.css"
import App from "./App"
import { queryClient, trpc, trpcClient } from "./lib/trpc"
import { QueryClientProvider } from "@tanstack/solid-query"

render(
	() => (
			<trpc.Provider client={trpcClient} queryClient={queryClient}>
				<App />
			</trpc.Provider>
	),
	document.getElementById("root") as HTMLElement
)
