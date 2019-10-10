import axios from 'axios';

export default (data) => {
    const registerURL = `${window.apiHost}/users/registerProcess`;
    const res = axios.post(registerURL, data);
    return ({
        type: 'register',
        payload: res
    })
}