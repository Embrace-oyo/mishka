import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './assets/stylus/base.styl'
import Login from '@/pages/login'
import Index from '@/pages/index'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Index} />
				</Switch>
			</BrowserRouter>
		);
	}
}


export default App;
