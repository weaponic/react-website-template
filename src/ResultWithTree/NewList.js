import React, { Component } from 'react';
import { Layout, Collapse, Card, Avatar, Input, Button, Icon, Progress } from 'antd';
import './css/rightContent.scss'

const { Panel } = Collapse;

const { Meta } = Card;
const { Content } = Layout;
const { Search } = Input;

function callback(key) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default class NewList extends Component {
    getCardTile() {
        return (
            <div className="item-card-title">
                <span className="item-col-title">王富贵</span>
                <span className="item-col-content">
                    <Icon type="man" /><span className="item-col-span">男</span>
                </span>
                <span className="item-col-content">
                    <Icon type="idcard" /><span>35028199392838X</span>
                </span>
                <span className="item-col-content">
                    <Icon type="phone" /><span>13382983839</span>
                </span>
            </div>
        )
    }

    getCardContent() {
        return (
            <div className="item-card">
                <div className="col-card-content col1-card-content">
                    <span className="item-col-common item-col">居住地区</span>
                    <span className="item-col-common item-col">交易产品</span>
                    <span className="item-col-common item-col">交易时间</span>
                    <span className="item-col-special item-col">产品描述</span>
                    <span className="item-col-special item-col">交易进度</span>
                    <div className="col1-edit">
                        <span className="edit">编辑</span>
                        <span className="del">删除</span>
                        <span className="more">更多</span>
                    </div>
                </div>
                <div className="col-card-content col2-card-content">
                    <span className="item-col-common item-col">上海市浦东新区</span>
                    <span className="item-col-common item-col">京九华府</span>
                    <span className="item-col-common item-col">2020-02-19 14:25</span>
                    <span className="item-col-special item-col">
                        <span className="col-special-content">此产品为上海市XXXXXXXX</span>
                        <span className="see-icon">全部描述 > </span>
                    </span>
                    <span className="item-col-special item-col">
                        <Progress percent={70} size="small" status="active" />
                    </span>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Layout className="col-right">
                <Content className="card" style={{ overflow: 'initial' }}>
                    <div className="card-title">
                        <span className="title">结果列表展示</span>
                        <div className="col-right-search">
                            <Search
                                placeholder="在结果中查询"
                                onSearch={value => console.log(value)}
                                className="col-right-title-search"
                                size="small"
                            />
                            <Button type="primary" className="col-right-title-add">新增</Button>
                        </div>
                    </div>
                    <Card className="card-content">
                        <Meta
                            avatar={<i className="item-col-card-title"></i>}
                            title={this.getCardTile()}
                            description={this.getCardContent()}
                        />
                    </Card>
                    <Card className="card-content">
                        <Meta
                            avatar={<i className="item-col-card-title"></i>}
                            title={this.getCardTile()}
                            description={this.getCardContent()}
                        />
                    </Card>
                    <Card className="card-content">
                        <Meta
                            avatar={<i className="item-col-card-title"></i>}
                            title={this.getCardTile()}
                            description={this.getCardContent()}
                        />
                    </Card>
                    <Card className="card-content">
                        <Meta
                            avatar={<i className="item-col-card-title"></i>}
                            title={this.getCardTile()}
                            description={this.getCardContent()}
                        />
                    </Card>
                    <Card className="card-content">
                        <Meta
                            avatar={<i className="item-col-card-title"></i>}
                            title={this.getCardTile()}
                            description={this.getCardContent()}
                        />
                    </Card>
                </Content>
            </Layout>
        )
    }
}