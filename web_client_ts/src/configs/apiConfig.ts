export const mode: string = "local";

export const baseURL: string =
    (mode === "local") ?
        'http://localhost:8989/' :
        (mode === "mobile") ?
            'http://192.168.1.29:8989/' :
            (mode === "dev") ?
                'http://192.168.137.1:8989/' :
                (mode === "prod") ?
                    'http://localhost:8989/' :
                    ""

export const payload: Object = {}

export const header: Object = {
    "Content-Type": "application/json"
}