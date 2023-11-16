
export const NODE_ENV: "LOCAL" | "DEV" | "PROD" = "PROD";

export const baseURL: string =
    (NODE_ENV.toString() === "LOCAL") ?
        'http://localhost:8989/' :
        (NODE_ENV.toString() === "DEV") ?
            'http://192.168.1.6:8989/' :
            (NODE_ENV.toString() === "PROD") ?
                'https://dnjggwx9e25i6.cloudfront.net/' :
                ""

export const socketURL: string =
    (NODE_ENV.toString() === "LOCAL") ?
        'http://localhost:9999/' :
        (NODE_ENV.toString() === "DEV") ?
            'http://192.168.1.6:9999/' :
            (NODE_ENV.toString() === "PROD") ?
                'https://dnjggwx9e25i6.cloudfront.net' :
                ""


export const payload: Object = {}

export const header: Object = {
    "Content-Type": "application/json"
}