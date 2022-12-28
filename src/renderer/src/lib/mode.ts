import { createSignal } from "solid-js"

export const modes = ["n", "v", "i", "c"]
export type Mode = typeof modes[number]

export const [mode, setMode] = createSignal("n" as Mode)
