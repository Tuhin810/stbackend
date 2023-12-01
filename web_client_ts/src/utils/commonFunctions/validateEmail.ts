export const validateEmail = (value: string) => {
    // Email regex pattern
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    if (!value) {
        return 'Email is required';
    } else if (!emailRegex.test(value)) {
        return 'Invalid email format';
    }

    return undefined; // No error
};
