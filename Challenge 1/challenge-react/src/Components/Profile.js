import React from 'react';
import { Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../Store";

const Profile = props => {
    if (!props.islogin){
        return <Redirect to = {{pathname:'/signin'}} />;
    } else {
        return (
            <section className = "content">
            <h1 style = {{ textalign : "center" }}> Profile</h1>
            <p>
                <label>Email:</label> {props.email}
            </p>
            <p>
                <label>Full Name:</label> {props.full_name}
            </p>
            </section>
        );
    };
}

export default connect("islogin,email,full_name",actions)(withRouter(Profile));