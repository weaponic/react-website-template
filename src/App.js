import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import SearchPage from "./Search";
import DetailPage from "./Detail";
import WaterfallPage from "./Waterfall";
import ResultPage from "./Result";
import TreeResultPage from "./ResultWithTree";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/search">搜索页面（崔）</Link>
            </li>
            <li>
              <Link to="/detail">详情页面（崔）</Link>
            </li>
            <li>
              <Link to="/result">头+二级菜单（曹）</Link>
            </li>
            <li>
              <Link to="/treeResult">头+树+筛选（何）</Link>
            </li>
            <li>
              <Link to="/waterfall">头+导航+瀑布流（熊）</Link>
            </li>
          </ul>
        </nav>
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
    </div>
  );
}

export default App;