import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from './Search'
import DetailPage from './Detail'
import WaterfallPage from './Waterfall'
import ResultPage from './Result'
import TreeResultPage from './ResultWithTree'

function App() {
  return (
    <div className="App">
      <h1>This is the home page.Click the link below to whereever you like.</h1>
      <Router>
        <ul>
          <li>
            <Link to="/search">搜索页面</Link>
          </li>
          <li>
            <Link to="/detail">详情页面</Link>
          </li>
          <li>
            <Link to="/waterfall">头+导航+瀑布流</Link>
          </li>
          <li>
            <Link to="/result">头+二级菜单+...</Link>
          </li>
          <li>
            <Link to="/treeResult">头+树+筛选+...</Link>
          </li>
        </ul>
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
