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
import Prices from './pages/price'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<App />}> */}
        <Route path='/' element= {<Main/>} />
        <Route path='/prices' element={<Prices />} />
        <Route path='currencies' element={<Currencies />} />
      {/* </Route> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


