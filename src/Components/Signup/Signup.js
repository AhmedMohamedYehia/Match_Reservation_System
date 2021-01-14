import React, { Component } from "react";
import "./Signup.css"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      status: "not connected",

      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      city:"",
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
    this.handleCity=this.handleCity.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handlePasswordConfirm=this.handlePasswordConfirm.bind(this);
    this.handleGender=this.handleGender.bind(this);
    this.handleBirthDate=this.handleBirthDate.bind(this);
  }

  
  signup(e){
    e.preventDefault(); 
    if(this.state.password.length<9){
      alert("Password must be over 8 characters.")
    }
    else if(this.state.password!=this.state.confirmPassword){
      alert("Passwords don't match.")
    }
    else{
        axios.post('https://efa-website-cufe.herokuapp.com'+'/signUp',
        {
          userName:this.state.userName,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          city:this.state.city,
          email:this.state.email,
          password:this.state.password,
          gender: this.state.gender
        }
        ,{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
          if(res.status===200)
          {
            alert("Signed up correctly, wait until a admin confirms your signup so you can login.")
            window.location.replace("/");
          }
          else
          {
            alert("something went wrong, all data fields must be unique please try again!")
          }   
        }).catch(err=>{
          if (err.message=="Request failed with status code 400") {
            alert("Username and Email must be unique!")
          }
          else{
            alert("something went wrong, all data fields must be unique please try again!")
          }
        })
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
  handleCity(e){
    this.setState({ city: e.target.value })
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
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-4 mb-3" style={{color:"white"}}>Sign up</h1>
                  </div>
                    <div className="form-container">      

                      <div className="divider">
                          </div>                  
                          <div className="dropdown-divider"></div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control " aria-describedby="emailHelp" required placeholder="User name" onChange={this.handleUserName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control" aria-describedby="emailHelp" required placeholder="First name" onChange={this.handleFirstName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control" aria-describedby="emailHelp" required placeholder="Last name" onChange={this.handleLastName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="email" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required placeholder="Email address" onChange={this.handleEmail}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required placeholder="City" onChange={this.handleCity}/>
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
                              <input type="date" min="1920-01-01" max="2000-01-01" className="form-control" id="exampleInputPassword1" required onChange={this.handleBirthDate} placeholder="Birthdate"/>
                          </div>
                          <br></br>
                          <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.signup} className="btn btn-bg-orange text-white btn-size-primary"  >Sign up</button>

                          <h6 className="mt-2 mb-1 text-white font-weight-bold">Already have an account?</h6>
                          <Link to="/log-in" type="button" className="btn btn-bg-violet mb-2 btn-size-primary">Log in</Link>

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