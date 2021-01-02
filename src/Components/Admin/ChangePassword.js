import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './Profile.css';

class ChangePassword extends Component {
   // static contextType=ConfigContext;
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
   
    componentDidMount(){
        window.scrollTo(0, 0);
        axios.get(this.context.baseURL+"/me", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
        })
            .then(res => {
                if(res.status===200)
                {
                    this.setState(prevState => (
                        {
                        user: {                   
                            ...prevState.user,    
                            image: res.data.images    
                        }
                    }))
                }
            })
    }

    changePasswordHandle(currentPassword,newPassword,repeatPassword){
        if(newPassword===repeatPassword)
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
    }
    }

    render()
    {
        {document.title ="Edit profile - Manager"}

    return(
        <div className="bg-dark-clr">
            
        
        <div id="change-password" className="container editProfile">
            <div className="row">
                <SideBar/>
                <div className="col-lg-9 password-section">
                    <div className="password-div">
                        { this.state.successMessage && <div class="alert alert-success">
                        <p>Password changed</p>
                        </div> }
                        { this.state.failMessage && <div class="alert alert-danger">
                        <p>Error</p>
                        </div> }
                        <h1 className="page-header">Change your password</h1>
                        <div className="password-info">  
                        <   div className="current-password">
                                <label className="labels">Current password</label>
                                <input type="password" ref="current" className="current-password-text-box"></input>
                            </div>   
                            <div className="new-password">
                                <label className="labels">New password</label>
                                <input type="password" ref="new" className="new-password-text-box"></input>
                            </div>
                            <div className="repeat-password">
                                <label className="labels">Repeat new Password</label>
                                <input type="password" ref="repeat" className="repeat-password-text-box"></input>
                            </div>
                            <div className="buttons">
                                <button onClick={()=>{this.changePasswordHandle(this.refs.current.value,this.refs.new.value,this.refs.repeat.value)}}className="btn-sm btn btn-success set-new-password-button">SET NEW PASSWORD</button>
                                <Link to="/account-overview" className="cancel-button ">CANCEL</Link>
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

export default ChangePassword;