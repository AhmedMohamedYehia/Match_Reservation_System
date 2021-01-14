import React, { Component } from "react";
import "../Matches/EditMatch.css"
// import image from "../../StartupPage/stad.jpg"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
// import { ConfigContext } from "../../Context/ConfigContext";
// import Message from "../Message/Message"
import axios from "axios";

class DeleteUser extends Component {
  constructor() {
    super();
    this.state = {
      userName: "", 
      message:''
    };
    this.handleUserName=this.handleUserName.bind(this);
       
  }
  
  signup(){
    console.log("state in signup: "+this.state.userName)
    axios.delete("https://efa-website-cufe.herokuapp.com/users/"+this.state.userName
    ,{
        headers: {
            'authorization': "Bearer "+localStorage.getItem("token"),
        },
    }
    )   
    .then(res => {
        if(res.status===200)
        {
            alert("This user has been deleted.")
            window.location.replace("/admin-delete-user");
        }
        else
        {
            alert("Something went wrnog, check if the user's name is correct and try again.")
        }   
    }).catch(err=>{           
        alert("Something went wrnog, check if the user's name is correct and try again.")
    })
    
  }
  handleUserName(e){
    console.log(e.target.value)
    this.setState({ userName: e.target.value})
    console.log("state: "+this.state.userName)
  }

render() {
    return (
        <div id="edit-my-profile-container" style={{backgroundImage: `url(${image})` }} className="pt-5 pb-3">
          <div className="container  mt-4 " style={{paddingTop:"10rem"}}>
              {/* <form className="container col-lg-6  text-center"  onSubmit={this.signup}> */}
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-5 mb-3" style={{color:"white"}}>Enter account's username to delete.</h1>
                  </div>
                    <div className="form-container">      

                    <div className="divider">
                    </div>                  
                    <div className="dropdown-divider"></div>
                    <div className="form-group"style={{marginBottom:'6px'}}>
                        <input type="text" placeholder="Username" className="form-control" aria-describedby="emailHelp" required  onChange={this.handleUserName}/>
                    </div>
                    <br></br>
                    <Link className="row "><button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" className="btn btn-bg-orange text-white btn-size-primary">Delete account</button></Link>
                    <Link to="/home" className="btn btn-bg-violet mb-4 btn-size-primary pt-2 mt-2" > Cancel</Link>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this account?</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={()=>{this.signup()}} class="btn btn-outline-success">Yes, delete.</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                  </div>
              </form>
          </div>
        </div>
    );
}}

export default DeleteUser;