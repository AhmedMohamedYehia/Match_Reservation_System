import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSideBar from './AdminSideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';

class DeleteUser extends Component {
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
                <AdminSideBar/>
                <div className="col-lg-9 container-section">
                    <div className="container-div">
                        { this.state.successMessage && <div class="alert alert-success">
                        <p>User Deleted</p>
                        </div> }
                        { this.state.failMessage && <div class="alert alert-danger">
                        <p>Error</p>
                        </div> }
                        <h1 className="page-header">Delete User</h1>
                        <div className="container-info">  
                            <div className="username">
                                <label className="labels">User Name</label>
                                <input type="text" ref="current" className="custom-box"></input>
                            </div>   
                           
                            
                            <div className="buttons">
                                <button onClick={()=>{this.deleteUserHandle(this.refs.current.value,this.refs.new.value,this.refs.repeat.value)}}className="btn-sm btn btn-success set-button">DELETE USER</button>
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

export default DeleteUser;