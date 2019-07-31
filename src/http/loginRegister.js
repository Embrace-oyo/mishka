import http from '@/http/api'

export default {
	/** 手机密码登录
	 * params:
	 * phone
	 * password
	 * **/
	PhoneLogin(params){
		return http.get(`/login/cellphone`, params)
	},
	/** 手机密码登录 **/
	RefreshLogin(params){
		return http.get(`/login/refresh`, params)
	},
	/** 发送验证码
	 * params:
	 * phone
	 * **/
	PostSMS(params){
		return http.get(`/captcha/sent`, params)
	},
	/** 验证验证码
	 * params:
	 * phone
	 * captcha
	 * **/
	RegSMS(params){
		return http.get(`/captcha/verify`, params)
	},
	/** 注册&&修改密码
	 * 说明 : 调用此接口 ,传入手机号码和验证码,密码,昵称, 可注册网易云音乐账号(同时可修改密码)
	 * params:
	 * captcha
	 * phone
	 * password
	 * nickname
	 * **/
	register(params){
		return http.get(`/register/cellphone`, params)
	},
	/** 检测手机号是否注册
	 * Params:
	 * phone
	 * **/
	CheckRegister(params){
		return http.get(`/cellphone/existence/check`, params)
	},
	/** 更换绑定手机
	 * 说明 : 调用此接口 ,可更换绑定手机(流程:先发送验证码到原手机号码,再发送验证码到新手机号码然后再调用此接口)
	 * Params:
	 * oldcaptcha
	 * captcha
	 * phone
	 * ctcode
	 * **/
	ChangePhone(params){
		return http.get(`/rebind`, params)
	},
	/** 退出登录
	 * 说明 : 调用此接口 , 可退出登录
	 * **/
	logout(params){
		return http.get(`/logout`, params)
	},
	/** 登录状态
	 * 说明 : 调用此接口,可获取登录状态
	 * Params:
	 * oldcaptcha
	 * captcha
	 * phone
	 * ctcode
	 * **/
	LoginStatus(params){
		return http.get(`/login/status`, params)
	},
}
