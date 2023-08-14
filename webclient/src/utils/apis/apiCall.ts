
import axios from "axios"
import { baseURL } from "../../configs/apiConfig";


export const Get = async (url: string, headers: Object) => {
    try {
        const response = await axios.get(baseURL + url, headers);
        return response;
    } catch (exception) {
        console.log(exception);
    }
}

export const Post = async (url: string, payload: Object, headers: Object) => {
    try {
        const response = await axios.post(baseURL + url, payload, headers);
        return response;
    } catch (exception) {
        console.log(exception);
    }
}

export const Put = async (url: string, payload: Object, headers: Object) => {
    try {
        const response = await axios.put(baseURL + url, payload, headers);
        return response;
    } catch (exception) {
        console.log(exception);
    }
}

export const Delete = async (url: string, headers: Object) => {
    try {
        const response = await axios.delete(baseURL + url, headers);
        return response;
    } catch (exception) {
        console.log(exception);
    }
}

