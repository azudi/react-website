import React, { Component } from 'react';
import OtherGallery from "./otherGallery";
import Footer from "./footer";
import {Link} from "react-router-dom";

class Location extends Component {
    state = { 
       name:"LOCATION",
       place:""
     }
     locate=()=>{
       this.setState({place: <div class="location-iframe"><span onClick={this.noLocate} className="locate-cancle">X</span>
       <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.3696762223096!2d7.427141009086939!3d10.521183767744938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355aa93d2143%3A0xc3926e6669ae87db!2sFabulous!5e0!3m2!1sen!2sng!4v1632615637150!5m2!1sen!2sng" allowfullScreen="" loading="lazy"></iframe>
       <h6>Headquater at USA Plaza 54 natry city, washington</h6>
       <div>
         <h6>Other Company</h6>
           <a href="">Abu dalbi estate 54 natry city, washington</a>   
           <a href="">Wuse 2 alaba lagos, kaduna</a>   
           <a href="">Kample street no 8 badagry, south-africa</a>   
           <a href="">Headquater at USA Plaza 54 natry city, washington</a>   
           <a href="">Headquater at USA Plaza 54 natry city, washington</a>   
       </div>

       </div>})
     }
     noLocate=()=>{
       this.setState({place:''})
     }
    render() { 
        return ( 
            <div>
                <OtherGallery headername={this.state.name} />
                  <div className="flex align-item location-div">
                      <div className="col-md-8 col-lg-7 flex location">
                        <span>Our Store On Mangal Plaza</span>
                        <h1><span>our store</span> opened since 2002</h1>
                        <p className="col-md-6">
                        Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-bu<br></br><br></br>
            Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikeso avoids pleasure itself, because it
            is pleasure
                        </p>

                        <p className="col-md-6">
                        Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the <br></br><br></br>
            Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human <br></br><br></br>
            <Link className="callto" to="/location"><i className="fa fa-phone"></i><i> +234 808 987 3611</i></Link>
                        </p>
                      </div>
                              <div className="col-md-4 col-lg-3 locationimg">

                                  <span className="local-icon">
                                      <Link onClick={this.locate}>location</Link><br></br><i className="fa fa-map-marker"></i>
                                  </span>
                                  <img alt="" src="pics/cafe.jpeg" className="respond"></img>
                              </div>
                        {this.state.place}     
                  </div>
                <Footer/>
            </div>
         );
  }
}
 
export default Location;