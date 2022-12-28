import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import { getDefaultBufs } from "./default/bufs"

export interface Buf {
	content: string
}

export const [bufs, setBufs] = createStore(getDefaultBufs() as Buf[])
export const [currentBufIndex, setCurrentBufIndex] = createSignal(0)

export const addBuf = (buf: Buf) => {
	setBufs((bufs) => [...bufs, buf])
}
