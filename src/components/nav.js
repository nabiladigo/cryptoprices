import React from 'react';
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">Home</Link> 
            <Link to="/currencies">Currencies</Link> 
            <Link to="/price">Price</Link>
        </div>
  );
};

export default Nav;