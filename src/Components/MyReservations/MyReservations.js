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
    const [myMatches,setMyMatches] = useState("");
    const [loginType,setLoginType] = useState(localStorage.getItem('loginType'));
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
            // setTickets(res.data.ticket)
            // getAllMatchesDetails(tickets)
            setMyMatches(res.data.ticket)
        }
        else
        {
        }   
    }).catch(err=>{
        if (err.message=="Request failed with status code 400") {
        }
    })
    // const [loginType,setLoginType] = useState("manager");
    // function getAllMatchesDetails(matchesID){
    //     var dummymatches = []
    //     for (let i = 0; i < matchesID.length; i++) {
    //         axios.post("https://efa-website-cufe.herokuapp.com/match"
    //         ,{
    //             matchId:matchesID[i]
    //         }
    //         ,{withCredentials: true}
    //         )   
    //         .then(res => {
    //             if(res.status===200)
    //             {
    //                 dummymatches.push(res.data.match)
    //             }
    //             else
    //             {
    //             }   
    //         }).catch(err=>{
    //             if (err.message=="Request failed with status code 400") {
    //             }
    //         })
    //     }
    //     setMyMatches(dummymatches);
    //     dummymatches.length = 0;
    // }

    function cancelReservationMAtch(ticketID){
        axios.delete("https://efa-website-cufe.herokuapp.com/match/reserveTicket"+ticketID,
        {
            ticketId:ticketID
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
            }   
        }).catch(err=>{
            if (err.message=="Request failed with status code 400") {
            }
        })
        // add request to get selected match data
        // setSelectedMatch(matchID);
        // window.scrollTo(0, 0)
    }
    return (
        <>
            <Navbar/>
            <div id="matches-whole" className="matches-container container">
                <div className="row matches-chosen-match mb-5 pt-5" style={{display: selectedMatch==""?"none":""}}>

                </div>
                <h2 className="section-header pt-5" style={{textAlign:"center"}}>My Reserved Matches:</h2>
                <div className="row matches-matches pt-2">
                    {
                        myMatches !== ""
                        ?
                        
                            myMatches.map((ticket,index)=>(
                                // <div class="card-group">
                                    <div class="card text-center mb-3">
                                        <div class="card-body container">
                                            <div className="row match-dateOfMatch-time justify-content-center">
                                                <div className="" >
                                                    <h1 >
                                                    {/* {match.dateOfMatch}  */}
                                                    </h1>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row match-teams justify-content-center">
                                                <div className="col-4">
                                                    <h1 style={{color:"Black"}}><strong>{ticket.match}</strong></h1>
                                                </div>
                                                <div className="col-2">
                                                    <strong>VS</strong>
                                                </div>
                                                <div className="col-4">
                                                    <h1 style={{color:"black"}}><strong>{ticket.match}</strong></h1>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="row match-stad justify-content-center">
                                                <div className="">
                                                    <h3><strong>{ticket.match}</strong></h3>
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
                                <h1 style={{height:"100vh"}}>You donnot have any reserved tickets! </h1>
                            </div>
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}