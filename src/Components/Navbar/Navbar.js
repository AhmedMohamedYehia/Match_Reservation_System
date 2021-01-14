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
  handleAdminSignOut=(e)=>{
    e.preventDefault();
    axios.delete('https://efa-website-cufe.herokuapp.com'+"/admin/signOut",{
      headers: {
          'authorization': "Bearer "+localStorage.getItem("token"),
      },
    },
    {withCredentials: true, credentials: 'include'}
    )   
    .then(res => {
      console.log(res);
      if(res.status===200)
      {
        window.location.replace("/admin-log-in");
      }
      else
      {
        // alert("something went wrong please try again!")
      }   
    }).catch(async (err) => {
      // alert("something went wrong please try again!")
    })
  }
  handleSignOut=(e)=>{
    e.preventDefault();
    axios.delete('https://efa-website-cufe.herokuapp.com'+"/signOut",{
      headers: {
          'authorization': "Bearer "+localStorage.getItem("token"),
      },
    }
    ,{withCredentials: true, credentials: 'include'}
    )   
    .then(res => {
      console.log(res);
      if(res.status===200)
      {
        window.location.replace("/");
      }
      else
      {
        // alert("something went wrong please try again!")
      }   
    }).catch(async (err) => {
      // alert("something went wrong please try again!")
    })
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
                  <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/matches"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Matches</Link>
                  {
                  this.state.loginType == "fan"?
                  <>
                    <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/my-reservations"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Reservations</Link>
                    <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/edit-my-profile"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Edit Profile</Link>
                    <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/" onClick={this.handleSignOut}><i type="icon" className="fa fa-sign-out pt-1 pr-1"></i> Sign Out</Link>
                  </>
                  :
                    this.state.loginType == "guest"?
                    <>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/sign-up"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Signup</Link>
                      <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/log-in"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Login</Link>
                    </>
                    :
                      this.state.loginType == "admin"?
                        <>
                          <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/admin-delete-user"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Remove User</Link>
                          <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/admin-approve-users"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Pending Users</Link>
                          <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/" onClick={this.handleAdminSignOut}><i type="icon" className="fa fa-sign-out pt-1 pr-1"></i> Sign Out</Link>
                        </>
                      :
                      //manager
                      <>
                        <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/add-stadium"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Add Stadium</Link>
                        <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/add-match"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Add Match</Link>
                        <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/edit-my-profile"   onClick={this.navbarOnchange}><i type="icon" className="fas fa-store pt-1 align-self-center"></i>Edit Profile</Link>
                        <Link className="d-flex flex-column text-center justify-content-center text-white p-3 user-btn market-btn" to="/" onClick={this.handleSignOut}><i type="icon" className="fa fa-sign-out pt-1 pr-1"></i> Sign Out</Link>
                      </>
                  }
                  
                </div>
              </div>
            </div>
          </div>
    );
      
    }
}

export default Navbar;