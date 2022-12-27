import type { Component } from "solid-js"
import { trpc } from "./lib/trpc"

const App: Component = () => {
    const msg = trpc.msg.useQuery()
	return (
        <>
            <h1>Hello world</h1>
            <p>Message from trpc: {msg.data}</p>
        </>
	)
}

export default App
