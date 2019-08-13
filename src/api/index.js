import Ajax from './ajax';

export default {
    loginApi(data){
        return Ajax('/login/cellphone', data, 'get');
    },
}