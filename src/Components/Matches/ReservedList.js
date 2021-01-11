import React, { Component } from "react";
const style ={
    textAlign: "center",
    color: "red"
}
export default class ReservedList extends React.Component {
render() {
    return(
    <div className="right">
        <hr></hr>
        <h4 style={style}>Reserved Seats: ({this.props.reserved.length})</h4>
        {/* <ul>
        { this.props.reserved.map(res => <li key={res} >{res}</li>) }
        </ul> */}
    </div>
    )
}
}