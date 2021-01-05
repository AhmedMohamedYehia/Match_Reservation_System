import React, { Component } from "react";
import logo from "../../Assets/WhiteLogo.png"
import "./Navbar.css"
import { Link } from "react-router-dom";
import axios from 'axios'
class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      status: "not connected",
      loginType: localStorage.getItem('loginType'),
      loggedIn:true,
    };
  }
  componentDidMount(){
    const pathName=window.location.pathname.split("/").pop()+"-btn";
    const objectsContainer = document.getElementById("navbar-right");

    // objectsContainer.children[0].children.forEach(element => {
    //   if(element.classList.contains(pathName))
    //   {
    //     element.classList.add("active");
    //     return;
    //   }
    // });
  }
  navbarOnchange=(e)=>{
    try {
      const activeObject = document.querySelector(".active");
      activeObject.classList.remove("active");
    } catch (error) {}

    if(e.target.getAttribute("type")==="icon")
    { 
      if(e.target.parentNode.classList.contains("dropdown-item"))
      {
        return;
      }
      else{
        try {
        const activeObject = document.querySelector(".active");
        activeObject.classList.remove("active");
        } catch (error) {}
          e.target.parentNode.classList.add("active");
      }
    }
    else{
      try {
        const activeObject = document.querySelector(".active");
        activeObject.classList.remove("active");
      } catch (error) {   }
      e.target.classList.add("active");
    }
  }
  handleSignOut=(e)=>{
    e.preventDefault();
    // axios.post(baseURL+'/register/logout',{},{withCredentials: true, credentials: 'include'}
    // )   
    // .then(res => {
    //   console.log(res);
    //   if(res.status===200)
    //   {
    //     window.location.replace("/");
    //   }
    //   else
    //   {
    //   }   
    // }).catch(async (err) => {
    //   const msg=await responseHandler(err);
    //  if(msg==="token refreshed"){
    //      console.log("refreshed")
    //      this.handleSignOut(e);
    //  }
    //  else if (msg==="logout"){
    //      console.log("not refreshed")
    //  }   
    // })
    window.location.replace("/");
  }
  redirectToMain=(e)=>{
    e.preventDefault();
    window.location.replace("/home");
  }
  render() {
    return (
          <div id="loggedin-navbar">
            <div id="navbar-container" className="d-flex justify-content-between">
                <div id="navbar-left" className="">
                    <Link to="/home" className="logo mt-2 mb-1" onClick={this.redirectToMain}><img src={logo} alt=""/></Link>
                </div>
              <div id="navbar-right" className="d-flex user-btns">
                <div className="d-flex user-btns-group">
                  <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn home-btn" to="/home"  onClick={this.redirectToMain}><i type="icon" className="fa fa-fw fa-home pt-1 align-self-center"></i> Home</Link>
                  <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/matches" key="/login"  onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Matches</Link>
                  {
                    this.state.loginType == "customer"?
                    <>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/my-reservations" key="/login"  onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Reservations</Link>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/edit-my-profile" key="/login"  onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Edit Profile</Link>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/" onClick={this.handleSignOut}><i type="icon" className="fa fa-sign-out pt-1 pr-1"></i> Sign Out</Link>
                    </>
                  :
                    this.state.loginType == "guest"?
                    <>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/sign-up" key="/login"  onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Signup</Link>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/log-in" key="/login"  onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Login</Link>
                    </>
                    :
                    <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/" onClick={this.handleSignOut}><i type="icon" className="fa fa-sign-out pt-1 pr-1"></i> Sign Out</Link>
                  }
                  
                </div>
              </div>
            </div>
          </div>
    );
      
    }
}

export default Navbar;