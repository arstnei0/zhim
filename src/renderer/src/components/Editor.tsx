import { bufs, currentBufIndex, setBufs } from "@renderer/lib/buf"
import { cursorLine, cursorRow, setCursorRow } from "@renderer/lib/cursor"
import { keymaps } from "@renderer/lib/keymaps"
import { mode, setMode } from "@renderer/lib/mode"
import { settings } from "@renderer/lib/settings"
import { clearTyped, setTyping, typing } from "@renderer/lib/type"
import { Mode } from "fs"
import { Component, createEffect } from "solid-js"
import { produce } from "solid-js/store"
import "../styles/editor.css"
import StatusBar from "./StatusBar"
import { WithCursor } from "./WithCursor"

const Editor: Component = () => {
	document.addEventListener("keydown", (e) => {
		const key = e.key
		if (key === "Escape") {
			setMode("n")
			clearTyped()
			return
		}
		setTyping((typing) => [...typing, key])
	})

	createEffect(() => {
		const m = mode()
		const tp = typing()
		if (tp.length == 0) return
		if (m === "i") {
			const currBuf = bufs[currentBufIndex()]
			const lines = currBuf.content.split("\n")
			if (tp[0] === "Backspace") {
				const line = Array.from(lines[cursorLine()])
				line.splice(cursorRow() - 1, 1)
				lines[cursorLine()] = line.join('')

                setCursorRow((r) => r - 2)
			} else {
				lines[cursorLine()] = ((l: string) =>
					l.slice(0, cursorRow()) + tp[0] + l.slice(cursorRow()))(
					lines[cursorLine()]
				)
			}

			setBufs(
				produce((bufs) => {
					bufs[currentBufIndex()] = {
						content: lines.join("\n"),
					}
				})
			)

			setCursorRow((r) => r + 1)

			clearTyped()
			return
		}

		let triggered = false
		keymaps.forEach((keymap) => {
			if (m === keymap.mode || (keymap.mode as Mode[]).includes?.(m)) {
				for (let i in tp) {
					if (keymap.typing[i] != tp[i]) {
						return
					}
				}

				keymap.action(tp)
				clearTyped()
				triggered = true
			}
		})

		if (triggered) return
	})

	return (
		<>
			<div
				class="editor"
				style={{
					"background-color": settings.bgColor,
				}}
			>
				<p>
					<WithCursor
						content={bufs[currentBufIndex()].content}
					></WithCursor>
				</p>
				<StatusBar></StatusBar>
			</div>
		</>
	)
}

export default Editor
