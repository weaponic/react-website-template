import React from "react";
import { Layout, Row, Col, Card, Icon } from "antd";
import "./index.scss";
import imgCoverSearch from "../../assets/images/search.png";
import imgCoverDefault from "../../assets/images/default.png";
import imgCoverWaterfall from "../../assets/images/waterfall.png";
import imgCoverResult from "../../assets/images/result.png";
import imgCoverRTree from "../../assets/images/resultWithTree.png";

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

function CardItem(props) {
  const handleCardClicked = () => {
    console.log(arguments);
    window.location.href = props.href;
  };
  return (
    <Card
      style={{ width: 250 }}
      hoverable="true"
      onClick={handleCardClicked}
      cover={<img width="200px" height="150px" alt="" src={props.img} />}
    >
      <Meta title={props.title} description={props.description || "暂无描述"} />
    </Card>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleNavItemClicked(e) {
    console.log(e);
    alert("点不了的");
  }

  render() {
    return (
      <Layout>
        <Header>
          <div className="logo">React常用网页模板</div>
          <ul className="nav-list">
            <li onClick={this.handleNavItemClicked}>
              <Icon type="home" theme="filled" />
              首页
            </li>
            <li onClick={this.handleNavItemClicked}>
              <Icon type="edit" theme="filled" />
              没了
            </li>
            <li onClick={this.handleNavItemClicked}>
              <Icon type="edit" theme="filled" />
              真没了
            </li>
          </ul>
        </Header>
        <Content>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 32]}>
            <Col className="gutter-row" span={6}>
              <CardItem title="搜索页面" img={imgCoverSearch} href="/search" />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardItem title="详情页面" img={imgCoverDefault} href="/detail" />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardItem
                title="瀑布流页面"
                img={imgCoverWaterfall}
                href="/waterfall"
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <CardItem
                title="结果页+二级菜单"
                img={imgCoverResult}
                href="/result"
              />
            </Col>
          </Row>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 32]}>
            <Col className="gutter-row" span={6}>
              <CardItem
                title="结果页+左边树菜单"
                img={imgCoverRTree}
                href="/treeResult"
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
