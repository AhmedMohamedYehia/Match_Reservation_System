import React, { Component } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import windowSize from 'react-window-size';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Mapimage from "../../Assets/vectorStad.png"
import Bagimage from "../../Assets/HighGreenLogo.png"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
class Main extends Component {
    componentDidMount() {
        AOS.init({
            duration : 2500,
            once: false,
            mirror: true
        });
      }


render() {
    return (
    <>
        <Navbar id="home-navbar"/>
        <div id="main-loggedout-container" className="text-center w-100">
                <div id="home-page">
                <div className="quote-box quote-box-2 row">
                    <img src={Bagimage} alt="" data-aos={"fade-left"} className="col quote-2-img"></img>
                    <div className="quote-2 col" data-aos={"fade-right"}>
                        <h1 className="quote-2-itself">Your next plan ?</h1>
                        <br></br>
                        <h1 className="quote-2-itself">Consider it done !</h1>
                    </div>
                </div>
                <div className="quote-box quote-box-1 row">
                    <img src={Mapimage} alt="" data-aos={"fade-right"} className="col quote-1-img"></img>
                    <div className="quote-1 col" data-aos={"fade-left"}>
                        <h1 className="quote-1-itself">Supporting experience you never experienced before.</h1>
                    </div>
                </div>
            </div>
        </div>
        <Footer id="home-footer"/>
    </>
    );
  }
}

export default windowSize(Main);