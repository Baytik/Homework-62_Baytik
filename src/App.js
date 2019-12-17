import React, {Component} from 'react';
import './App.css';
import Blog from "./Container/Blog/Blog";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contacts from "./Components/Contacts/Contacts";
import Messages from "./Components/Messages/Messages";
import Header from "./Container/Header/Header";
import Footer from "./Container/Footer/Footer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class App extends Component{
  render() {
    return(
            <BrowserRouter>
                <Header/>
            <Switch>
                <Route path="/" exact component={Blog}/>
                <Route path="/AboutUs" component={AboutUs}/>
                <Route path="/Contacts" component={Contacts}/>
                <Route path="/Messages" component={Messages}/>
            </Switch>
                <Footer/>
            </BrowserRouter>
    )
  }
}

export default App;
