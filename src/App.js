import React, {Component} from 'react';
import './App.css';
import Blog from "./Container/Blog/Blog";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component{
  render() {
    return(
            <BrowserRouter>
                <header>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="/AboutUs">About us</a></li>
                            <li><a href="/Contacts">Contacts</a></li>
                            <li><a href="s">Home</a></li>
                            <li><a href="/">Messages</a></li>
                            <li><a href="/">Profile</a></li>
                        </ul>
                    </nav>
                </header>
            <Switch>
                <Route path="/" exact component={Blog}/>
                <Route path="/AboutUs" component={AboutUs}/>
                <Route path="/Contacts" component={Contacts}/>
            </Switch>
                <footer>
                    <p className="footer-text">Copyright @HomeSweetHome</p>
                </footer>
            </BrowserRouter>
    )
  }
}

export default App;
