import { useState } from "react"

export const reducerAuthFunction = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            const { password, ...publicData } = action.payload

            return {
                ...state,
                ...publicData
            }

        default:
            return state
    }
}