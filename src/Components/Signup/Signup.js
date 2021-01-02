import React, { Component } from "react";
import "./Signup.css"
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

      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      confirmEmail:"",
      password: "",
      confirmPassword:"",
      phone: "",
      dateOfBirth: "",
      gender: "male",

      message:''

    };
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.signup=this.signup.bind(this);
    this.handleUserName=this.handleUserName.bind(this);
    this.handleEmail=this.handleEmail.bind(this);
    this.handleEmailConfirm=this.handleEmailConfirm.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handlePasswordConfirm=this.handlePasswordConfirm.bind(this);
    this.handleGender=this.handleGender.bind(this);
    this.handleBirthDate=this.handleBirthDate.bind(this);
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
  handleFirstName(e){
    this.setState({ firstName: e.target.value });
  }
  handleLastName(e){
    this.setState({ lastName: e.target.value });
  }
  handleUserName(e){
    this.setState({ userName: e.target.value });
  }
  handleEmail(e){
    this.setState({ email: e.target.value })
  }
  handleEmailConfirm(e){//changed to city
    this.setState({ confirmEmail: e.target.value })
  }
  handlePassword(e){
    this.setState({ password: e.target.value }) 
  }
  handlePasswordConfirm(e){
    this.setState({ confirmPassword: e.target.value }) 
  }
  handleGender(e) {
    this.setState({ gender: e.target.value });
  }
  handleBirthDate(e){
    this.setState({ dateOfBirth: e.target.value });
  }



render() {
    return (
        <div id="signup-container" style={{backgroundImage: `url(${image})` }} className="pt-5 pb-3">
          <div className="container">
              {/* <form className="container col-lg-6  text-center"  onSubmit={this.signup}> */}
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-5 mb-3" style={{color:"white"}}>Sign up</h1>
                  </div>
                    <div className="form-container">      

                      <div className="divider">
                          </div>                  
                          <div className="dropdown-divider"></div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control mt-3" aria-describedby="emailHelp" required placeholder="First name" onChange={this.handleFirstName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control" aria-describedby="emailHelp" required placeholder="Last name" onChange={this.handleLastName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Email address" onChange={this.handleEmail}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required placeholder="City" onChange={this.handleEmailConfirm}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" onChange={this.handlePassword}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Confirm password" onChange={this.handlePasswordConfirm}/>
                          </div>
                          <div className="form-group" style={{marginBottom:'6px'}}>
                              <select className="form-control" value={this.state.gender} required onChange={this.handleGender}>
                                  <option name="male">Male</option>
                                  <option name="female">Female</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <input type="date" className="form-control" id="exampleInputPassword1" required onChange={this.handleBirthDate} placeholder="Birthdate"/>
                          </div>
                          <br></br>
                          <button type="submit" className="btn btn-bg-orange text-white btn-size-primary" >Sign up</button>

                          <h6 className="mt-2 mb-1 text-white font-weight-bold">Already have an account?</h6>
                          <Link to="/login" type="button" className="btn btn-bg-violet mb-2 btn-size-primary">Log in</Link>

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