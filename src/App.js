import React from "react";
import "./App.css";
//Import route and our components
import { Route } from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from "./components/nav";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Route path="/">
        <Main />
      </Route>
      <Route path="/currencies">
        <Currencies />
      </Route>
      <Route path="/price">
        <Price />
      </Route>
    </div>
  );
}

export default App;