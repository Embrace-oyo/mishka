import http from '@/http/api'
export default {
	/** 歌手分类列表
	 * 说明: 调用此接口,可获取歌手分类列表
	 * Params:
	 * cat : 即 category Code,歌手类型,默认 1001,返回华语男歌手数据
	 * limit : 返回数量 , 默认为 30
	 * offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
	 * initial: 按首字母索引查找参数,如 /artist/list?cat=1001&initial=b 返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列
	 * 入驻歌手 5001
	 
	 华语男歌手 1001
	 
	 华语女歌手 1002
	 
	 华语组合/乐队 1003
	 
	 欧美男歌手 2001
	 
	 欧美女歌手 2002
	 
	 欧美组合/乐队 2003
	 
	 日本男歌手 6001
	 
	 日本女歌手 6002
	 
	 日本组合/乐队 6003
	 
	 韩国男歌手 7001
	 
	 韩国女歌手 7002
	 
	 韩国组合/乐队 7003
	 
	 其他男歌手 4001
	 
	 其他女歌手 4002
	 
	 其他组合/乐队 4003
	 * **/
	ArtistList(params){
		return http.get(`/artist/list`, params)
	},
}
