import React from "react";
import { Router, Route } from "react-router";
import App from "./App";
import SearchPage from './Search'
import DetailPage from './Detail'
import WaterfallPage from './Waterfall'
import ResultPage from './Result'
import TreeResultPage from './ResultWithTree'
 
React.render(
  <Router>
    <Route path="/" component={App}>
      <Route path="search" component={SearchPage}></Route>
      <Route path="detail" component={DetailPage}></Route>
      <Route path="waterfall" component={WaterfallPage}></Route>
      <Route path="resultBase" component={ResultPage}></Route>
      <Route path="resultWithTree" component={TreeResultPage}></Route>
    </Route>
  </Router>,
  document.body
);
