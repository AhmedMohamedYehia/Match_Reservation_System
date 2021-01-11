import React, { Component } from "react";
const style ={
    textAlign: "center",
    color: "#0b7840"
}
export default class AvailableList extends React.Component {
    render() {
        const seatCount = this.props.available.length;
        return(
        <div className="left">
            <hr></hr>
            <h4 style={style}>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
            {/* <ul>
            {this.props.available.map( res => <li key={res} >{res}</li> )}
            </ul> */}
        </div>
        )
    }
}
