import React from 'react'
import './login.less'
import { Form, Icon, Input, Button } from 'antd';
import api from '../../api'

/** 登录路由组件 **/

class Login extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const { validateFields } = this.props.form;
		validateFields((errors, values) => {
			if(!errors){
				api.loginApi({phone: values.username, password: values.password}).then(res => {
					console.log(res);
				}).catch(error => {
					console.log(error);
				})
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login">
				<div className="loginBox">
					<h2>用户登录</h2>
					<div className="formBox">
						<Form onSubmit={this.handleSubmit} className="login-form">
							<Form.Item>
								{getFieldDecorator('username',{
									rules: [
										{ required: true, whitespace: true, message: '请输入用户名' },
										{ min: 4, message: '用户名必须大于4位' },
										{ max: 12, message: '用户名必须小于12位' },
										{ pattern: /^[A-Za-z0-9_]+$/, message: '必须是英文数字下划线组成' },
									],
								})(
									<Input
										prefix={<Icon type="user" style={{ color: '#fb7299' }} />}
										placeholder="账号"
									/>
								)}
							</Form.Item>
							<Form.Item>
								{getFieldDecorator('password', {
									rules: [
										{ required: true, whitespace: true, message: '请输入密码' },
										{ min: 4, message: '密码必须大于等于4位' },
										{ max: 12, message: '密码必须小于等于12位' },
										/*{ pattern: /^[A-Za-z0-9_]+$/, message: '必须是英文数字下划线组成' },*/
									],
								})(
									<Input
										prefix={<Icon type="lock" style={{ color: '#fb7299' }} />}
										type="password"
										placeholder="密码"
									/>
								)}
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" className="login-form-button">
									登录
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm
