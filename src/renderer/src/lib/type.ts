import { createSignal } from "solid-js"

export type TypingUnit = string
export const [typing, setTyping] = createSignal([] as TypingUnit[])
export const clearTyped = () => setTyping([])
