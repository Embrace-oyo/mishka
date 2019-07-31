import http from '@/http/api'

export default {
	/** banner
	 * 说明: 调用此接口 , 可获取 banner( 轮播图 ) 数据
	 * Params:
	 * type:资源类型,对应以下类型,默认为 0 即PC
	 * 0: pc
	 
	 1: android
	 
	 2: iphone
	 
	 3: ipad
	 * **/
	Banner(params){
		return http.get(`/banner`, params)
	},
}
