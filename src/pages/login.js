import React from 'react'
import "@/assets/stylus/login.styl"
import { Button } from 'antd';
class Login extends React.Component{
	render() {
		return(
			<div className="login">
				<div className="bg"></div>
				<div className="box">
					login
					<Button type="primary">Button</Button>
				</div>
			</div>
		)
	}
}

export default Login
