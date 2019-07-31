import axios from 'axios'

const baseUrl = 'http://www.embracek.cn/api/'

let axios_http = axios.create({
	baseURL: baseUrl,
	timeout: 5000,
	headers: {}
})

/** 请求拦截器 **/
axios_http.interceptors.request.use(
	config => {
		return config
	},
	error => {
		Promise.reject(error)
	}
)

/** 响应拦截器 **/
axios_http.interceptors.response.use(
	config => {
		return config
	},
	error => {
		Promise.reject(error)
	}
)

export default {
	get: (url, params) => axios_http.get(url, { params: params }),
	post: (url, params, config) => axios_http.post(url, params, config),
	put:(url, params) => axios_http.put(url, params),
	all: (arr) => axios_http.all(arr)
}

