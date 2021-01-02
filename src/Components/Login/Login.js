import React, { Component } from "react";
import "../Signup/Signup.css"
// import image from "../../StartupPage/stad.jpg"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
// import { ConfigContext } from "../../Context/ConfigContext";
// import Message from "../Message/Message"
import axios from "axios";

// import {responseHandler,baseURL} from "../../Redux/ResponseHandler"
class Signup extends Component {
  constructor() {
    super();
    this.state = { gender: "male" };
    this.state = {
      status: "not connected",
      email: "",
      password: "",

    };
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
  }

  
  signup(e){
    e.preventDefault(); 

    if(this.state.password.length<9){
      this.setState({message:"Password must be over 8 characters."})
    }
    else if(this.state.password!=this.state.confirmPassword){
      this.setState({message:"Passwords don't match."})
    }
    else if(this.state.email!=this.state.confirmEmail){
      this.setState({message:"Emails don't match."})
    }
    else if(this.state.phone.length!=11){
      this.setState({message:"Phone must be 11 numbers"})
    }
    else{
    //   this.context.baseURL
    //   axios.post(baseURL+'/register/signUp',
    //   {
    //       "email": this.state.email,
    //       "password": this.state.password,
    //       "displayName":{
    //         "firstName":this.state.firstName,
    //         "lastName":this.state.lastName
    //       },
    //       "phone": this.state.phone,
    //       "dateOfBirth": this.state.dateOfBirth,
    //       "gender": this.state.gender,
    //       "userName": this.state.userName
    //     },{withCredentials: true, credentials: 'include'}
    //     )   
    //     .then(res => {
    //       if(res.status===201)
    //       {
    //         window.location.replace("/home");
    //       }
    //       else
    //       {
    //       }   
    //     }).catch(async (err) => {
    //       const msg=await responseHandler(err);
    //       this.setState({message:msg})
        
    //     }) 
    }

      
  }
  handleEmail(e){
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
              {/* <form className="container col-lg-6  text-center"  onSubmit={this.signup}> */}
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
                              <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Email address" onChange={this.handleEmail}/>
                          </div>
                          <div className="form-group">
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" onChange={this.handlePassword}/>
                          </div>
                          <br></br>
                          <button type="submit" className="btn btn-bg-orange text-white btn-size-primary" >Sign in</button>

                          <h6 className="mt-4 mb-1 text-white font-weight-bold">Don't have an account?</h6>
                        <Link to="/login" type="button" className="btn btn-bg-violet mb-4 btn-size-primary">Sign up</Link>

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

export default Signup;