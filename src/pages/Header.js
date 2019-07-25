import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component{
	render() {
		return(
			<div className="Header">
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/list">List</Link>
					</li>
					<li>
						<Link to="/news">News</Link>
					</li>
					<li>
						<Link to="/detail">Detail</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Header
