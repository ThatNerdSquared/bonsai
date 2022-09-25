import CONFIG from "./config"

const postToDiscordApi = async <T,>(
    route: string,
    body: Record<string, unknown>,
    typeGuard?: (x: Record<string, unknown>) => boolean
): Promise<T> => {
    const headers = {
        Authorization: `Bot ${CONFIG.bot_token}`,
        "Content-Type": "application/json",
        "User-Agent": "Bonsai (https://bonsai.thatnerd.workers.dev/, 0.0.1)"
    }
    // pls pls pls work
    const res = await fetch(route, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
    })
    const data = await res.json()
    console.log("$$AWAITED RESULT$$")
    console.log(data)
    console.log(headers)
    if (typeGuard) {
        if (typeGuard(data)) {
            console.log("passed type guard")
            return data
        }
        console.log("failed type guard")
    }
    else {
        return data
    }
    throw `Result for POST to ${route} did not return expected data!`
}

export { postToDiscordApi }