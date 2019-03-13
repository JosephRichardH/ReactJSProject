import React, { Component } from 'react';
import './assets/css/main-gallery.css';
// import './assets/js/bootstrap.min.js';
import './assets/css/bootstrap.min.css';
import plain from "./assets/logo/logo-alterra-academy-plain@2x.png";


class Contact extends Component {
  render() {
    return (
<body>
    <div class="row">
        <div class="col-sm-6 styletambahan1">
            <img src="assets/img/side-view.jpg" class = "sebelahkiri"/>
            <div class="overlay">
                <img src={plain} class="alterrakecil"/>
        </div>
        </div>
        <div class="col-sm-6 backgroundcontact">
            <h1>Contact Us</h1>
            <span class="contact">Send us a message and we will get back to you as soon as possible</span>
            <form action="">
                
                    <label for="name" class ="inputnama">Name<span class="tandarequired">*</span></label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <input type="name" class = "inputformnama"/>
                        </div>          
                    </div>
                    <label for= "email" class="inputnama">Email<span class="tandarequired">*</span></label>
                    <div class="input-group">
                        <div class="input-group-prepend">     
                    <input type="email" class="inputformemail"/>   
                    </div>
                </div> 
                    
                    <label for="pnumber" class="inputnama">Phone Number<span class="tandarequired">*</span></label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                                <input type="pnumber" class="inputformpnumber"/>   
                        </div>          
                    </div>
                    <div class="form-group">
                        <label for="Nasional" class="inputnama">State</label>
                        <select id="nationality" class="form-control" class="inputformcountry">
                            <option value="1">Indonesia</option>
                            <option value="2">Malaysia</option>
                            <option value="3">Singapura</option>
                            <option value="4">Thailand</option>
                            <option value="5">Laos</option>
                            <option value="6">Vietnam</option>
                            <option value="7">Filipina</option>
                            <option value="8">Kamboja</option>
                            <option value="9">Myanmar</option>
                            <option value="10">Asia</option>
                            <option value="11">Eropa</option>
                            <option value="12">Amerika</option>
                            <option value="13">Afrika</option>
                        </select>
                    </div>
                <label class="inputnama">Message:</label><br/>
                <textarea class="inputformmessage"> </textarea><br/>
                <button type="submit-reset" class="btn btn-primary tombolsubmit">Submit</button>    
            </form>
        </div>
    </div>
</body>
    );
  }
}
export default Contact;