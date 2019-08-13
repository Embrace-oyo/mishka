import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import 'reset.css';

/** 路由组件 **/
import Login from '@/pages/login/login'
import Admin from '@/pages/admin/admin'





export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path='/admin' component={Admin}/>
						<Route path='/login' component={Login}/>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}






