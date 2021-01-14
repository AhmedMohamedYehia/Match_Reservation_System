import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./Footer.css"
import logo from "../../Assets/WhiteLogo.png"


const d = new Date();
class Footer extends Component {
render() {
    return (
        <div>
      <div id="footer">
      <div className="row w-100 footer-row"> 
          <Link to="/home" className="logo" onClick={this.redirectToMain}><img src={logo} alt=""/></Link>
          <div className="row justify-content-around w-50 footer-links-container container">
          <div>
              <h5>Company</h5>
              <div>
              </div>
          </div>
          <div>
              <div>
              </div>
          </div>
          <div>
              <h5>Useful Links</h5>
              <div>
              <Link to="/home"> <h6>Help</h6> </Link>
              </div>
          </div>
          </div>
          <div className="row">
              <a href="/home" className="fa fa-facebook rounded-circle"> fb</a>
              <a href="/home" className="fa fa-twitter rounded-circle">tl</a>
              <a href="/home" className="fa fa-instagram rounded-circle">ig </a>
          </div>
      </div>
      <div id="mini-footer" className="d-flex justify-content-between ml-4 mr-4"> 
          <div >
          <li className="list-inline-item left mb-1"><a className="privacy-link" href="/home">Legal</a></li>
          <li className="list-inline-item left mb-1"><a className="privacy-link" href="/home">Privacy Center</a></li>
          <li className="list-inline-item left mb-1"><a className="privacy-link" href="/home">Privacy Policy</a></li>
          <li className="list-inline-item left mb-1"><a className="privacy-link" href="/home">Cookies</a></li>
          <li className="list-inline-item left mb-1"><a className="privacy-link" href="/home">About us</a></li>
          </div>
          <li className="list-inline-item right mb-1"><p className="privacy-link" >©{d.getFullYear()} Tazkarti</p></li>
      </div>
  </div>
  </div>

  );
}
}

export default Footer;