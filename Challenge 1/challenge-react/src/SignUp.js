import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom"

class SignIn extends Component {
    state = { username : "", password : ""};
    changeInput = inputan => {
        this.setState ({ [inputan.target.name]: inputan.target.value });
    };
    postLogin = () => {
        const { username, password } = this.state;
        const data = {
            username: username,
            password: password
        };
        const self = this;
        axios
        .post ("https://atareact.free.beeceptor.com/auth", data)
        .then (function(response){
            console.log(response.data)
            if (response.data.hasOwnProperty("api_key")) {
                localStorage.setItem("api_key", response.data.api_key);
                localStorage.setItem("is_login", true);
                localStorage.setItem("full_name", response.data.full_name)
                localStorage.setItem("email", response.data.email)
                self.props.history.push("/profile");
            }
        })
        .catch(function(error){
            console.log(error);
        });
    };
    render () {
        console.log ("state", this.state);
        return(
            <section className = "content signin">
            <form onSubmit={inputan => inputan.preventDefault()}>
            <h4>SignUp</h4>
            <div>
                <input
                type = "text"
                name = "username"
                placeholder = "Username"
                onChange = {inputnama => this.changeInput(inputnama)}/>
            </div>
            <div>
                <input
                type = "password"
                name = "password"
                placeholder = "Password"
                onChange = {inputpassword => this.changeInput(inputpassword)}/>
            </div>
            <button onClick={() => this.postLogin()}>SignIn</button>
            <button type="reset">Reset</button>
            </form>
            </section>
        );
    }
}


export default withRouter(SignIn);