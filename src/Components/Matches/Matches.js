import React, { Component } from "react";
// import image from "./stad.jpg"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Matches.css"
const dumMatches = [
    {
        homeTeam : "zamalek",
        awayTeam : "ahly",
        matchVenue : "cairo stad",
        date : "1999-10-12",
        time : "6:30AM",
        mainRef: "ahmed yehia",
        linesman : {
                first: "ahmed",
                second: "yehia"
            }
    },
    {
        homeTeam : "zamalek",
        awayTeam : "ahly",
        matchVenue : "cairo stad",
        date : "1999-10-12",
        time : "6:30AM",
        mainRef: "ahmed yehia",
        linesman : {
                first: "ahmed",
                second: "yehia"
            }
    },
    {
        homeTeam : "zamalek",
        awayTeam : "ahly",
        matchVenue : "cairo stad",
        date : "1999-10-12",
        time : "6:30AM",
        mainRef: "ahmed yehia",
        linesman : {
                first: "ahmed",
                second: "yehia"
            }
    },
    {
        homeTeam : "zamalek",
        awayTeam : "ahly",
        matchVenue : "cairo stad",
        date : "1999-10-12",
        time : "6:30AM",
        mainRef: "ahmed yehia",
        linesman : {
                first: "ahmed",
                second: "yehia"
            }
    },
    {
        homeTeam : "zamalek",
        awayTeam : "ahly",
        matchVenue : "cairo stad",
        date : "1999-10-12",
        time : "6:30AM",
        mainRef: "ahmed yehia",
        linesman : {
                first: "ahmed",
                second: "yehia"
            }
    }
]
export default function Matches () {
    const [myMatches,setMyMatches] = useState(dumMatches);
    // const [loginType,setLoginType] = useState("customer");
    const [loginType,setLoginType] = useState("manager");
    return (
        <>
            <Navbar/>
            <div id="matches-whole" className="matches-container container">
                <h2 className="section-header pt-5">Matches:</h2>
                <div className="row matches-matches pt-2">
                    {
                        myMatches.map((match,index)=>(
                            // <div class="card-group">
                                <div class="card text-center mb-3">
                                    {
                                        loginType == "manager" ?
                                        <div class="card-header">
                                            {/* <ul class="nav nav-pills card-header-pills">
                                                <li class="nav-item"> */}
                                                    <Link to="/sign-up" className="row justify-content-center"><button type="button" className="btn btn-outline-success btn-lg">Edit Match</button></Link>
                                                {/* </li>
                                            </ul> */}
                                        </div>
                                        :
                                        ""
                                    } 
                                    <div class="card-body container">
                                        <div className="row match-date-time justify-content-center">
                                            <div className="" >
                                                <h1 >
                                                {match.time}, {match.date} 
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
                                                <h3><strong>{match.matchVenue}</strong></h3>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row match-main-ref justify-content-center">
                                            <div className="col-2">
                                                <h3>Main refree: </h3>
                                            </div>
                                            <div className="col-8">
                                                <h3>{match.mainRef}</h3>
                                            </div>
                                        </div>
                                        <div className="row match-sub-refs justify-content-center">
                                            <div className="col-2">
                                                <h3>Lines man:</h3>
                                            </div>
                                            <div className="col-4">
                                                <h3 >{match.linesman.first}</h3>
                                            </div>
                                            <div className="col-4">
                                                <h3 >{match.linesman.second}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            // </div>
                        ))
                    }
                </div>
                <div className="row matches-chosen-match-info">
                    grwhh
                </div>
                <div className="row matches-stad-area">
                    hdr
                </div>
                <div className="row matches-my-reservations">
                    hdr
                </div>
            </div>
            <Footer/>
        </>
    )
}