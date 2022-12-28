import { cursorLine, cursorRow } from "@renderer/lib/cursor"
import { settings } from "@renderer/lib/settings"
import { Component, createMemo, createSignal, For, onMount } from "solid-js"

export const WithCursor: Component<{
	content: string
}> = (props) => {
	const [blinding, setBlinding] = createSignal(true)
	const contentArr = createMemo(() => props.content.split("\n"))

	const leftPart = createMemo(() => contentArr().slice(0, cursorLine()))
	const theLine = createMemo(() => contentArr()[cursorLine()])
	const rightPart = createMemo(() =>
		contentArr().slice(cursorLine() + 1, contentArr().length + 1)
	)

	const theLineWithCursor = createMemo(() => {
        const tl = theLine()
        const cr = cursorRow() > tl.length - 1 ? tl.length - 1 : cursorRow()
		return (
			<>
				{tl.slice(0, cr)}
				<span
					class="cursor"
					style={{
						"background-color": blinding()
							? settings.cursor.color
							: settings.bgColor,
					}}
				>
					{tl.at(cr)}
				</span>
				{tl.slice(cr + 1, tl.length + 1)}
			</>
		)
	})

	onMount(() => {
		setInterval(
			() => setBlinding((b) => !b),
			settings.cursor.blindingInterval
		)
	})

	return (
		<>
			<For each={leftPart()}>{(line) => <p>{line}</p>}</For>
			<p>{theLineWithCursor()}</p>
			<For each={rightPart()}>{(line) => <p>{line}</p>}</For>
		</>
	)
}
