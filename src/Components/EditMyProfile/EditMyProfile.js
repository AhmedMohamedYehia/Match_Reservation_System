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
      myData: {
        firstName: "",
        lastName: "",
        city:"",
        password: "",
        confirmPassword:"",
        dateOfBirth: "",
        gender: ""
      },
      
      firstName: "",
      lastName: "",
      city:"",
      password: "",
      confirmPassword:"",
      dateOfBirth: "",
      gender: "",
      // message:''
    };
    this.handleFirstName=this.handleFirstName.bind(this);
    this.handleLastName=this.handleLastName.bind(this);
    this.signup=this.signup.bind(this);
    this.handleCity=this.handleCity.bind(this);
    this.handlePassword=this.handlePassword.bind(this);
    this.handleGender=this.handleGender.bind(this);
    this.handleBirthDate=this.handleBirthDate.bind(this);
    axios.get("https://efa-website-cufe.herokuapp.com/me"
    ,{
        headers: {
            'authorization': "Bearer "+localStorage.getItem("token"),
        },
    }
    ,{withCredentials: true}
    )   
    .then(res => {
        if(res.status===200)
        {
          this.setState({myData:res.data})
        }
        else
        {
        }   
    }).catch(err=>{
        if (err.message=="Request failed with status code 400") {
        }
    })
  }

  
  signup(e){
    e.preventDefault(); 
    if(this.state.password.length<9){
      alert("Password must be over 8 characters.")
    }
    else{
        axios.put('https://efa-website-cufe.herokuapp.com'+'/me',
        {
          userName:this.state.myData.userName,
          firstName:this.state.firstName,
          lastName:this.state.lastName,
          city:this.state.city,
          email:this.state.myData.email,
          password:this.state.password,
          gender: this.state.gender
        },{
          headers: {
              'authorization': "Bearer "+localStorage.getItem("token"),
          },
        }
        ,{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
          if(res.status===200)
          {
            alert("Your data have been updated correctly!")
            window.location.replace("/home");
          }
          else
          {
          }   
        }).catch(err=>{
          if (err.message=="Request failed with status code 400") {
            alert("Username and Email must be unique!")
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
  handleCity(e){
    this.setState({ city: e.target.value })
  }
  handlePassword(e){
    this.setState({ password: e.target.value }) 
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
                              <input type="text" placeholder={this.state.myData.firstName} className="form-control" aria-describedby="emailHelp" required  onChange={this.handleFirstName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" placeholder={this.state.myData.lastName}  className="form-control" aria-describedby="emailHelp" required onChange={this.handleLastName}/>
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="text" placeholder={this.state.myData.city}  className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleCity}/>
                          </div>
                          <div className="form-group" style={{marginBottom:'6px'}}>
                              <select className="form-control" placeholder={this.state.myData.gender} required onChange={this.handleGender}>
                                  <option name="male">Male</option>
                                  <option name="female">Female</option>
                              </select>
                          </div>
                          <div className="form-group" style={{marginBottom:'6px'}}>
                              <input type="date"placeholder={this.state.myData.dateOfBirth}  className="form-control" id="exampleInputPassword1" required onChange={this.handleBirthDate} />
                          </div>
                          <div className="form-group"style={{marginBottom:'6px'}}>
                              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" onChange={this.handlePassword}/>
                          </div>
                          <br></br>
                          <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.signup} className="btn btn-bg-orange text-white btn-size-primary"  >Confirm</button>

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

export default EditMyProfile;