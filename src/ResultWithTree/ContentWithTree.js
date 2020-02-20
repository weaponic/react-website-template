import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Input, Checkbox } from 'antd';
import NewContent from "./NewContent";
import NewList from "./NewList";


// 引入子菜单组件
const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
const { Search } = Input;


export default class ContentWithTree extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <Layout className="content">
                    <Sider className="select-sider">
                        <div className="col-content-left-title">
                            <span className="title">筛选设置区</span>
                            <span className="reset">重置</span>
                        </div>
                        <Search
                            placeholder="请输入"
                            onSearch={value => console.log(value)}
                            className="col-content-left-search"
                        />
                        <Menu mode="inline"
                            defaultSelectedKeys="1"
                            defaultOpenKeys={['sub1']}
                            className="col-content-left-sider"
                            style={{ height: '100%', borderRight: 0 }}>
                            <SubMenu key="sub1"
                                title={
                                    <Checkbox>热门筛选</Checkbox>
                                }>
                                <Menu.Item key="1">
                                    <Link to="/newContent">
                                        <Checkbox>表格</Checkbox>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to="/content/newList">
                                    <Checkbox checked="true">长卡片</Checkbox>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Checkbox>面包屑</Checkbox></Menu.Item>
                                <Menu.Item key="4">
                                    <Checkbox>下拉菜单</Checkbox></Menu.Item>
                                <Menu.Item key="5">
                                    <Checkbox>导航菜单</Checkbox></Menu.Item>
                                <Menu.Item key="6">
                                    <Checkbox>分页</Checkbox></Menu.Item>
                                <Menu.Item key="7">
                                    <Checkbox>步骤条</Checkbox></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Route path="/newContent">
                        <NewContent />
                    </Route>
                    <Route path="/content/newList">
                        <NewList />
                    </Route>
                </Layout>
            </Router>
        )
    }
}