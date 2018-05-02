import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

import MenuDown from 'component/menu-down';

import 'asset/index.less';

class Master extends Component {
	render() {
		return (
			<Layout className="layout" style={{ height: '100%' }}>
				<Header style={{ background: '#fff', boxShadow: '0 1px 4px rgba(0,21,41,.08)' }}>
					<div className="logo" />
					<Menu
						mode="horizontal"
						defaultSelectedKeys={[ '2' ]}
						style={{ lineHeight: '63px', display: 'inline-block' }}
					>
						<Menu.Item key="1">Home</Menu.Item>
						<Menu.Item key="2">Dashboard</Menu.Item>
						<Menu.Item key="3">Contactos</Menu.Item>
					</Menu>
					<MenuDown />
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>Dashboard</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Metrics ©2018 Created by Honda Optima</Footer>
			</Layout>
		);
	}
}

ReactDOM.render(<Master />, document.getElementById('root'));
