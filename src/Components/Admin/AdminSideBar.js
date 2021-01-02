import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class AdminSideBar extends Component {
 
    render()
    {
        return(
            <div id="profile-sidebar" className="col-lg-3 sidebar">
                <head>	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                </head>
                <div>
                        <img  src="https://icon-library.com/images/google-user-icon/google-user-icon-12.jpg" className="rounded-circle" alt="Profile" ></img>
                        <ul className="sidelist">
                            <div className=""><Link to="/admin" ><li className="list"><i className="fa fa-plus icon"></i>Approve User</li></Link></div>
                            <div className=""><Link to="/admin-delete-user" ><li className="list"><i className="fa fa-minus icon"></i>Delete User</li></Link></div>
                        </ul>
                    </div>
            </div>        
        )
    }
}
export default AdminSideBar;