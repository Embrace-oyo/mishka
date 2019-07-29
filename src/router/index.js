import Login from '@/pages/login'
import Register from '@/pages/register'
import Index from '@/pages/index'
import React from 'react'

const Test = () => <h3>test</h3>

export const main = [
	{ path: '/login', name: '登录', component: Login },
	{ path: '/register', name: '注册', component: Register },
	{ path: '/', name: '首页', component: Index,
		children: [
			{path: '/test', name: '测试页面', component: Test }
		]
	}
]

// 菜单相关路由
export const menus = [
]

export const routerConfig =  {
	main, menus
}
