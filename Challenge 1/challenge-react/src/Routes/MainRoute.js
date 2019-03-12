import React from 'react';
import { Route, Switch } from "react-router-dom"

import Home from "../Gallery"; 
import SignIn from "../SignIn"; 
// import NotMatch from "../Pages/NotMatch"; 
import News from "../ListNews"; 
import Profile from "../Home"; 

const MainRoute = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/news" component={News} />
        </Switch>
    )
};

export default MainRoute;

{/* <Route component={NotMatch} /> */}
