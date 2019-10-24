import axios from 'axios';

export default (data) => {
    console.log(data);
    const registerURL = `https://still-falls-16479.herokuapp.com/users/remove/${data.update}`;
    const res = axios.post(registerURL, data);
    return ({
        type: 'update',
        payload: res
    })
}