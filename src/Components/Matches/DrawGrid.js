import React, { Component } from "react";
import AvailableList from "./AvailableList";
import ReservedList from "./ReservedList";
import "./DrawGrid.css"
export default class DrawGrid extends React.Component {
    constructor() {
        super();
        this.state = {
            loginType: localStorage.getItem('loginType'),
    
        };
    }
    render() {
        var currentRow = 1;
        return (
            <>
                <div id="draw-grid" className="container " >
                    {
                        this.state.loginType == "manager" || this.state.loginType == "admin"?
                            this.props.seat.map( (ticket,index) =>(
                                    
                                ticket.seatInRow==1
                                ?
                                    <>
                                        <br></br>
                                        <span className=" grid ">
                                        <span className="">
                                            <span  key={ticket.seatInRow}  className={ticket.owner == null? 'available ': ' reserved card'}>
                                            <span className="card-body">
                                                <h5 className="card-title">{index+1}</h5>
                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </span>
                                            </span>
                                        </span>
                                        </span>
                                    </>
                                :
                                    <span className=" grid">
                                    <span className="">
                                        <span  key={((ticket.row-1)*ticket.seatInRow)+ticket.seatInRow}  className={ticket.owner == null? 'available card': 'reserved card'}>
                                        <span className="card-body">
                                            <h5 className="card-title">{index+1}</h5>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </span>
                                        </span>
                                    </span>
                                    </span>
                            
                            ))

                        :
                            this.props.seat.map( (ticket,index) =>(
                                
                                ticket.seatInRow==1
                                ?
                                    <>
                                        <br></br>
                                        <span className=" grid ">
                                        <span className="">
                                            <span  key={ticket.seatInRow} onClick = {e => this.onClickSeat(ticket)} className={ticket.owner == null? 'available ': ' reserved card'}>
                                            <span className="card-body">
                                                <h5 className="card-title">{index+1}</h5>
                                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                            </span>
                                            </span>
                                        </span>
                                        </span>
                                    </>
                                :
                                    <span className=" grid">
                                    <span className="">
                                        <span  key={((ticket.row-1)*ticket.seatInRow)+ticket.seatInRow} onClick = {e => this.onClickSeat(ticket)} className={ticket.owner == null? 'available card': 'reserved card'}>
                                        <span className="card-body">
                                            <h5 className="card-title">{index+1}</h5>
                                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        </span>
                                        </span>
                                    </span>
                                    </span>
                                
                            ))
                    }        
                </div>
                <div className="pt-3">
                    <AvailableList available = { this.props.available } />
                    <ReservedList reserved = { this.props.reserved } />
                </div>
            </>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}