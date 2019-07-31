import http from '@/http/api'

export default {
	/** 更新用户歌单
	 * 说明 : 登陆后调用此接口,可以更新用户歌单
	 * Params:
	 * id:歌单id
	 * name:歌单名字
	 * desc:歌单描述
	 * tags:歌单tag
	 * **/
	UpdateUserPlayList(params){
		return http.get(`/playlist/update`, params)
	},
	/** 获取用户歌单
	 * 说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单
	 * Params:
	 * uid
	 * **/
	GetUserPlayList(params){
		return http.get(`/user/playlist`, params)
	},
	/** 心动模式/智能播放
	 * 说明 : 调用此接口 , 可获取心动模式/智能播放列表
	 * Params:
	 * id : 歌曲 id
	 * pid : 歌单 id
	 * **/
	PlayMode(params){
		return http.get(`/playmode/intelligence/list`, params)
	},
	/** 歌单分类
	 * 说明 : 登陆后调用此接口,可以更新用户歌单
	 * Params:
	 * **/
	catlist(params){
		return http.get(`/playlist/catlist`, params)
	},
	/** 热门歌单分类
	 * 说明: 调用此接口,可获取歌单分类,包含 category 信息
	 * Params:
	 * **/
	HotPlayList(params){
		return http.get(`/playlist/hot`, params)
	},
	/** 歌单 ( 网友精选碟 )
	 * 说明: 调用此接口 , 可获取网友精选碟歌单
	 * Params:
	 * order: 可选值为 'new' 和 'hot', 分别对应最新和最热 , 默认为 'hot'
	 * limit : 返回数量 , 默认为 30
	 * cat: 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
	 * **/
	TopPlayList(params){
		return http.get(`/top/playlist`, params)
	},
	/** 获取精品歌单
	 * 说明: 调用此接口 , 可获取网友精选碟歌单
	 * Params:
	 * cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
	 * limit: 取出歌单数量 , 默认为 20
	 * before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
	 * **/
	HighqualityPlayList(params){
		return http.get(`/top/playlist/highquality`, params)
	},
	/** 相关歌单推荐
	 * 说明: 说明 : 调用此接口,传入歌单 id 可获取相关歌单(对应页面 https://music.163.com/#/playlist?id=1)
	 * Params:
	 * id : 歌单 id
	 * **/
	RelatedPlayList(params){
		return http.get(`/related/playlist`, params)
	},
	/** 获取歌单详情
	 * 说明: 歌单能看到歌单名字 , 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
	 * Params:
	 * id : 歌单 id
	 * s : 歌单最近的 s 个收藏者
	 * **/
	PlayListDetail(params){
		return http.get(`/playlist/detail`, params)
	},
	/** 新建歌单
	 * 说明: 调用此接口 , 传入歌单名字可新建歌单
	 * Params:
	 * name : 歌单名
	 * privacy : 是否设置为隐私歌单，默认否，传'10'则设置成隐私歌单
	 * **/
	CreatePlayList(params){
		return http.get(`/playlist/create`, params)
	},
	/** 对歌单添加或删除歌曲
	 * 说明: 调用此接口 , 可以添加歌曲到歌单或者从歌单删除某首歌曲 ( 需要登录 )
	 * Params:
	 * op: 从歌单增加单曲为 add, 删除为 del
	 * pid: 歌单 id tracks: 歌曲 id,可多个,用逗号隔开
	 * **/
	TracksPlayList(params){
		return http.get(`/playlist/tracks`, params)
	},
}
