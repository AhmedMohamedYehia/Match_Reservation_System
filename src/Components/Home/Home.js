import React, { Component } from "react";
// import screenDesktop from "../../Assets/fullscreenmobilemock-01.png"
// import screenMobile from "../../Assets/miniscreenmobilemock-01-01.png"
import "./Home.css"
import { Link } from "react-router-dom";
import windowSize from 'react-window-size';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Mapimage from "../../Assets/vectorStad.png"
import Bagimage from "../../Assets/HighGreenLogo.png"
class Main extends Component {
    componentDidMount() {
        AOS.init({
            duration : 2500,
            once: false,
            mirror: true
        });
      }


render() {
    // const screen_1= this.props.windowWidth>"700" ? screenDesktop :  screenMobile
    return (
    <div id="main-loggedout-container" className="text-center w-100">

       
            <div id="home-page">
            <div className="quote-box quote-box-2 row">
                <div className="quote-2 col" data-aos={"fade-right"}>
                    <h1 className="quote-2-itself">"If you think adventure is dangerous, try routine, it is lethal"</h1>
                    <h1 className="quote-speaker">-Paulo Coelho</h1>
                </div>
                <img src={Bagimage} alt="" data-aos={"fade-left"} className="col quote-2-img"></img>
            </div>
            <div className="quote-box quote-box-1 row">
                <img src={Mapimage} alt="" data-aos={"fade-right"} className="col quote-1-img"></img>
                <div className="quote-1 col" data-aos={"fade-left"}>
                    <h1 className="quote-1-itself">"Traveling- it leaves you speechless, then turns you into a storyteller"</h1>
                    <h1 className="quote-speaker">-Ibn Batutta</h1>
                </div>
            </div>
        </div>
        
    </div>
    
    
    );
  }
}

export default windowSize(Main);