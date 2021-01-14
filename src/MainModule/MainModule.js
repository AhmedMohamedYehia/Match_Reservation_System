import React, { Component } from "react";
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';

import StartupPage from "../StartupPage/StartupPage"
import Signup from "../Components/Signup/Signup"
import Login from "../Components/Login/Login"
import AdminLogin from "../Components/Login/AdminLogin"
import Home from "../Components/Home/Home"
import EditMyProfile from "../Components/EditMyProfile/EditMyProfile"
import Matches from "../Components/Matches/Matches"
import MyReservations from "../Components/MyReservations/MyReservations"
import EditMatch from "../Components/Matches/EditMatch"
import AddMatch from "../Components/Matches/AddMatch"
import AddStadium from "../Components/Matches/AddStadium"
import ManagerSignup from "../Components/Signup/ManagerSignup"
import ApproveUser from "../Components/Admin/ApproveUser"
import DeleteUser from "../Components/Admin/DeleteUser"
class MainModule extends Component {
    render() {
        return (
            <div>
                <div style={{height:"100%"}}>
                    <Switch>     
                        <Route path="/" component={StartupPage} exact/>
                        <Route path="/sign-up" component={Signup}exact/>
                        <Route path="/manager-sign-up" component={ManagerSignup}exact/>
                        <Route path="/admin-log-in" component={AdminLogin}exact/>
                        <Route path="/log-in" component={Login}exact/>
                        <Route path="/home" component={Home}exact/>
                        <Route path="/edit-my-profile" component={EditMyProfile}/>
                        <Route path="/matches" component={Matches}/>
                        <Route path="/my-reservations" component={MyReservations}/>
                        <Route path="/edit-match" component={EditMatch}/>
                        <Route path="/add-match" component={AddMatch}/>
                        <Route path="/add-stadium" component={AddStadium}/>
                        <Route path="/admin-approve-users" component={ApproveUser}/>
                        <Route path="/admin-delete-user" component={DeleteUser}exact/>
                    </Switch>
                </div>

            </div>
        );
    }
}


export default MainModule;