import React, { Component } from "react";
import "../Signup/Signup.css"
// import image from "../../StartupPage/stad.jpg"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
// import { ConfigContext } from "../../Context/ConfigContext";
// import Message from "../Message/Message"
import axios from "axios";

// import {responseHandler,baseURL} from "../../Redux/ResponseHandler"
class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      status: "not connected",
      username: "",
      password: "",

    };
    this.handleUserNAme=this.handleUserNAme.bind(this);
    this.signup=this.signup.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
  }

  
  signup(e){
    e.preventDefault(); 
    axios.post('https://efa-website-cufe.herokuapp.com'+'/admin/signIn',
      {
          "userName": this.state.email,
          "password": this.state.password,
        },{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
          if(res.status===200)
          {
            console.log("hereee: "+res.data.token);
            window.location.replace("/home");
            localStorage.setItem('loginType', "admin");
            localStorage.setItem('userName', this.state.email);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('token', res.data.token);
          }
          else
          {
            alert("Please make sure that you chose the right username and passsword!")
          }   
        }).catch(async (err) => {
          alert("Please make sure that you chose the right username and passsword!")
        }) 
  }
  handleUserNAme(e){
    this.setState({ email: e.target.value })
  }
  handlePassword(e){
    this.setState({ password: e.target.value }) 
  }


render() {
    return (
        <div id="signup-container" style={{backgroundImage: `url(${image})` }} className="pt-5 pb-3">
          <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-5 mb-3" style={{color:"white"}}>Log in</h1>
                  </div>
                    <div className="form-container">      

                      <div className="divider">
                          </div>                  
                          <div className="dropdown-divider"></div>
                          <div className="form-group" style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Username" onChange={this.handleUserNAme}/>
                          </div>
                          <div className="form-group">
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" onChange={this.handlePassword}/>
                          </div>
                          <br></br>
                          <button type="submit" onClick={this.signup} className="btn btn-bg-orange text-white btn-size-primary" >Sign in</button>

                          <h6 className="mt-4 mb-1 text-white font-weight-bold">Don't have an account?</h6>
                        <Link to="/sign-up" type="button" className="btn btn-bg-violet mb-4 btn-size-primary">Sign up</Link>

                          <div className="text-left">
                          <div href="/"> <p className="text-white font-weight-light "><u>Terms and conditions</u></p></div>
                          </div>
                    </div>
                  </div>
              </form>
          </div>
        </div>
    );
}}

export default AdminLogin;