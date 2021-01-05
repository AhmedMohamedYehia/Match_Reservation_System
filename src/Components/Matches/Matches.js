import React, { Component } from "react";
// import image from "./stad.jpg"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Matches.css"
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
export default function Matches () {
    const [myMatches,setMyMatches] = useState(dumMatches);
    const [loginType,setLoginType] = useState(localStorage.getItem('loginType'));
    const [selectedMatch,setSelectedMatch] = useState("");

    // const [loginType,setLoginType] = useState("manager");

    function reserveMAtch(matchID){
        // add request to get selected match data
        // setSelectedMatch(matchID);
        window.scrollTo(0, 0)
    }
    return (
        <>
            <Navbar/>
            <div id="matches-whole" className="matches-container container">
                <div className="row matches-chosen-match mb-5 pt-5" style={{display: selectedMatch==""?"none":""}}>

                </div>
                <h2 className="section-header pt-5">Matches:</h2>
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
                                    {
                                        loginType == "manager" ?
                                        <div class="card-footer">
                                            <Link to="/sign-up" className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Edit Match</button></Link>
                                        </div>
                                        :
                                            loginType == "customer" ?
                                            <div class="card-footer">
                                                <Link className="row justify-content-center"><button onClick={reserveMAtch(match.matchId)} type="button" className="btn btn-outline-success btn-lg">Reserve Match</button></Link>
                                            </div>
                                            :
                                            ""
                                    } 
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