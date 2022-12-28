import { Mode } from "fs"
import { createStore } from "solid-js/store"
import { getDefaulKeymaps } from "./default/keymaps"
import { TypingUnit } from "./type"

export type Keymap = {
	mode: Mode | Mode[]
	typing: TypingUnit[]
	action: (typed: TypingUnit[]) => void
}

export const [keymaps, setKeymaps] = createStore(getDefaulKeymaps() as Keymap[])
export const addKeymap = (keymap: Keymap) => {
	setKeymaps((keymaps) => [...keymaps, keymap])
}
