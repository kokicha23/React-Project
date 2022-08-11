import { initialAuthState } from "../context/reducer/authInitialState"

const request = async (method, url, data) => {
    const user = localStorage.getItem("auth")
    const headers = {}
    if (data) {
        headers["Content-Type"] = "application/json"
    }
    if (user) {
        const accessToken = JSON.parse(user).accessToken
        console.log(user, accessToken)
        if (accessToken) {
            headers["X-Authorization"] = accessToken
        }
    }
    try {
        let buildRequest

        if (method === "GET") {
            buildRequest = fetch(url,
                { headers })
        } else {
            buildRequest = fetch(url, {
                method,
                headers,
                body: JSON.stringify(data)
            })
        }

        const response = await buildRequest;
        if (!response.ok) {
            if (response.status === 403) {
                localStorage.setItem("auth", JSON.stringify(initialAuthState))
            }
            throw new Error(response.message)
        }
        if (response.status === 204) {
            return response
        }
        return await response.json();

    } catch (err) {
        throw err
    }

}

export const get = request.bind({}, "GET")
export const post = request.bind({}, "POST")
export const put = request.bind({}, "PUT")
export const patch = request.bind({}, "PATCH")
export const del = request.bind({}, "DELETE")