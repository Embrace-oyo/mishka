import React from 'react'
import "@/assets/stylus/header.styl"
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component{
	render() {
		return(
			<div className="header">
				<ul>
					<li><NavLink to="/home">首页</NavLink></li>
					<li><NavLink to="/product">产品</NavLink></li>
					<li><NavLink to="/role">角色</NavLink></li>
				</ul>
			</div>
		)
	}
}

export default Header
