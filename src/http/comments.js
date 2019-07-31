import http from '@/http/api'

export default {
	/** 歌曲评论
	 * 说明:  调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要 登录 )
	 * Params:
	 * id: 音乐 id
	 * limit: 取出评论数量 , 默认为 20
	 * before: 分页参数,取上一页最后一项的
	 * time 获取下一页数据(获取超过5000条评论的时候需要用到)
	 * **/
	MusicComment(params){
		return http.get(`/comment/music`, params)
	},
	/** 歌单评论
	 * 说明:  调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
	 * Params:
	 * id: 歌单 id
	 * limit: 取出评论数量 , 默认为 20
	 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
	 * before: 分页参数,取上一页最后一项的
	 * time 获取下一页数据(获取超过5000条评论的时候需要用到)
	 * **/
	PlayListComment(params){
		return http.get(`/comment/playlist`, params)
	},
	/** mv 评论
	 * 说明:  调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
	 * Params:
	 * id: mv id
	 * limit: 取出评论数量 , 默认为 20
	 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
	 * before: 分页参数,取上一页最后一项的
	 * time 获取下一页数据(获取超过5000条评论的时候需要用到)
	 * **/
	MvComment(params){
		return http.get(`/comment/mv`, params)
	},
	/** 电台节目评论
	 * 说明:  调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 mv 的所有评论 ( 不需要 登录 )
	 * Params:
	 * id: 电台节目的 id
	 * limit: 取出评论数量 , 默认为 20
	 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
	 * before: 分页参数,取上一页最后一项的
	 * time 获取下一页数据(获取超过5000条评论的时候需要用到)
	 * **/
	DjComment(params){
		return http.get(`/comment/dj`, params)
	},
	/** 视频评论
	 * 说明:  调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该 视频 的所有评论 ( 不需要登录 )
	 * Params:
	 * id: 电台节目的 id
	 * limit: 取出评论数量 , 默认为 20
	 * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
	 * before: 分页参数,取上一页最后一项的
	 * time 获取下一页数据(获取超过5000条评论的时候需要用到)
	 * **/
	VideoComment(params){
		return http.get(`/comment/video`, params)
	},
	/** 热门评论
	 * 说明:  调用此接口 , 传入 type, 资源 id 可获得对应资源热门评论 ( 不需要登录 )
	 * Params:
	 * id : 资源 id
	 * tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
	 * **/
	HotComment(params){
		return http.get(`/comment/hot`, params)
	},
	/** 给评论点赞
	 * 说明:  调用此接口 , 传入 type, 资源 id, 和评论 id cid 和 是否点赞参数 t 即可给对 应评论点赞 ( 需要登录 )
	 * Params:
	 * id : 资源 id, 如歌曲 id,mv id
	 * cid : 评论 id
	 * t : 是否点赞 ,1 为点赞 ,0 为取消点赞
	 * tpye: 数字 , 资源类型 , 对应歌曲 , mv, 专辑 , 歌单 , 电台, 视频对应以下类型
	 * 0: 歌曲
	 
	 1: mv
	 
	 2: 歌单
	 
	 3: 专辑
	 
	 4: 电台
	 
	 5: 视频
	 
	 6: 动态
	 * **/
	LikeComment(params){
		return http.get(`/comment/like`, params)
	},
	/** 发送/删除评论
	 * 说明:  调用此接口,可发送评论或者删除评论
	 * 注意：如给动态发送评论，则不需要传 id，需要传动态的 threadId,如：/comment?t=1&type=6&threadId=A_EV_2_6559519868_32953014&content=test
	 * Params:
	 * t:1 发送 0删除
	 * tpye: 数字,资源类型,对应歌曲,mv,专辑,歌单,电台,视频对应以下类型
	 * id:对应资源 id
	 * content :要发送的内容
	 * 0: 歌曲
	 
	 1: mv
	 
	 2: 歌单
	 
	 3: 专辑
	 
	 4: 电台
	 
	 5: 视频
	 
	 6: 动态
	 * **/
	Comment(params){
		return http.get(`/comment`, params)
	},
}
