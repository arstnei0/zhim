import { render } from "solid-js/web"
import { trpc, trpcClient } from "./lib/trpc"
import "./styles/index.css"
import App from "./App"

render(
	() => (
		<trpc.Provider client={trpcClient}>
			<App />
		</trpc.Provider>
	),
	document.getElementById("root") as HTMLElement
)
