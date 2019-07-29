import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from '@/pages/index/header'
import Footer from '@/pages/index/footer'

const Test1 = () => <h3>test1</h3>
const Test2 = () => <h3>test2</h3>
const Test3 = () => <h3>test3</h3>

class Index extends React.Component{
	render() {
		return(
			<div className="default">
				<Header/>
				<Switch>
					<Route path="/test1" component={Test1}/>
					<Route path="/test2" component={Test2}/>
					<Route path="/test3" component={Test3}/>
				</Switch>
				<Footer/>
			</div>
		)
	}
}

export default Index
