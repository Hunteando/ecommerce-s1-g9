import { createStore } from "redux"
import { rootReducer } from "./rootReducer"

const initalState = {}

export const store = createStore(
    rootReducer,
    initalState
)