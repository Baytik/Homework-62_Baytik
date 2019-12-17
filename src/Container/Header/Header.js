import React, {Component} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>
                        <li><NavLink to="/Contacts">Contacts</NavLink></li>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Messages">Messages</NavLink></li>
                        <li><NavLink to="/Profile">Profile</NavLink></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;