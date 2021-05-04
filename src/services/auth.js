import api from "./api";

export const login = async (email, password) => {
    try {
        api.post('/auth/login', {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('user_token', response.data.token);
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const isAuthenticated = async () => {
    const user_token = localStorage.getItem('user_token');
    return true;
    if (user_token) {
        return await api.get('/auth/is_token_valid', {
            headers: {
                'Authorization': user_token
            }
        });
    }

    return false;
}

export const isAdmin = async () => {
    const user_token = localStorage.getItem('user_token');

    if (isAuthenticated()) {
        return await api.get('/auth/is_admin', {
            headers: {
                'Authorization': user_token
            }
        });
    }

    return false;
}