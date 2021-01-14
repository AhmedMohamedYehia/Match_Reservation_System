import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Matches.css";
import axios from "axios";
import DrawGrid from "./DrawGrid"

export default class Matches extends Component  {
    constructor() {
        super();
        this.state = {
            status: "not connected",
            seatsLength: 0,
            matchID:"",
            myMatches: "",
            loginType: localStorage.getItem('loginType'),
            seats: [],
            
            seat: [],
            seatAvailable: [],
            seatReserved: [],
            
            // seat: seatsAll,
            // seatAvailable:seatsAvail,
            // seatReserved: seatsNotAvail
    
        };
        this.callBackFunct=this.callBackFunct.bind(this);
        this.handleDeleteMatch=this.handleDeleteMatch.bind(this);
        axios.get("https://efa-website-cufe.herokuapp.com/match/all"
        ,{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
          if(res.status===200)
          {
            this.setState({myMatches: res.data.matches})
          }
          else
          {
            alert("Something went wrong please refresh the page!")
          }   
        }).catch(err=>{
            alert("Something went wrong please refresh the page!")
        })
    }
    callBackFunct(matchID){
        this.setState({matchID:matchID});
        axios.get("https://efa-website-cufe.herokuapp.com/ticket/all/"+matchID
        ,{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
            if(res.status===200)
            {
                this.setState({seatsLength:res.data.ticket.length})
                this.setState({seats:res.data.ticket})
                window.scrollTo(0,0)
            }
            else
            {
                alert("Something went wrong please refresh the page!")
            }   
        }).catch(err=>{
            alert("Something went wrong please refresh the page!")
        }).then(e=>{
            this.preprocessData()
        })
    }
    getAllTickets(){
        axios.get("https://efa-website-cufe.herokuapp.com/ticket/all/"+this.state.matchID
        ,{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
            if(res.status===200)
            {
                this.setState({seatsLength:res.data.ticket.length})
                this.setState({seats:res.data.ticket})
            }
            else
            {
                alert("Something went wrong please refresh the page!")
            }   
        }).catch(err=>{
            alert("Something went wrong please refresh the page!")
        }).then(e=>{
            this.preprocessData()
        })
    }
    preprocessData(){
        var seatsAvail =[];
        var seatsNotAvail = [];
        var seatsAll = [];
        for (let i = 0; i < this.state.seats.length; i++) {
            seatsAll.push(this.state.seats[i])
            if (this.state.seats[i].owner == null && i<this.state.seatsLength) {
                seatsAvail.push(this.state.seats[i])
            }
            else if(this.state.seats[i].owner != null && i<this.state.seatsLength){
                seatsNotAvail.push((this.state.seats[i]))
            }
        }
        this.setState({seatAvailable:seatsAvail})
        this.setState({seat:seatsAll})
        this.setState({seatReserved:seatsNotAvail})
        
        seatsAvail.length =0;
        seatsNotAvail.length = 0;
        seatsAll.length = 0;
        
        setTimeout(this.getAllTickets(), 2000);
    }

