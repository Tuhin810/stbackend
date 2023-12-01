export const validateEmail = (value: string) => {
    // Email regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
        return 'Email is required';
    } else if (!emailRegex.test(value)) {
        return 'Invalid email format';
    }

    return undefined; // No error
};
