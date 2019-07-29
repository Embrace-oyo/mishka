import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import '@/assets/stylus/main.styl'

import Home from '@/pages/index/home'
import Product from '@/pages/index/product'
import Role from '@/pages/index/role'
import NotFound from '@/pages/index/404'

class Main extends React.Component{
	render() {
		return(
			<div className="main">
				<Switch>
					<Route path='/home' component={Home} />
					<Route path='/product' component={Product} />
					<Route path='/role' component={Role} />
					<Route path='/404' component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</div>
		)
	}
}

export default Main
