import { mode } from "@renderer/lib/mode"
import { typing } from "@renderer/lib/type"
import { Component } from "solid-js"
import "../styles/statusbar.css"

export const StatusBar: Component = () => {
	return (
		<div class="statusbar">
            <div class="mode">{mode()}</div>
            <div class="typing"><p>{typing().join("")}</p></div>
		</div>
	)
}

export default StatusBar
