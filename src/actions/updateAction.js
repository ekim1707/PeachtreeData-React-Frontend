import axios from 'axios';

export default (data) => {
    const registerURL = `${window.apiHost}/users/update/${data.update}`;
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