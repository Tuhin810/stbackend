
export const NODE_ENV: "LOCAL" | "DEV" | "PROD" = "PROD";

export const baseURL: string =
    (NODE_ENV.toString() === "LOCAL") ?
        'http://localhost:8989/' :
        (NODE_ENV.toString() === "DEV") ?
            'http://localhost:8989/' :
            (NODE_ENV.toString() === "PROD") ?
                'http://localhost:8989/' :
                ""

export const socketURL: string =
    (NODE_ENV.toString() === "LOCAL") ?
        'http://localhost:9999/' :
        (NODE_ENV.toString() === "DEV") ?
            'http://localhost:8989/' :
            (NODE_ENV.toString() === "PROD") ?
                'http://localhost:8989/' :
                ""


export const payload: Object = {}

export const header: Object = {
    "Content-Type": "application/json"
}