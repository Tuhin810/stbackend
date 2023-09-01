import { header } from "../../../configs/apiConfig"
import { Get } from "../apiCall"

export const getStateList =async (country:string) => {
    const response = await Get(`suggestion/getStateList/${country}`,header);
    return response;
}