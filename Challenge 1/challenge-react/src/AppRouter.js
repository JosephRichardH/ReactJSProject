import React, { Component } from 'react';
import MainRoute from "./Routes/MainRoute"
import { withRouter } from "react-router-dom";
import Navigation from "./Components/Navigation"

class AppAjax extends Component {
    postSignOut = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/");
    };
    render () {
        return (
            <div className = "App">
            <Navigation postsignOut={this.postSignOut}/>
            <MainRoute />
            </div>
        );
    }
}

export default withRouter (AppAjax);
