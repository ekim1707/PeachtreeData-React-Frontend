import axios from 'axios';

export default (data) => {
    const registerURL = `https://still-falls-16479.herokuapp.com/users/update/${data.update}`;
    if (data.update === 'connections') {
        const res = axios.put(registerURL, data);
        return ({
            type: 'update',
            payload: res
        })
    }
    const res = axios.post(registerURL, data);
    return ({
        type: 'update',
        payload: res
    })
}