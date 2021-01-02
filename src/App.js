import React from "react";
import {BrowserRouter as Router,Switch} from 'react-router-dom';
// import ContextProvider from "./Context/Context"
import MainModule from "./MainModule/MainModule"

function App() {
  return (
    <Router>
    {/* <ContextProvider> */}
      <MainModule/>
    {/* </ContextProvider> */}
  </Router> 
  );
}

export default App;
