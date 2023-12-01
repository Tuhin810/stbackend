export const validatePassword = (value: string) => {
  // Password regex pattern (example: at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!value) {
    return 'Password is required';
  } else if (!passwordRegex.test(value)) {
    return 'Password should have at least 8 characters with at least one uppercase letter, one lowercase letter, and one digit';
  }

  return undefined; // No error
};