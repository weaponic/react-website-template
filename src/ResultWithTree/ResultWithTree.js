// 从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Alert } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContentWithTree from "./ContentWithTree";
import './css/resultTree.scss'


const { Header } = Layout;


export default class ResultWithTree extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headList: [
        '系统首页',
        '界面展示',
        '服务中心',
        '操作管理',
        '人员管理'
      ]
    }
  }

  // 获取列表项
  getMenuItems() {
    return (
      this.state.headList.map((item, index) => {
        // 需保证每个key值都不同。没有key，控制台会报错，但不影响使用
        return (
          <Menu.Item key={index}>
            <Link to="/content/newList">{item}</Link>
          </Menu.Item>
        )
      })
    )
  }

  render() {
    return (
      <Router>
        <Layout className="col-content">
          <Header className="header">
            <a className="icon-log" href="/">
              <i className="logo"></i>
              <i className="fontLog"></i>
            </a>
            <Menu className="choose"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys="0"
              style={{ lineHeight: '64px' }}>
              {this.getMenuItems()}
            </Menu>
          </Header>
          <Route path="/content/newList">
            <ContentWithTree />
          </Route>
        </Layout>
      </Router>
    )
  }
}
