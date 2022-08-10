import { createContext, useContext, useReducer } from "react";


export const AuthContext = createContext(null);

export const AuthProvider = ({
    reducer,
    initialState,
    children,
}) => {
    
    return (
        <AuthContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthValue = () => useContext(AuthContext)