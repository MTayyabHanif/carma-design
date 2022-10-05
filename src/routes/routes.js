import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Landing from "../Screens/LandingPage/Landing";
import Setting from "../Screens/Setting/Setting";

const RouteScreen=()=>{
    return(
        <>
        
        <Router>
        <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/setting" element={<Setting />}  />
        
    </Routes>
   
   
</Router>
</>
    )

}

export default RouteScreen