import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';

class CreateNewMatch extends Component {
    constructor() {
        super()
        this.state = {
          
          user:{
              image:"",
          },        
          successMessage: false,
          failMessagee: false
        }
    }
    
    changePasswordHandle(currentPassword,newPassword,repeatPassword){
        /*if(newPassword===repeatPassword)
        {
            axios.put(this.context.baseURL+'/me/changePassword',{
                "newPassword": newPassword,
                "passwordConfirmation": currentPassword
            },
            {
                headers: {
                    'authorization': "Bearer "+localStorage.getItem("token"),
            }
        }
        )   
        .then(res => {
            if(res.status === 204 || res.status === 200)
            {
                this.setState({
                    successMessage: true,
                    failMessage: false
                })
            }
        }) 
        .catch(res => {this.setState({
            failMessage: true,
            successMessage: false
        })})
        }
    else{
        this.setState({
            successMessage: false,
            failMessage: true
        })
    }*/
    }
    cancelHandle(){
        window.location.reload();
    }
    render()
    {
        {document.title ="Manager"}

    return(
        <div className="bg-dark-clr">
        <div className="container container-custom ">
            <div className="row">
                <SideBar/>
                <div className="col-lg-9 container-section">
                    <div className="container-div">
                        { this.state.successMessage && <div class="alert alert-success">
                        <p>Match Created</p>
                        </div> }
                        { this.state.failMessage && <div class="alert alert-danger">
                        <p>Error</p>
                        </div> }
                        <h1 className="page-header">Create New Match</h1>
                        <div className="container-info">  
                            <div className="home-team">
                                <label className="labels">Home Team</label>
                                <input type="text" ref="current" className="custom-box"></input>
                            </div>   
                            <div className="away-team">
                                <label className="labels">Away Team</label>
                                <input type="text" ref="new" className="custom-box"></input>
                            </div>
                            <div className="stadium">
                                <label className="labels">Stadium</label>
                                <input type="text" ref="repeat" className="custom-box"></input>
                            </div>
                            <div className="date-of-match">
                                <label className="labels">Date Of Match</label>
                                <div className="date-of-match-normal">
                                    <div className="date-of-match-inputs">
                                        <select  ref="month" required=""  className="combo-box month">
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="4">04</option>
                                            <option value="5">05</option>
                                            <option value="6">06</option>
                                            <option value="7">07</option>
                                            <option value="8">08</option>
                                            <option value="9">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select  ref="day" required="" className="combo-box day">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">31</option>
                                            <option value="31">31</option>
                                        </select>
                                        <select  ref="year" required="" className="combo-box year">
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="main-referee">
                                <label className="labels">Main Referee</label>
                                <input type="text" ref="repeat" className="custom-box"></input>
                            </div>
                            <div className="first-line-man">
                                <label className="labels">First Line Man</label>
                                <input type="text" ref="repeat" className="custom-box"></input>
                            </div>
                            <div className="second-line-man">
                                <label className="labels">Second Line Man</label>
                                <input type="text" ref="repeat" className="custom-box"></input>
                            </div>
                            <div className="buttons">
                                <button onClick={()=>{this.createMatchHandle(this.refs.current.value,this.refs.new.value,this.refs.repeat.value)}}className="btn-sm btn btn-success set-button">CREATE MATCH</button>
                                <button onClick={()=>{this.cancelHandle()}}className="btn-sm btn btn-danger set-button">CANCEL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    }
}

export default CreateNewMatch;