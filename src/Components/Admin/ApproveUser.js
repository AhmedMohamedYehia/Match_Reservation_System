import React, { Component } from "react";
// import image from "./stad.jpg"
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "../Matches/Matches.css"
import axios from "axios";

export default function ApproveUser () {
    const [users,setUsers] = useState([]);
    axios.get("https://efa-website-cufe.herokuapp.com/users/notApproved"
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
            setUsers(res.data.users)
        }
        else
        {
        }   
    }).catch(err=>{
        if (err.message=="Request failed with status code 400") {
        }
    })

    function approveUser(userName){
        axios.post("https://efa-website-cufe.herokuapp.com/users/"+userName,{}
        ,{
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        }
        )   
        .then(res => {
            if(res.status===200)
            {
                alert("This user has been approved.")
                window.location.replace("/admin-approve-users");
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
                <h2 className="section-header pt-5" style={{textAlign:"center"}}>Not Approved Users:</h2>
                <div className="row matches-matches pt-2">
                    {
                        users.length !== 0
                        ?
                        
                            users.map((user,index)=>(
                                // <div class="card-group">
                                    <div class="card text-center mb-3">
                                        <div class="card-body container">
                                            <div className="row match-dateOfMatch-time justify-content-center">
                                                <div className="" >
                                                    <h1 >
                                                        Name: {user.firstName} {user.lastName}
                                                    </h1>
                                                    <h1 >
                                                        Username: {user.userName}
                                                    </h1>
                                                </div>
                                                <div className="">
                                                     <h1 style={{color:"Black"}}>Email: {user.email}</h1>
                                                </div>
                                                <div className="">
                                                    <h1 style={{color:"black"}}>Gender: {user.gender}</h1>
                                                </div>
                                                <div className="" >
                                                    <h1 >
                                                        City: {user.city} {user.city}
                                                    </h1>
                                                    <h1 >
                                                        Date of birth: {user.dateOfBirth}
                                                    </h1>
                                                    <h1 >
                                                        Role: {user.role}
                                                    </h1>
                                                </div>
                                            </div>
                                            <hr></hr>
                                        </div>
                                        <div class="card-footer">
                                            <Link className="row justify-content-center"><button data-bs-toggle="modal" data-bs-target="#exampleModal"  type="button" className="btn btn-outline-success btn-lg">Approve User</button></Link>
                                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel">Are you sure you want to approve this user?</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" onClick={()=>{approveUser(user.userName)}} class="btn btn-outline-success">Yes, approve.</button>
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
                                <h1 style={{height:"100vh"}}>You don't have any not-approved users! </h1>
                            </div>
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}