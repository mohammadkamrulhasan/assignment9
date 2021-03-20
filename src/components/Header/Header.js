import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../image/logo.jpg';
import './Header.css';

const Header = () => {
    return (
        
        <div  className="header">
            <nav className="nav">
                <ul>
                    <li>
                    <h1>City Transports Authority</h1>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                         <Link to="/ride">Destination</Link>
                   </li>
                    <li>
                         <Link to="/blog">Blog</Link>
                   </li>
                   <li>
                       <Link to="/contact">Contact</Link>
                   </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                
            </div>
        </div>
    );
};

export default Header;