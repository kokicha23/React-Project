import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initialAuthState } from './authInitialState';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth', initialAuthState);

    const loginUser = (accessToken, email, id) => {
        setAuth({ accessToken, email, _id: id });
    };

    const logoutUser = () => {
        setAuth(initialAuthState);
    };

    const isAuthenticated = !!auth?.accessToken;

    return (
        <AuthContext.Provider
            value={{ user: auth, isAuthenticated, loginUser, logoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);