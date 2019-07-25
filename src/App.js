import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import 'normalize.css'
import '@/assets/stylus/base.styl'

import Header from '@/pages/Header'
import Footer from '@/pages/Footer'
import Home from '@/pages/Home'
import List from '@/pages/List'
import News from '@/pages/News'
import Detail from '@/pages/Detail'

class App extends React.Component{
	render() {
		return(
			<div className="App">
				<Router>
					<Header />
					<div className="Router">
						<Route path='/' Redirect component={Home} exact/>
						<Route path='/home' component={Home} exact/>
						<Route path='/list' component={List} />
						<Route path='/news' component={News} />
						<Route path='/detail' component={Detail} />
					</div>
					<Footer />
				</Router>
			</div>
		)
	}
}

export default App;
