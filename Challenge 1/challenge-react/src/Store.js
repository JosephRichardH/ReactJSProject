import React, { Component } from 'react';
import axios from "axios";
import createStore from "unistore";
import {withRouter} from "react-router-dom";
import { Provider, connect } from 'unistore/preact'
const apiKey="7f484ed4b9c942d9b917851f4bea7545";
const baseUrl = "https://newsapi.org/v2";
const urlHeadLine = baseUrl + "/top-headlines?country=id&apikey=" + apiKey;
const urlHeadLine1 = baseUrl + "/everything?q=Trade War&apikey=" + apiKey;

const DataPribadi = {
    api_key: "",
    email: "",
    password: "",
    full_name:"",
    username:"",
    listNews:[],
    listNews1:[],
    islogin : false    
};
//Initial State
export const store = createStore(DataPribadi)
//Initial Action
export const actions    = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value};
    },
    postLogOut: state => {
        return {islogin : false};
    },
    postLogIn: async state => {
        const data = { username : state.username , password : state.password};
        await axios
            .post("https://joseph.free.beeceptor.com/auth", data)
            .then(response => {
                console.log ("postLogin resp", response.data);
                // if (response.data.hasOwnProperty("api_key")) {
                    store.setState({
                        islogin: true,
                        api_key:response.data.api_key,
                        full_name: response.data.full_name,
                        email: response.data.email
                    })
                console.log(store)
                // }
            })
            .catch (error => {console.log(error);})
    },

    getUrlNews: async state =>{
    await axios
        .get(urlHeadLine)
        .then(function(response){
            store.setState({listNews : response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        })
    await axios        
        .get(urlHeadLine1)
        .then(function(response){
            store.setState({listNews1 : response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    },

    searchNews: async (state,keyword) => {
        if (keyword.length > 3){
            try{
                const response = await axios.get(
                    baseUrl + "/everything?q="+keyword+"&apikey=" + apiKey
                );
                console.log("response", response);
                store.setState({listNews1:response.data.articles})}
                
                catch(error){
                    console.log(error);
            }
        };
    } 

})

