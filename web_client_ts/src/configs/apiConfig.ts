export const mode: string = "local";

export const baseURL: string =
    (mode === "local") ?
        'http://192.168.34.155:8989/' :
        (mode==="mobile")?
            'http://192.168.34.155:8989/':
        (mode === "dev") ?
            'http://192.168.137.1:8282/' :
            (mode === "prod") ?
                'http://localhost:8989/' :
                ""

export const payload: Object = {}

export const header: Object = {
    "Content-Type": "application/json"
}