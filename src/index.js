import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,
   Routes,
   Route,
} from "react-router-dom";
import App from './App';
import Main from './pages/main';
import Currencies from './pages/currencies';
import Price from './pages/price';
import Nav from './components/nav';



ReactDOM.render(
  <BrowserRouter>
    <Nav />
      <Routes>
        <Route  exact path="/" element = { <Main /> } />
        <Route path="/currencies/" element= { < Currencies />}  />
        {/* <Route
          path="/price/:symbol"
          render={(routerProps) => <Price {...routerProps} />}
        /> */}
        <Route path="/price/" element = {< Price />}>
          <Route path=":symbol" element ={<Price />} />
      
        </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


