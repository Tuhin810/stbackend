import { header } from "../../../configs/config"
import { Get } from "../apiCall"

export const getStateList =async (country:string) => {
    const response = await Get(`suggestion/getStateList/${country}`,header);
    return response;
}