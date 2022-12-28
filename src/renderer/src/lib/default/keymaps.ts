import { setCursorLine, setCursorRow } from "../cursor"
import { Keymap } from "../keymaps"
import { setMode } from "../mode"

export const getDefaulKeymaps = (): Keymap[] => [
	{
		mode: "n",
		typing: ["i"],
		action: () => {
			setMode("i")
		},
	},
	{
		mode: "n",
		typing: ["j"],
		action: () => {
			setCursorLine((l) => l + 1)
		},
	},
	{
		mode: "n",
		typing: ["k"],
		action: () => {
			setCursorLine((l) => l - 1)
		},
	},
	{
		mode: "n",
		typing: ["l"],
		action: () => {
			setCursorRow((l) => l + 1)
		},
	},
	{
		mode: "n",
		typing: ["h"],
		action: () => {
			setCursorRow((l) => l - 1)
		},
	},{
		mode: "n",
		typing: ["b"],
		action: () => {
			setCursorRow((l) => l - 1)
		},
	}
]
