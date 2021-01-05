import React, { Component } from "react";
// import image from "./stad.jpg"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "../Matches/Matches.css"
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
    const [myMatches,setMyMatches] = useState(dumMatches);
    const [loginType,setLoginType] = useState(localStorage.getItem('loginType'));
    const [selectedMatch,setSelectedMatch] = useState("");

    // const [loginType,setLoginType] = useState("manager");

    function cancelReservationMAtch(matchID){
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
                <h2 className="section-header pt-5">My Reserved Matches:</h2>
                <div className="row matches-matches pt-2">
                    {
                        myMatches.map((match,index)=>(
                            // <div class="card-group">
                                <div class="card text-center mb-3">
                                    <div class="card-body container">
                                        <div className="row match-dateOfMatch-time justify-content-center">
                                            <div className="" >
                                                <h1 >
                                                {match.dateOfMatch} 
                                                </h1>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row match-teams justify-content-center">
                                            <div className="col-4">
                                                <h1 style={{color:"Black"}}><strong>{match.homeTeam}</strong></h1>
                                            </div>
                                            <div className="col-2">
                                                <strong>VS</strong>
                                            </div>
                                            <div className="col-4">
                                                <h1 style={{color:"black"}}><strong>{match.awayTeam}</strong></h1>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row match-stad justify-content-center">
                                            <div className="">
                                                <h3><strong>{match.stadium}</strong></h3>
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
                                                <button type="button" onClick={cancelReservationMAtch(match.matchId)} class="btn btn-outline-success">Yes, Cancel.</button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            // </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}