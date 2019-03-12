import React, { Component } from 'react';
import axios from "axios";
import ListNews from './Components/ListNews';

const apiKey="7f484ed4b9c942d9b917851f4bea7545";
const baseUrl = "https://newsapi.org/v2";
const urlHeadLine = baseUrl + "/top-headlines?country=id&" + "apikey=" + apiKey;
const az = null;
class CobaBaru extends Component{
    constructor (props){
        super(props);
        this.state = {
            listNews:[],
            username: "",
            isLogin: false,
        }
    }

componentDidMount = () => { console.log("apapun")
console.log(urlHeadLine)
    const self = this;
    axios
        .get(urlHeadLine)
        .then(function(response){
            self.setState({listNews : response.data.articles});
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
}


render() {
    console.log("Program berjalan")

    const {listNews, username, isLogin}= this.state;
    console.log(listNews)
    return(
        <div className="App">
            {listNews.map((item, key) => {
                const src_img = item.urlToImage === null ? az : item.urlToImage;
                const content = item.urlToImage !== null ? item.content : "";
                return <ListNews key = {key} title = {item.title} content = {content} img = {src_img} />   
            })}
        </div>
    )
}

}

export default CobaBaru;