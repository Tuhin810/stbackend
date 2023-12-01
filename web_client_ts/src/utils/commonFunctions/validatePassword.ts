export const validatePassword = (value: string) => {
    // Password regex pattern
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  
    // Check if password is empty
    if (!value) {
      return 'Password is required';
    }
  
    // Check if password meets minimum requirements
    if (!passwordRegex.test(value)) {
      return 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one digit';
    }
  
    // // Check password strength based on length and character diversity
    // if (value.length < 12) {
    //   return 'Password is weak';
    // } else if (value.length < 16) {
    //   return 'Password is medium';
    // } else {
    //   return 'Password is strong';
    // }
  };