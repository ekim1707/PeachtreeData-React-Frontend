import axios from 'axios';

export default (data) => {
    const signUpUrl = `https://still-falls-16479.herokuapp.com/users/loginProcess`
    const axiosResponse = axios.post(signUpUrl, data);
    return {
        type: 'login',
        payload: axiosResponse
    }
}