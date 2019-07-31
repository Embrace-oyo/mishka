import http from '@/http/api'

export default {
	/** 获取动态评论
	 * 说明 : 登陆后调用此接口 , 可以获取动态下评论
	 * Params:
	 * threadId : 动态 id，可通过 /event，/user/event 接口获取
	 * **/
	CommentEvent(params){
		return http.get(`/comment/event`, params)
	},
	/** 获取动态消息
	 * 说明: 调用此接口 , 可获取各种动态 , 对应网页版网易云，朋友界面里的各种动态消息 ，如分享的视频，音乐，照片等！
	 * Params:
	 * pagesize : 每页数据,默认20
	 * lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
	 * **/
	GetEvent(params){
		return http.get(`/event`, params)
	},
	/** 获取用户动态
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户动态
	 * Params:
	 * uid
	 * limit : 返回数量 , 默认为 30
	 * lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
	 * **/
	GetUserEvent(params){
		return http.get(`/user/event`, params)
	},
	/** 删除用户动态
	 * 说明 : 登陆后调用此接口 ,可以删除用户动态
	 * Params:
	 * evId : 动态 id
	 * forwards : 转发的评论
	 * **/
	DeleteEvent(params){
		return http.get(`/event/del`, params)
	},
	/** 获取热门话题
	 * 说明 : 调用此接口 , 可获取热门话题
	 * Params:
	 * limit: 取出评论数量 , 默认为 20
	 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
	 * **/
	HotTopic(params){
		return http.get(`/hot/topic`, params)
	},
}
