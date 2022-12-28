import { createStore } from "solid-js/store"

export const [settings, setSettings] = createStore({
    bgColor: "black",
    cursor: {
        color: 'white', 
        blindingInterval: 500,
    }
})
