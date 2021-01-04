import React, { Component } from "react";
import image from "./stad.jpg"
import "./StartupPage.css"
import { Link } from "react-router-dom";

import logo from "../Assets/HighGreenLogo.png"
function StartupPage () {

    return (
        <div id="start-whole-back" style={{backgroundImage: `url(${image})` }} >
            <div id="start-navbar" className="row">
                <span  className="col-5 mt-1">
                    <img id="start-navbar-logo" src={logo}/>
                </span>
                {/* <span className="col-5"></span>
                <span className="col-1 mt-3" >
                    <Link to="/log-in" className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Login</button></Link>
                </span>
                <span className="col-1 mt-3">
                    <Link to="/sign-up" className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Signup</button></Link>
                </span> */}
            </div>
            <div id="start-container" className="container">
                <div  className="row justify-content-center mt-5" >
                    <div id="start-body" className="row justify-content-center mt-5">
                        <span className="col-10 align-self-center container">
                            <div className="row justify-content-center">
                                <Link to="/sign-up" className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Signup</button></Link>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="row justify-content-center">
                                Already have an account?
                            </div>
                            <br></br>
                            <div  className="row justify-content-center">
                                <Link to="/log-in" className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Login</button></Link>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="row justify-content-center">
                                Or you can continue as a guest
                            </div>
                            <br></br>
                            <div className="row justify-content-center">
                                <Link to="/home"  className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Guest</button></Link>
                            </div>
                        </span>
                    </div>
                    {/* <span className="col-5"></span> */}
                </div>
            </div>
        </div>
        
    );
}

export default StartupPage;