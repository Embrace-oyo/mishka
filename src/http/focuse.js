import http from '@/http/api'

export default {
	/** 获取用户关注列表
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户关注列表
	 * Params:
	 * uid
	 * limit : 返回数量 , 默认为 30
	 * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
	 * **/
	GetUserFollows(params){
		return http.get(`/user/follows`, params)
	},
	/** 获取用户粉丝列表
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户粉丝列表
	 * Params:
	 * uid
	 * limit : 返回数量 , 默认为 30
	 * lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
	 * **/
	GetUserFolloweds(params){
		return http.get(`/user/followeds`, params)
	},
	/** 关注/取消关注用户
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 和操作 t,可关注/取消关注用户
	 * Params:
	 * id : 用户 id
	 * t : 1为关注,其他为取消关注
	 * **/
	FocuseAndUnFocuse(params){
		return http.get(`/follow`, params)
	},
}
