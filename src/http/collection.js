import http from '@/http/api'

export default {
	/** 收藏/取消收藏歌手
	 * 说明: 调用此接口,可收藏歌手
	 * Params:
	 * artistId : 歌手 id
	 * t:操作,1 为收藏,其他为取消收藏
	 * **/
	SubArtist(params){
		return http.get(`/artist/sub`, params)
	},
	/** 收藏的歌手列表
	 * 说明: 调用此接口,可获取收藏的歌手列表
	 * Params:
	 * **/
	Sublist(params){
		return http.get(`/artist/sublist`, params)
	},
	/** 收藏视频
	 * 说明: 调用此接口,可收藏视频
	 * Params:
	 * id : 视频 id
	 * t : 1 为收藏,其他为取消收藏
	 * **/
	SubVideo(params){
		return http.get(`/video/sub`, params)
	},
	/** 收藏/取消收藏 MV
	 * 说明: 调用此接口,可收藏/取消收藏 MV
	 * Params:
	 * id : MV id
	 * t : 1 为收藏,其他为取消收藏
	 * **/
	SubMv(params){
		return http.get(`/mv/sub`, params)
	},
	/** 收藏的 MV 列表
	 * 说明: 调用此接口,可获取收藏的 MV 列表
	 * Params:
	 * id : MV id
	 * t : 1 为收藏,其他为取消收藏
	 * **/
	SubMvList(params){
		return http.get(`/mv/sublist`, params)
	},
	/** 收藏/取消收藏歌单
	 * 说明: 调用此接口 , 传入类型和歌单 id 可收藏歌单或者取消收藏歌单
	 * Params:
	 * id : 歌单 id
	 * t : 类型,1:收藏,2:取消收藏
	 * **/
	SubPlayList(params){
		return http.get(`/playlist/subscribe`, params)
	},
	/** 歌单收藏者
	 * 说明:  调用此接口 , 传入歌单 id 可获取歌单的所有收藏者
	 * Params:
	 * id : 歌单 id
	 * limit: 取出评论数量 , 默认为 20
	 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
	 * **/
	PlayListSuber(params){
		return http.get(`/playlist/subscribers`, params)
	},
}
