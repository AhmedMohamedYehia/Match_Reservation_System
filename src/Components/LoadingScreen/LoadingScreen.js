import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./LoadingScreen.css"
import logo from "../../Assets/HighGreenLogo.png"


class LoadingScreen extends Component {

    render() {
    return (
        <div id="loading-screen" className="">
           <div className="logo-container">
               <img src={logo}/>
           </div>
        </div>
        
    );
}}

export default LoadingScreen;