import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Main from '@/components/main'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class Index extends React.Component{
	render() {
		const {match, location } = this.props;
		const { username } = this.state;
		return(
			<div className="default">
				<Header/>
				<Route
					path = {match.url}
					exact
					render={props => (<div {...this.props} username={username}>2131</div>)}
				></Route>
				{/*<Main/>*/}
				<Footer/>
			</div>
		)
	}
}

export default Index
