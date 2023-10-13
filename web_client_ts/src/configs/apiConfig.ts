export const mode: string = "dev";

export const baseURL: string =
    (mode === "local") ?

        'http://localhost:8989/' :
        (mode === "mobile") ? 
            'http://192.168.1.164:8989/' :
            (mode === "dev") ?
                'https://dnjggwx9e25i6.cloudfront.net/' :
                (mode === "prod") ?
                    'http://localhost:8989/' :
                    ""


export const payload: Object = {}

export const header: Object = {
    "Content-Type": "application/json"
}