import { get, post, del } from "./requester"

const baseUrl = "http://localhost:3030"


export const login = async (email, password) =>
    post(`${baseUrl}/users/login`, { email, password })


export const register = async (email, password) =>
    post(`${baseUrl}/users/register`, { email, password })

export const logout = async () => get(`${baseUrl}/users/logout`)


