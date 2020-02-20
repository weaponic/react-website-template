import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import SearchPage from "./page/Search";
import DetailPage from "./page/Detail";
import WaterfallPage from "./page/Waterfall";
import ResultPage from "./page/Result";
import TreeResultPage from "./page/ResultWithTree";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/detail" component={DetailPage}></Route>
        <Route path="/waterfall" component={WaterfallPage}></Route>
        <Route path="/result" component={ResultPage}></Route>
        <Route path="/treeResult" component={TreeResultPage}></Route>
        <Route path="/search" component={SearchPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
