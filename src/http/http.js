import axios from 'axios'

const baseUrl = ''

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


export default axios_http
