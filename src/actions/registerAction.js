import axios from 'axios';

export default (data) => {
    const registerURL = `https://still-falls-16479.herokuapp.com/users/registerProcess`;
    const res = axios.post(registerURL, data);
    return ({
        type: 'register',
        payload: res
    })
}