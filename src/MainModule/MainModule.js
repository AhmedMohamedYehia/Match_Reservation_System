import React, { Component } from "react";
import {BrowserRouter as Router,Switch} from 'react-router-dom';

// import {ContextProvider} from '../Context/Context';


// import Navbar from "../Components/Navbar/Navbar"
// import Footer from "../Components/Footer/Footer"
// import Login from "../Components/Login/Login"
// import Signup from "../Components/Signup/Signup"
// import Main from "../Components/Main/Main"

import LoadingScreen from "../Components/LoadingScreen/LoadingScreen"
import StartupPage from "../StartupPage/StartupPage"
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
            {/* <div style={{height:"100%"}}> */}
                {/* <Navbar/>    */}
                <Switch>     
                    {/* <LoadingScreen/> */}
                    <StartupPage/>
                    {/* <Signup/> */}
                    {/* <Login/> */}
                    {/* <Home/> */}


                    {/* <LoggedInProtectedRoute path="/profile" exact component={UserProfile}/>*/}
            
                </Switch>
           
                {/* <Footer/> */}
        </div>
    );
}
// }</ContextProvider.Consumer>
// )}    
}


export default MainModule;