const baseUrl = "http://localhost:3030/data/plants"

export const getAll = async () => {
    const response = await fetch(baseUrl)
    const result = await response.json();
    return result
}

export const getOneDetails = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();
    return result
}


