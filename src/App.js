import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { Routes, Route,useParams,  } from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from "./components/nav";





function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}






export default App;


// function App() {
//     return (
//       <Routes>
//         <Nav />
//         <Route
//           path="invoices/:invoiceId"
//           element={<Invoice />}
//         />
//       </Routes>
//     );
//   }
  
//   function Invoice() {
//     let { invoiceId } = useParams();
//     let invoice = useFakeFetch(`/api/invoices/${invoiceId}`);

//     return invoice ? (
//       <div>
//       <h1>{invoice.customerName}</h1>
//     </div>

//     ) :(
//       <Loading />
//     );
//   }