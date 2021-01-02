import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';

class AddNewStadium extends Component {
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
        {document.title ="Admin"}

    return(
        <div className="bg-dark-clr">
        <div className="container container-custom ">
            <div className="row">
                <SideBar/>
                <div className="col-lg-9 container-section">
                    <div className="container-div">
                        { this.state.successMessage && <div class="alert alert-success">
                        <p>Stadium Added</p>
                        </div> }
                        { this.state.failMessage && <div class="alert alert-danger">
                        <p>Error</p>
                        </div> }
                        <h1 className="page-header">Add New Stadium</h1>
                        <div className="container-info">  
                            <div className="stadium-name">
                                <label className="labels">Stadium Name</label>
                                <input type="text" ref="current" className="custom-box"></input>
                            </div>   
                            <div className="stadium-address">
                                <label className="labels">Stadium Address</label>
                                <input type="text" ref="new" className="custom-box"></input>
                            </div>
                            <div className="number-of-rows">
                                <label className="labels">Number Of Rows</label>
                                <input type="number" ref="repeat" className="custom-box"></input>
                            </div>
                            <div className="number-of-seatsProw">
                                <label className="labels">Number Of Seats Per Rows</label>
                                <input type="number" ref="repeat" className="custom-box"></input>
                            </div>
        
                            <div className="buttons">
                                <button onClick={()=>{this.addStadiumHandle(this.refs.current.value,this.refs.new.value,this.refs.repeat.value)}}className="btn-sm btn btn-success set-button">ADD STADIUM</button>
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

export default AddNewStadium;