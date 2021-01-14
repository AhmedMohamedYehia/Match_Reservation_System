import React, { Component } from "react";
import "./EditMatch.css"
// import image from "../../StartupPage/stad.jpg"
import image from "../../Assets/pitch2.jpg"
import { Link } from "react-router-dom";
// import { ConfigContext } from "../../Context/ConfigContext";
// import Message from "../Message/Message"
import axios from "axios";

class EditMatch extends Component {
  constructor() {
    super();
    this.state = {
      myData: {
      },
      
      homeTeam: "" ,
      awayTeam: "",
      stadium: "",
      dateOfMatch:new Date(),
      mainReferee: "",
      firstLineman: "",
      secondLineman: "",
      // message:''
    };
    this.handleHomeTeam=this.handleHomeTeam.bind(this);
    this.handleAwayTeam=this.handleAwayTeam.bind(this);
    this.signup=this.signup.bind(this);
    this.handleStadium=this.handleStadium.bind(this);
    this.handleMainReferee=this.handleMainReferee.bind(this);
    this.handleFirstLineman=this.handleFirstLineman.bind(this);
    this.handleSecondLineman=this.handleSecondLineman.bind(this);
    this.handleDateOfMatch=this.handleDateOfMatch.bind(this);

       
  }
  componentDidMount(){
    const { match } = this.props.location.state;
    this.setState({myData:match})
    this.setState({
        homeTeam: match.homeTeam.name,
        awayTeam:  match.awayTeam.name,
        stadium:  match.stadium.name,
        mainReferee:  match.mainReferee,
        firstLineman:  match.firstLineman,
        secondLineman:  match.secondLineman,
        dateOfMatch:  match.dateOfMatch
    })
    console.log("match comming :"+ match)
  }
  
  signup(e){
    e.preventDefault(); 
        axios.put('https://efa-website-cufe.herokuapp.com/match',
        {
            homeTeam: this.state.homeTeam ,
            awayTeam: this.state.awayTeam,
            stadium: this.state.stadium,
            dateOfMatch:this.state.dateOfMatch,
            mainReferee: this.state.mainReferee,
            firstLineman: this.state.firstLineman,
            secondLineman: this.state.secondLineman,
            matchId:this.state.myData._id
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
            alert("The match data have been updated correctly!")
            window.location.replace("/matches");
          }
          else
          {
            alert("Please make sure that you chose the right data!")
          }   
        }).catch(err=>{
          alert("Please make sure that you chose the right data!")
        })
    
  }
  handleHomeTeam(e){
    this.setState({ homeTeam: e.target.value });
  }
  handleAwayTeam(e){
    this.setState({ awayTeam: e.target.value });
  }
  handleStadium(e){
    this.setState({ stadium: e.target.value })
  }
  handleMainReferee(e) {
    this.setState({ mainReferee: e.target.value });
  }
  handleFirstLineman(e) {
    this.setState({ firstLineman: e.target.value });
  }
  handleSecondLineman(e) {
    this.setState({ secondLineman: e.target.value });
  }
  handleDateOfMatch(e){
    this.setState({ dateOfMatch: e.target.value });
  }



render() {
    console.log("my data : "+this.state.myData.dateOfMatch)
    return (
        <div id="edit-my-profile-container" style={{backgroundImage: `url(${image})` }} className="pt-3 pb-3">
          <div className="container pt-5 mt-4 ">
              {/* <form className="container col-lg-6  text-center"  onSubmit={this.signup}> */}
              <form className="container col-lg-6  text-center"  >
                  <div className="text-center container w-90 h-100">
              <div className="container">
                  <h1 className="mt-5 mb-3" style={{color:"white"}}>Edit Match</h1>
                  </div>
                    <div className="form-container">      

                    <div className="divider">
                    </div>                  
                    <div className="dropdown-divider"></div>
                        {
                            this.state.myData && this.state.myData.homeTeam?
                            <>
                                <div className="form-group"style={{marginBottom:'6px'}}>
                                    <input type="text" defaultValue={this.state.myData.homeTeam.name} placeholder="Home team" className="form-control" aria-describedby="emailHelp" required  onChange={this.handleHomeTeam}/>
                                </div>
                                <div className="form-group"style={{marginBottom:'6px'}}>
                                    <input type="text" defaultValue={this.state.myData.awayTeam.name} placeholder="Away team" className="form-control" aria-describedby="emailHelp" required onChange={this.handleAwayTeam}/>
                                </div>
                                <div className="form-group"style={{marginBottom:'6px'}}>
                                    <input type="text" defaultValue={this.state.myData.stadium.name} placeholder="stadium" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleStadium}/>
                                </div>
                                <div className="form-group"style={{marginBottom:'6px'}}>
                                    <input type="text" defaultValue={this.state.myData.mainReferee} placeholder="Main Referee" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleMainReferee}/>
                                </div>
                                <div className="form-group"style={{marginBottom:'6px'}}>
                                    <input type="text" defaultValue={this.state.myData.firstLineman} placeholder="First lineman" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleFirstLineman}/>
                                </div>
                                <div className="form-group"style={{marginBottom:'6px'}}>
                                    <input type="text" defaultValue={this.state.myData.secondLineman} placeholder="stadiFirst linemanum" className="form-control " id="exampleInputcity1" aria-describedby="cityHelp" required  onChange={this.handleSecondLineman}/>
                                </div>
                                <div className="form-group" style={{marginBottom:'6px'}}>
                                    <input type="datetime-local"defaultValue={this.state.myData.dateOfMatch}  className="form-control" id="exampleInputPassword1" required onChange={this.handleDateOfMatch} />
                                </div>
                                <br></br>
                                <button type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.signup} className="btn btn-bg-orange text-white btn-size-primary"  >Confirm</button>
                                <Link to="/home" className="btn btn-bg-violet mb-4 btn-size-primary pt-2 mt-2" > Cancel</Link>

                                <div className="text-left">
                                <div > <p className="text-white font-weight-light pt-1"><u>Terms and conditions</u></p></div>
                                </div>
                            </>
                            :
                            ""
                        }
                    </div>
                  </div>
              </form>
          </div>
        </div>
    );
}}

export default EditMatch;