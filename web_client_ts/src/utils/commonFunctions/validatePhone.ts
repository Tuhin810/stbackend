export const validatePhone = (value: string) => {
    // Email regex pattern
    const phoneRegex = /^\d{10}$/;
    if (!value) {
        return 'Phone is required';
    } else if (!phoneRegex.test(value)) {
        return 'Invalid Phone Number';
    }

    return undefined; // No error
};
