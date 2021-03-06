import axios from 'axios';

const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api',
    withCredentials: true
});

const errHandler = err => {
    console.error(err);
    if (err.response && err.response.data) {
        console.error('API response', err.response.data);
        throw err.response.data.message;
    }
    throw err;
};

export default {
    service: service,

    // This method is synchronous and returns true or false
    // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
    isLoggedIn() {
        return localStorage.getItem('user') != null;
    },

    // This method returns the user from the localStorage
    // Be careful, the value is the one when the user logged in for the last time
    getLocalStorageUser() {
        return JSON.parse(localStorage.getItem('user'));
    },

    // This method signs up and logs in the user
    signup(userInfo) {
        return service
            .post('/signup', userInfo)
            .then(res => {
                // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
                localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;
            })
            .catch(errHandler);
    },

    login(username, password) {
        return service
            .post('/login', {
                username,
                password
            })
            .then(res => {
                // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
                localStorage.setItem('user', JSON.stringify(res.data));
                return res.data;
            })
            .catch(errHandler);
    },

    logout() {
        localStorage.removeItem('user');
        return service.get('/logout');
    },

    // This is an example on how to use this method in a different file
    // api.getCountries().then(countries => { /* ... */ })

    getSecret() {
        return service
            .get('/secret')
            .then(res => res.data)
            .catch(errHandler);
    },

    addPicture(file) {
        const formData = new FormData();
        formData.append('picture', file);
        return service
            .post('/endpoint/to/add/a/picture', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => res.data)
            .catch(errHandler);
    },

    getAudios(username) {
        return service
            .get(username ? `/upload?username=${username}` : '/upload')
            .then(res => res.data)
            .catch(errHandler);
    },

    getComments(audioId) {
        return service
            .get(`/comments?audioId=${audioId}`)
            .then(res => res.data)
            .catch(errHandler);
    },

    getAllAudios() {
        return service
            .get('/getall-audio')
            .then(res => res.data)
            .catch(errHandler);
    },

    addComments(data) {
        return service
            .post('/comments', data)
            .then(res => res.data)
            .catch(errHandler);
    },

    getProfile() {
        return service
            .get('/profile')
            .then(res => res.data)
            .catch(errHandler);
    },

    postAudio(formData) {
        return service
            .post('/upload', formData)
            .then(res => res.data)
            .catch(errHandler);
    }
};
