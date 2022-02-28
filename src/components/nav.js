import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/main">Main</Link> 
            <Link to="currencies">Currencies</Link> 
            <Link to="prices">Prices</Link>
        </div>
  );
};

export default Nav;