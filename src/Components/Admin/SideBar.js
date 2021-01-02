import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
class SideBar extends Component {
    
    render()
    {
        return(
            <div id="profile-sidebar" className="col-lg-3 sidebar">
                <head>	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </head>
                <div>{/*this.props.img*/}
                        <img  src="https://icon-library.com/images/google-user-icon/google-user-icon-12.jpg" className="rounded-circle" alt="Profile" ></img>
                        <ul className="sidelist">
                            <Link to="/manager"><li className="list first"><span className="fa fa-home icon"></span> Account overview </li></Link>
                            <Link to="/manager-edit-profile" ><li className="list"><i className="fa fa-pencil icon"></i>  Edit profile</li></Link>
                            <div className="change-password"><Link to="/manager-change-password" ><li className="list"><i className="fa fa-lock icon"></i>Change password</li></Link></div>
                            <div className=""><Link to="/manager-create-match" ><li className="list"><i className="fa fa-futbol-o icon"></i>Create New Match</li></Link></div>
                            <div className=""><Link to="/manager-add-new-stadium" ><li className="list"><i className="fa fa-futbol-o icon"></i>Add New Stadium</li></Link></div>
                        </ul>
                    </div>
            </div>        
        )
    }
}
export default SideBar;