import React, { Component } from "react";
// import image from "./stad.jpg"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "../Matches/Matches.css"
import axios from "axios";
const dumMatches = [
    {
        matchId: 1,
        homeTeam : "zamalek1",
        awayTeam : "ahly2",
        stadium : "cairo stad",
        dateOfMatch : "1999-10-12",
        mainReferee: "ahmed yehia",
        firstLineman: "ahmed",
        secondLineman: "yehia"
    },
    {
        matchId: 2,
        homeTeam : "zamalek2",
        awayTeam : "ahly2",
        stadium : "cairo stad",
        dateOfMatch : "1999-10-12",
        mainReferee: "ahmed yehia",
        firstLineman: "ahmed",
        secondLineman: "yehia"
    },
    {
        matchId: 3,
        homeTeam : "zamalek3",
        awayTeam : "ahly3",
        stadium : "cairo stad",
        dateOfMatch : "1999-10-12",
        mainReferee: "ahmed yehia",
        firstLineman: "ahmed",
        secondLineman: "yehia"
    },
    {
        matchId: 4,
        homeTeam : "zamalek4",
        awayTeam : "ahly4",
        stadium : "cairo stad",
        dateOfMatch : "1999-10-12",
        mainReferee: "ahmed yehia",
        firstLineman: "ahmed",
        secondLineman: "yehia"
    },
    {
        matchId: 5,
        homeTeam : "zamalek5",
        awayTeam : "ahly5",
        stadium : "cairo stad",
        dateOfMatch : "1999-10-12",
        mainReferee: "ahmed yehia",
        firstLineman: "ahmed",
        secondLineman: "yehia"
            
    }
]
export default function MyReservations () {
    const [myMatches,setMyMatches] = useState([]);
    const [selectedMatch,setSelectedMatch] = useState("");
    const [tickets,setTickets] = useState();
    
    axios.get("https://efa-website-cufe.herokuapp.com/ticket/reserved"
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
            setMyMatches(res.data.ticket)
        }
        else
        {
            alert("Something went wrong please refresh the page!")
        }   
    }).catch(err=>{
        alert("Something went wrong please refresh the page!")
    })

    function cancelReservationMAtch(ticketID){
        axios.delete("https://efa-website-cufe.herokuapp.com/match/reserveTicket/"+ticketID
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
                alert("Your reservation have been canceled.")
                window.location.replace("/my-reservations");
            }
            else
            {
                alert("Something went wrnog please try again.")
            }   
        }).catch(err=>{
            alert("Something went wrnog please try again.")
        })
    }
    return (
        <>
            <Navbar/>
            <div id="matches-whole" className="matches-container container" style={{height:"100vh"}}>
                <div className="row matches-chosen-match mb-5 pt-5" style={{display: selectedMatch==""?"none":""}}>

                </div>
                <h2 className="section-header pt-5" style={{textAlign:"center"}}>My Reserved Matches:</h2>
                <div className="row matches-matches pt-2">
                    {
                        myMatches.length !== 0
                        ?
                        
                            myMatches.map((ticket,index)=>(
                                // <div class="card-group">
                                    <div class="card text-center mb-3">
                                        <div class="card-body container">
                                            <div className="row match-dateOfMatch-time justify-content-center">
                                                <div className="" >
                                                    <h3>
                                                        Ticket Unique Number: {ticket._id} 
                                                    </h3>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row match-teams justify-content-center">
                                                <div className="col-4">
                                                    <h1 style={{color:"Black"}}><strong>{ticket.match.homeTeam.name}</strong></h1>
                                                </div>
                                                <div className="col-2">
                                                    <strong>VS</strong>
                                                </div>
                                                <div className="col-4">
                                                    <h1 style={{color:"black"}}><strong>{ticket.match.awayTeam.name}</strong></h1>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row match-stad justify-content-center">
                                                <div className="">
                                                    <h3><strong>{ticket.match.stadium.name}</strong></h3>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row ticket-row justify-content-center">
                                                <div className="col-4">
                                                    <h1 style={{color:"Black"}}>Row: {ticket.row}</h1>
                                                </div>
                                                <div className="col-4">
                                                    <h1 style={{color:"black"}}>Seat in row: {ticket.seatInRow}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <Link className="row justify-content-center"><button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" className="btn btn-outline-success btn-lg">Cancel My Reservation</button></Link>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to cancel your reservation?</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" onClick={()=>{cancelReservationMAtch(ticket._id)}} class="btn btn-outline-success">Yes, Cancel.</button>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                // </div>
                            ))
                        :
                            <div className="row justify-content-center" style={{textAlign:"center"}}>
                                <h1 style={{height:"100vh"}}>You don't have any reserved tickets! </h1>
                            </div>
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}