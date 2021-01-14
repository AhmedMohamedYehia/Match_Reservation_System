import React, { Component } from "react";
import "./EditMatch.css"
// import image from "../../StartupPage/stad.jpg"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
// import { ConfigContext } from "../../Context/ConfigContext";
// import Message from "../Message/Message"
import axios from "axios";

class AddMAtch extends Component {
  constructor() {
    super();
    this.state = {
      
      name: "" ,
      address: "",
      rows: "",
      seatsPerRow:"",
      // message:''
    };
    this.handleName=this.handleName.bind(this);
    this.handleAddress=this.handleAddress.bind(this);
    this.signup=this.signup.bind(this);
    this.handleRows=this.handleRows.bind(this);
    this.handleSeatsPerRow=this.handleSeatsPerRow.bind(this);

       
  }
  
  signup(e){
    e.preventDefault(); 
    if (this.state.seatsPerRow > 26) {
        alert("Max number of seats per row is 26")
        return;
    }
        axios.post('https://efa-website-cufe.herokuapp.com/stadium',
        {
            name: this.state.name ,
            address: this.state.address,
            rows: this.state.rows,
            seatsPerRow:this.state.seatsPerRow,
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
            alert("Stadium added correctly!")
            window.location.replace("/matches");
          }
          else
          {
            alert("Please make sure that you chose the right data, stadium name must be unique!")
          }   
        }).catch(err=>{
          alert("Please make sure that you chose the right data, stadium name must be unique!")
        })
    
  }
  handleName(e){
    this.setState({ name: e.target.value });
  }
  handleAddress(e){
    this.setState({ address: e.target.value });
  }
  handleRows(e){
    this.setState({ rows: e.target.value })
  }
  handleSeatsPerRow(e) {
    this.setState({ seatsPerRow: e.target.value });
  }



render() {
    return (
        <div id="edit-my-profile-container" style={{backgroundImage: `url(${image})` }} className="pt-5 pb-3">
          <div className="container pt-5 mt-5 ">
              {/* <form className="container col-lg-6  text-center"  onSubmit={this.signup}> */}
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-5 mb-3" style={{color:"white"}}>Add Stadium</h1>
                  </div>
                    <div className="form-container">      

                    <div className="divider">
                    </div>                  
                    <div className="dropdown-divider"></div>
                    <div className="form-group"style={{marginBottom:'6px'}}>
                        <input type="text"  placeholder="Stadium Name" className="form-control" aria-describedby="emailHelp" required  onChange={this.handleName}/>
                    </div>
                    <div className="form-group"style={{marginBottom:'6px'}}>
                        <input type="text" placeholder="Address" className="form-control" aria-describedby="emailHelp" required onChange={this.handleAddress}/>
                    </div>
                    <div className="form-group"style={{marginBottom:'6px'}}>
                        <input type="text" placeholder="Rows" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleRows}/>
                    </div>
                    <div className="form-group"style={{marginBottom:'6px'}}>
                        <input type="text"  placeholder="Seats Per Row" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleSeatsPerRow}/>
                    </div>
                    <br></br>
                    <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.signup} className="btn btn-bg-orange text-white btn-size-primary"  >Confirm</button>
                    <Link to="/home" className="btn btn-bg-violet mb-4 btn-size-primary pt-2 mt-2" > Cancel</Link>

                    </div>
                  </div>
              </form>
          </div>
        </div>
    );
}}

export default AddMAtch;