    onClickData(seat) {
        if (seat.owner != null) {
            alert("cannot reserve already reserved seat!");
            return;
        }
        var person = prompt("Please enter your credit card number", "");
        axios.defaults.withCredentials = true
        if (person != null && person != "") {
            person = prompt("Please enter your bin number", "")
            if (person != null && person != "") {
                axios.post("https://efa-website-cufe.herokuapp.com/match/reserveTicket",
                {
                    ticketId:seat._id
                }
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
                        alert("your ticket unique number is: "+res.data.ticket._id)
                    }
                    else
                    {
                        alert("Something went wrong, maybe someonoe reserved the ticket before you. please refresh the page!")
                    }   
                }).catch(err=>{
                    alert("Something went wrong, maybe someonoe reserved the ticket before you. please refresh the page!")
                })
            }
        }
    }

    handleDeleteMatch(matchId){
        axios.delete('https://efa-website-cufe.herokuapp.com/match/'+matchId,
        {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        }
        ,{withCredentials: true, credentials: 'include'}
        )   
        .then(res => {
        if(res.status===200)
        {
            alert("The match have been deleted correctly!")
            window.location.replace("/matches");
        }
        else
        {
            alert("Something went wrong please refresh the page!")
        }   
        }).catch(err=>{
            alert("Something went wrong please refresh the page!")
        })
    }
    

    render() {
        return (
            <>
                <Navbar/>
                <div id="matches-whole" className="matches-container container">
                    <div className="row matches-chosen-match mb-5 pt-5" >
                        {
                            this.state.seat.length > 0?
                            <>
                                <div className="justify-content-center"> 
                                    <h2 className="section-header pt-5" style={{textAlign:"center"}}>Seat Reservation:</h2>
                                    <div id="stadium" >
                                        Pitch
                                    </div>
                                    <DrawGrid 
                                            className="ml-2 pl-4"
                                            seat = { this.state.seat }
                                            available = { this.state.seatAvailable }
                                            reserved = { this.state.seatReserved }
                                            onClickData = { this.onClickData.bind(this) }
                                            />
                                </div>
                            </>
                            :
                            ""
                        }
                    </div>
                    <hr></hr>
                    <h2 className="section-header pt-5" style={{textAlign:"center"}}>Matches:</h2>
                    <div className="row matches-matches pt-2">
                        
                        {  
                            this.state.myMatches !== ""
                            ?
                            
                                this.state.myMatches.map((match,index)=>(
                                    // <div class="card-group">
                                        <div className="card text-center mb-3">
                                            <div className="card-body container">
                                                <div className="row match-dateOfMatch-time justify-content-center">
                                                    <div className="" >
                                                        <h1 >
                                                        {match.dateOfMatch.replace("T",", ")}
                                                        </h1>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row match-teams justify-content-center">
                                                    <div className="col-4">
                                                        <h1 style={{color:"Black"}}><strong>{match.homeTeam.name}</strong></h1>
                                                    </div>
                                                    <div className="col-2">
                                                        <strong>VS</strong>
                                                    </div>
                                                    <div className="col-4">
                                                        <h1 style={{color:"black"}}><strong>{match.awayTeam.name}</strong></h1>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row match-stad justify-content-center">
                                                    <div className="">
                                                        <h3><strong>{match.stadium.name}</strong></h3>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row match-main-ref justify-content-center">
                                                    <div className="col-2">
                                                        <h3>Main refree: </h3>
                                                    </div>
                                                    <div className="col-8">
                                                        <h3>{match.mainReferee}</h3>
                                                    </div>
                                                </div>
                                                <div className="row match-sub-refs justify-content-center">
                                                    <div className="col-2">
                                                        <h3>Lines man:</h3>
                                                    </div>
                                                    <div className="col-4">
                                                        <h3 >{match.firstLineman}</h3>
                                                    </div>
                                                    <div className="col-4">
                                                        <h3 >{match.secondLineman}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            {
                                                this.state.loginType == "manager" ?
                                                <div className="card-footer">

                                                        <Link className="row justify-content-center p-0"><button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" className="btn btn-outline-success btn-lg">Delete Match</button></Link>
                                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to delete this match?</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" onClick={()=>{this.handleDeleteMatch(match._id)}} class="btn btn-outline-success">Yes, delete.</button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                        <Link   to={{
                                                            pathname: '/edit-match',
                                                            state: {
                                                                match: match
                                                            }
                                                            }}   className="row justify-content-center">
                                                            <button type="button" className="btn btn-outline-success btn-lg mt-2">Edit Match</button>
                                                        </Link>
                                                        <Link to  className="row justify-content-center mt-2 p-0"><button onClick={() => { this.callBackFunct(match._id) }} type="button" className="btn btn-outline-success btn-lg">See Match Reservation Status</button></Link>
                                                </div>
                                                :
                                                    this.state.loginType == "fan" ?
                                                    <div className="card-footer">
                                                        <Link to  className="row justify-content-center"><button onClick={() => { this.callBackFunct(match._id) }} type="button" className="btn btn-outline-success btn-lg">Reserve Match</button></Link>
                                                        {/* <button onClick={reserveMAtch(match.stadium,index)} type="button" className="btn btn-outline-success btn-lg">Reserve Match</button> */}
                                                    </div>
                                                    :
                                                        this.state.loginType == "admin" ?
                                                        <Link to  className="row justify-content-center mt-2 p-0"><button onClick={() => { this.callBackFunct(match._id) }} type="button" className="btn btn-outline-success btn-lg">See Match Reservation Status</button></Link>
                                                        :
                                                        ""
                                            } 
                                        </div>
                                    // </div>
                                ))
                            :
                            <div className="row justify-content-center" style={{textAlign:"center"}}>
                                <h1 style={{height:"100vh"}}>No matches available! </h1>
                            </div>
                        }
                    </div>
                </div>
                <Footer/>
            </>
    );
}}



