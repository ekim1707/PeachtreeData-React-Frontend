import axios from 'axios';

export default (data) => {
    console.log(data.update);
    const registerURL = `${window.apiHost}/users/update/${data.update}`;
    const res = axios.post(registerURL, data);
    return ({
        type: 'update',
        payload: res
    })
}