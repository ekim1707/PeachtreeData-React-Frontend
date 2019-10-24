import axios from 'axios';

export default (data) => {
    const signUpUrl = `/users/loginProcess`
    const axiosResponse = axios.post(signUpUrl, data);
    return {
        type: 'login',
        payload: axiosResponse
    }
}