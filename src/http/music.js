import http from '@/http/api'


export default {
	/** 获取音乐 url
	 * 说明: 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口 , 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url( 不需要登录 )
	 * 注 : 部分用户反馈获取的 url 会 403,hwaphon找到的 解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播放
	 * Params:
	 * id : 音乐 id
	 * br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
	 * **/
	SongUrl(params){
		return http.get(`/song/url`, params)
	},
	/** 音乐是否可用
	 * 说明: 调用此接口,传入歌曲 id, 可获取音乐是否可用,返回 { success: true, message: 'ok' } 或者 { success: false, message: '亲爱的,暂无版权' }
	 * Params:
	 * id : 歌曲 id
	 * br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
	 * **/
	CheckMusic(params){
		return http.get(`/check/music`, params)
	},
	/** 获取歌词
	 * 说明: 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
	 * Params:
	 * id: 音乐 id
	 * **/
	Lyric(params){
		return http.get(`/lyric`, params)
	},
	/** 新歌速递
	 * 说明: 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
	 * Params:
	 * type: 地区类型 id,对应以下:
	 * 全部:0
	 
	 华语:7
	 
	 欧美:96
	 
	 日本:8
	 
	 韩国:16
	 * **/
	topSong(params){
		return http.get(`/top/song`, params)
	},
}
