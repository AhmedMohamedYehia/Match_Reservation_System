import React, { Component } from "react";
import "./EditMyProfile.css"
// import image from "../../StartupPage/stad.jpg"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
// import { ConfigContext } from "../../Context/ConfigContext";
// import Message from "../Message/Message"
import axios from "axios";

class EditMyProfile extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Ahmed",
      lastName: "yehia",
      password: "123456789",
      phone: "01126683720",
      dateOfBirth: "1999-10-12",
      gender: "male",
      // message:''
    };
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.signup=this.signup.bind(this);
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
      window.location.replace("/home");
    }

      
  }
  handleFirstName(e){
    this.setState({ firstName: e.target.value });
  }
  handleLastName(e){
    this.setState({ lastName: e.target.value });
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
        <div id="edit-my-profile-container" style={{backgroundImage: `url(${image})` }} className="pt-5 pb-3">
          <div className="container pt-5 mt-4 ">
              {/* <form className="container col-lg-6  text-center"  onSubmit={this.signup}> */}
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-5 mb-3" style={{color:"white"}}>Edit Profile</h1>
                  </div>
                    <div className="form-container">      

                      <div className="divider">
                          </div>                  
                          <div className="dropdown-divider"></div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input value={this.state.firstName} type="text" className="form-control mt-3" aria-describedby="emailHelp" required placeholder="First name" onChange={this.handleFirstName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input value={this.state.lastName}  type="text" className="form-control" aria-describedby="emailHelp" required placeholder="Last name" onChange={this.handleLastName}/>
                          </div>
                          <div className="form-group" style={{marginBottom:'6px'}}>
                              <select className="form-control" value={this.state.gender} required onChange={this.handleGender}>
                                  <option name="male">Male</option>
                                  <option name="female">Female</option>
                              </select>
                          </div>
                          <div className="form-group" style={{marginBottom:'6px'}}>
                              <input   value={this.state.dateOfBirth}  type="date" className="form-control" id="exampleInputPassword1" required onChange={this.handleBirthDate} placeholder="Birthdate"/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" onChange={this.handlePassword}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Confirm password" onChange={this.handlePasswordConfirm}/>
                          </div>
                          <br></br>
                          <button type="submit" className="btn btn-bg-orange text-white btn-size-primary" >Confirm</button>
                          
                          <div className="text-left">
                            <div > <p className="text-white font-weight-light "><br></br></p></div>
                          </div>
                    </div>
                  </div>
              </form>
          </div>
        </div>
    );
}}

export default EditMyProfile;