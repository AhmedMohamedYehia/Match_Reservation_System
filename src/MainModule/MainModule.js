import React, { Component } from "react";
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';

// import {ContextProvider} from '../Context/Context';


// import Navbar from "../Components/Navbar/Navbar"
// import Footer from "../Components/Footer/Footer"
// import Login from "../Components/Login/Login"
// import Signup from "../Components/Signup/Signup"
// import Main from "../Components/Main/Main"

import LoadingScreen from "../Components/LoadingScreen/LoadingScreen"
import StartupPage from "../StartupPage/StartupPage"
import ChangePassword from "../Components/Admin/ChangePassword"
import CreateNewMatch from "../Components/Admin/CreateNewMatch"
import AddNewStadium from "../Components/Admin/AddNewStadium"
import AccountOverview from "../Components/Admin/AccountOverview"
import EditProfile from "../Components/Admin/EditProfile"

import ApproveUser from "../Components/Admin/ApproveUser"
import DeleteUser from "../Components/Admin/DeleteUser"

import Signup from "../Components/Signup/Signup"
import Login from "../Components/Login/Login"
import Home from "../Components/Home/Home"
import EditMyProfile from "../Components/EditMyProfile/EditMyProfile"
import Matches from "../Components/Matches/Matches"
import MyReservations from "../Components/MyReservations/MyReservations"
import EditMatch from "../Components/Matches/EditMatch"
import AddMatch from "../Components/Matches/AddMatch"
import AddStadium from "../Components/Matches/AddStadium"
import AdminLogin from "../Components/Login/AdminLogin"
import ManagerSignup from "../Components/Signup/ManagerSignup"
class MainModule extends Component {
    render() {
        // return (

            // <ContextProvider.Consumer>{(profile) => {
            //   const {status}= profile
    return (
        <div>
            
            {/* // status==="" ?<LoadingScreen/>
            // : */}
            <div style={{height:"100%"}}>
                {/* <Navbar/>    */}
                <Switch>     
                    {/* <LoadingScreen/> */}
                    {/* <Signup/> */}
                    {/* <Login/> */}
                    {/* <Home/> */}
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



                    <Route path="/manager-change-password" component={ChangePassword}exact/>
                    <Route path="/manager-create-match" component={CreateNewMatch}exact/>
                    <Route path="/manager-add-new-stadium" component={AddNewStadium}exact/>
                    <Route path="/manager" component={AccountOverview}exact/>
                    <Route path="/manager-edit-profile" component={EditProfile}exact/>

                    <Route path="/admin" component={ApproveUser}exact/>
                    <Route path="/admin-delete-user" component={DeleteUser}exact/>

                    {/* <LoggedInProtectedRoute path="/profile" exact component={UserProfile}/>*/}
            
                </Switch>
           
                {/* <Footer/> */}
            </div>

        </div>
    );
}
// }</ContextProvider.Consumer>
// )}    
}


export default MainModule;