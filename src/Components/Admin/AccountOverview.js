import React ,{ Component }from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Profile.css';
import SideBar from './SideBar';

class AccountOverview extends Component {
    constructor() {
        super()
        this.state = {
			user:{
				name:"",
				dateOfBirth:"",
				email:"",
				gender:"",
			}, 
        }
    }
	render()
    {
        {document.title ="Profile - Manager"}

    return(
		<div className="bg-dark-clr">
            
        
		<div className="container container-custom ">
        <div className="row">
                <SideBar/>
        <div id="account-overview" className="col-lg-9 content-accountoverview">

			    	<h1 className="page-header">Account overview</h1>
			    	<div className="profile ">
			    		<br></br>
						<div className="container">

						<div className="username">
                                <label className="labels">User Name</label>
                                <div className="username">
								<p className="text-box" >{this.state.user.username}</p>
                                </div>
                            </div>
                            <div className="firstname">
                                <label className="labels">First Name</label>
                                <div className="firstname">
								<p className="text-box" >{this.state.user.firstname}</p>
                                </div>
                            </div>
                            <div className="lastname">
                                <label className="labels">Last Name</label>
                                <div className="lastname">
								<p className="text-box" >{this.state.user.lastname}</p>
                                </div>
                            </div>
                            <div className="city">
                                <label className="labels">City</label>
                                <div className="city">
								<p className="text-box" >{this.state.user.city}</p>
                                </div>
                            </div>
                            <div className="email-info">
                                <label className="labels">Email</label>
                                <div className="email-normal">
								<p className="text-box" >{this.state.user.email}</p>
                                </div>
                            </div>
                            <div className="gender">
                                <label className="labels">Gender</label>
                                <div className="gender">
                                   <p className="text-box" >{this.state.user.gender}</p>
                                </div>
                            </div>
                           
						</div>
			    	</div>
                    <Link to="/manager-edit-profile"><button className="btn btn-outline-secondary account-overview-buttons">EDIT PROFILE</button></Link>
				</div>
    </div>
    </div>
    </div>
    )
}}
export default AccountOverview;