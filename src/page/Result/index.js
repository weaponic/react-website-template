import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  List,
  Avatar,
  Input,
  Descriptions,
  Progress,
  Button
} from "antd";
import "./index.scss";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultList: [
        {
          img: "",
          name: "王富贵",
          gender: "男",
          idNo: "32184621562154525",
          tel: "1886542154",
          address: "ad撒发放撒法上啊啊啊",
          productName: "反反复复搜索",
          time: "2016-1-4 12:55:12",
          productDesc: "暗示法阿瑟费撒发送发",
          process: 70
        },
        {
          img: "",
          name: "王富贵",
          gender: "男",
          idNo: "32184621562154525",
          tel: "1886542154",
          address: "ad撒发放撒法上啊啊啊",
          productName: "反反复复搜索",
          time: "2016-1-4 12:55:12",
          productDesc: "暗示法阿瑟费撒发送发",
          process: 70
        },
        {
          img: "",
          name: "王富贵",
          gender: "男",
          idNo: "32184621562154525",
          tel: "1886542154",
          address: "ad撒发放撒法上啊啊啊",
          productName: "反反复复搜索",
          time: "2016-1-4 12:55:12",
          productDesc: "暗示法阿瑟费撒发送发",
          process: 70
        },
        {
          img: "",
          name: "王富贵",
          gender: "男",
          idNo: "32184621562154525",
          tel: "1886542154",
          address: "ad撒发放撒法上啊啊啊",
          productName: "反反复复搜索",
          time: "2016-1-4 12:55:12",
          productDesc: "暗示法阿瑟费撒发送发",
          process: 70
        }
      ]
    };
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">React基础网页模板</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">系统页面</Menu.Item>
            <Menu.Item key="2">人员管理</Menu.Item>
            <Menu.Item key="3">操作管理</Menu.Item>
            <Menu.Item key="4">业务知识</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>主页</Breadcrumb.Item>
            <Breadcrumb.Item>系统页面</Breadcrumb.Item>
            <Breadcrumb.Item>结果页</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1", "sub2"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      热门筛选1
                    </span>
                  }
                >
                  <Menu.Item key="1">柱状图</Menu.Item>
                  <Menu.Item key="2">饼图</Menu.Item>
                  <Menu.Item key="3">折线图</Menu.Item>
                  <Menu.Item key="4">热力图</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="laptop" />
                      热门筛选 2
                    </span>
                  }
                >
                  <Menu.Item key="5">男性</Menu.Item>
                  <Menu.Item key="6">女性</Menu.Item>
                  <Menu.Item key="7">未知</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <Icon type="notification" />
                      热门筛选 3
                    </span>
                  }
                >
                  <Menu.Item key="9">汉族</Menu.Item>
                  <Menu.Item key="10">苗族</Menu.Item>
                  <Menu.Item key="11">满族</Menu.Item>
                  <Menu.Item key="12">维吾尔族</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <List
                className="demo-loadmore-list"
                header={
                  <div className="result-header">
                    结果列表展示
                    <div className="search-wrapper">
                      <Input placeholder="请输入查询内容" />
                      <Button type="primary">search</Button>
                    </div>
                  </div>
                }
                itemLayout="horizontal"
                dataSource={this.state.resultList}
                renderItem={item => (
                  <List.Item
                   className="list-item"
                    actions={[
                      <span key="list-loadmore-edit">edit</span>,
                      <span key="list-loadmore-more">more</span>
                    ]}
                  >
                    <Avatar className="avatar" shape="square" size={64} icon="user" />
                    <Descriptions column={4} className="desc-wrapper">
                      <Descriptions.Item>{item.name}</Descriptions.Item>
                      <Descriptions.Item>{item.gender}</Descriptions.Item>
                      <Descriptions.Item><Icon type="phone" />{item.tel}</Descriptions.Item>
                      <Descriptions.Item><Icon type="idcard" />{item.idNo}</Descriptions.Item>
                      <Descriptions.Item label="居住地址">
                        {item.address}
                      </Descriptions.Item>
                      <Descriptions.Item label="交易产品">
                        {item.productName}
                      </Descriptions.Item>
                      <Descriptions.Item label="交易时间">
                        {item.time}
                      </Descriptions.Item>
                      <Descriptions.Item label="产品描述">
                        {item.productDesc}
                      </Descriptions.Item>
                    </Descriptions>
                    <Progress className="progress" percent={item.process} status="active" />
                  </List.Item>
                )}
              />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>Created by UED</Footer>
      </Layout>
    );
  }
}

export default ResultPage;
