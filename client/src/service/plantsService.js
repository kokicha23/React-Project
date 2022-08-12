import { del, get, post, put } from "./requester";

const baseUrl = "http://localhost:3030"

export const getAll = async () => get(`${baseUrl}/data/plants`)

export const getOneDetails = async (id) => get(`${baseUrl}/data/plants/${id}`)

export const postPlant = async (body) => post(`${baseUrl}/data/plants`, body)

export const editPlant = async (body, id) => put(`${baseUrl}/data/plants/${id}`, body)

export const deletePlant = async (id) => del(`${baseUrl}/data/plants/${id}`)

export const getByOwner = async (id) => get(`${baseUrl}/data/plants?where=${encodeURIComponent(`_ownerId="${id}"`)}`)