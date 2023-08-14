export const getLoginStatus = (): boolean => {
    return localStorage.getItem('loggedIn') === 'true';
}