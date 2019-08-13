import axios from 'axios';
const base = ''
const Ajax = function (url, data={}, type='get') {
    if(type === 'get'){
        return axios.get(base+url, {params: data})
    }else if(type === 'post'){
        return axios.post(base+url, data)
    }
}

export default Ajax