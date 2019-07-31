import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './assets/stylus/base.styl'
import Login from '@/pages/login'
import Index from '@/pages/index'
import NotFound from '@/pages/index/404'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Index} />
					<Route exact path="/home" component={Index} />
					<Route exact path="/login" component={Login} />
					<Route component={NotFound}/>
				</Switch>
			</BrowserRouter>
		);
	}
}


export default App;
