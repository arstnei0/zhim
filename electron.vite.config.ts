import { resolve } from "path"
import { defineConfig, externalizeDepsPlugin } from "electron-vite"
import solid from "vite-plugin-solid"
import devtools from 'solid-devtools/vite'

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
	},
	renderer: {
		resolve: {
			alias: {
				"@renderer": resolve("src/renderer/src"),
			},
		},
		plugins: [solid(), devtools({
            autoname: true
        })],
	},
})
