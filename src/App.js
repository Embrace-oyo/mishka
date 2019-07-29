import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from '@/pages/login'
import Index from '@/pages/index'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/index" component={Index} />
					<Redirect exact from="/" to="/index" />
				</Switch>
			</BrowserRouter>
		);
	}
}


export default App;
