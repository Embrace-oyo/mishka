import http from '@/http/api'

export default {
	/** 分享歌曲、歌单、mv、电台、电台节目到动态
	 * 说明 : 登陆后调用此接口 ,可以分享歌曲、歌单、mv、电台、电台节目到动态
	 * Params:
	 * id : 资源 id （歌曲，歌单，mv，电台，电台节目对应 id）
	 * type: 资源类型，默认歌曲 song，可传 song,playlist,mv,djradio,djprogram
	 * msg: 内容，140 字限制，支持 emoji，@用户名（/user/follows接口获取的用户名，用户名后和内容应该有空格），图片暂不支持
	 * **/
	shareResource(params){
		return http.get(`/share/resource`, params)
	},
	/** 转发用户动态
	 * 说明 : 登陆后调用此接口 ,可以转发用户动态
	 * Params:
	 * evId : 动态 id
	 * forwards : 转发的评论
	 * **/
	EventForward(params){
		return http.get(`/event/forward`, params)
	},
}
