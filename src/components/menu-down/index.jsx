import React, { Component } from 'react';

import { Menu, Icon, Dropdown, Avatar } from 'antd';

import Style from './style.css';

console.log(Style);

const menu = (
	<Menu selectedKeys={[]}>
		<Menu.Item disabled>
			<Icon type="user" /> Account
		</Menu.Item>
		<Menu.Item disabled>
			<Icon type="setting" /> Setting
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="logout">
			<Icon type="logout" /> Logout
		</Menu.Item>
	</Menu>
);

export default class MenuDown extends Component {
	render() {
		return (
			<Dropdown overlay={menu}>
				<span className={Style.menuDown}>
					<Avatar size="small" icon="user" style={{ marginRight: 8 }} />
					<span>{'Antonio Orozco'}</span>
				</span>
			</Dropdown>
		);
	}
}
