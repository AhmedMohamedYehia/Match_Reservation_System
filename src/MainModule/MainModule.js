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
                    <Route path="/home" component={StartupPage}/>
                    {/* <Signup/> */}
                    {/* <Login/> */}
                    {/* <Home/> */}

                    <Route path="/manager-change-password" component={ChangePassword}/>
                    <Route path="/manager-create-match" component={CreateNewMatch}/>
                    <Route path="/manager-add-new-stadium" component={AddNewStadium}/>
                    <Route path="/manager" component={AccountOverview}/>
                    <Route path="/manager-edit-profile" component={EditProfile}/>

                    <Route path="/admin" component={ApproveUser}/>
                    <Route path="/admin-delete-user" component={DeleteUser}/>

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