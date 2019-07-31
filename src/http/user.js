import http from '@/http/api'

export default {
	/** 初始化昵称
	 * 说明 : 刚注册的账号(需登录),调用此接口 ,可初始化昵称
	 * Params:
	 * nickname
	 * **/
	ResetNickName(params){
		return http.get(`/cellphone/existence/check`, params)
	},
	/** 获取用户详情
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户详情
	 * Params:
	 * uid
	 * **/
	GetUserDetail(params){
		return http.get(`/user/detail`, params)
	},
	/** 获取用户信息 , 歌单，收藏，mv, dj 数量
	 * 说明 : 说明 : 登陆后调用此接口 , 可以获取用户信息
	 * Params:
	 * uid
	 * **/
	GetUserSubcount(params){
		return http.get(`/user/subcount`, params)
	},
	/** 更新用户信息
	 * 说明 : 登陆后调用此接口 , 传入相关信息,可以更新用户信息
	 * Params:
	 * gender: 性别 0:保密 1:男性 2:女性
	 * birthday: 出生日期,时间戳 unix timestamp
	 * nickname: 用户昵称
	 * province: 省份id
	 * city: 城市id
	 * signature：用户签名
	 * **/
	UpdateUser(params){
		return http.get(`/user/update`, params)
	},
	/** 获取用户电台
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户电台
	 * Params:
	 * uid
	 * **/
	GetUserDj(params){
		return http.get(`/user/dj`, params)
	},
	/** 获取用户播放记录
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可获取用户播放记录
	 * Params:
	 * uid : 用户 id
	 * type : type=1 时只返回 weekData, type=0 时返回 allData
	 * **/
	UserRecord(params){
		return http.get(`/user/record`, params)
	},
}
