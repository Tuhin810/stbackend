export const validateName = (value: string,type:string) => {
    console.log("called");
    type=type.replace("_"," ");
    // Email regex pattern
    const nameRegex = /^.{2,}$/;
    if (!value) {
        return `${type} is required`;
    } else if (!nameRegex.test(value)) {
        return `Invalid ${type}`;
    }

    return undefined; // No error
};
