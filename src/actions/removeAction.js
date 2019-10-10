import axios from 'axios';

export default (data) => {
    console.log(data);
    const registerURL = `${window.apiHost}/users/remove/${data.update}`;
    const res = axios.post(registerURL, data);
    return ({
        type: 'update',
        payload: res
    })
}