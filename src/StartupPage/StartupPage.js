import React, { Component } from "react";
import image from "./stad.jpg"
import "./StartupPage.css"

import logo from "../Assets/HighGreenLogo.png"
function StartupPage () {

    return (
        <div id="start-whole-back" style={{backgroundImage: `url(${image})` }} >
            <div id="start-navbar" className="row">
                <span  className="col-5 mt-1">
                    <img id="start-navbar-logo" src={logo}/>
                </span>
                <span className="col-5"></span>
                <span className="col-1 mt-3" >
                    <button type="button" class="btn btn-outline-success btn-lg">Login</button>
                </span>
                <span className="col-1 mt-3">
                    <button type="button" class="btn btn-outline-success btn-lg">Signup</button>
                </span>
            </div>
            <div id="start-container" className="container">
                <div  className="row justify-content-center mt-5" >
                    <div id="start-body" className="row justify-content-center mt-5">
                        <span className="col-10 align-self-center container">
                            <div className="row justify-content-center">
                                <button type="button" class="btn btn-outline-success btn-lg">Signup</button>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="row justify-content-center">
                                Already have an account?
                            </div>
                            <br></br>
                            <div  className="row justify-content-center">
                                <button type="button" class="btn btn-outline-success btn-lg">Login</button>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="row justify-content-center">
                                Or you can continue as a guest
                            </div>
                            <br></br>
                            <div className="row justify-content-center">
                                <button type="button" class="btn btn-outline-success btn-lg">Guest</button>
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