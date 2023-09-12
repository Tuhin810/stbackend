export const mode: string = "local";

export const baseURL: string =
    (mode === "local") ?
        'http://127.0.0.1:8989/' :
        (mode === "dev") ?
            'http://13.50.177.162:8282/' :
            (mode === "prod") ?                'http://localhost:8989/' :
                ""

export const payload: Object = {}

export const header: Object = {
    "Content-Type": "application/json"
}