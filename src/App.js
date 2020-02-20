import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./Search";
import DetailPage from "./Detail";
import WaterfallPage from "./Waterfall";
import ResultPage from "./Result";
import TreeResultPage from "./ResultWithTree/ResultWithTree";
import { Menu } from "antd";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "search"
    };
  }

  handleClick(e) {
    this.setState({
      current: e.key
    });
  }

  render() {
    return (
      <Router>
        <Menu
          onClick={this.handleClick.bind(this)}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className="menuItems"
        >
          <Menu.Item key="search">
            <Link to="/search">搜索页面（崔）</Link>
          </Menu.Item>
          <Menu.Item key="detail">
            <Link to="/detail">详情页面（崔）</Link>
          </Menu.Item>
          <Menu.Item key="result">
            <Link to="/result">头+二级菜单（曹）</Link>
          </Menu.Item>
          <Menu.Item key="treeResult">
            <Link to="/treeResult">头+树+筛选（何）</Link>
          </Menu.Item>
          <Menu.Item key="waterfall">
            <Link to="/waterfall">头+导航+瀑布流（熊）</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
          <Route path="/waterfall">
            <WaterfallPage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
          <Route path="/treeResult">
            <TreeResultPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
