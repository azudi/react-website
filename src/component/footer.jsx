import React, { Component } from 'react';
import {Link} from "react-router-dom"; 
class Footer extends Component {
    constructor(){
        super();
        this.clicks=this.clicks.bind(this);
        this.clicker=this.clicker.bind(this);
    }
    state = {  }
    componentDidMount=()=>{
            document.querySelector('.loader').style.display="none"
    }
    clicker=()=>{
        console.log('please make sure that you subscribe to newsteller')
    }
    clicks=()=>{
        this.clicker()
    }
    render() { 
        return ( 
            <div className="footer">
                <div className="loader">
                          <span className="loader-span"></span>
                </div>
                <div className="news">
                    <h2 onClick={this.clicks}>Newsteller</h2>
                    <span>signup for latest info</span>
                    <form>
                        <input placeholder="email" type="email" required></input><button>subscribe</button>
                    </form>
                </div>
               <div className="footer-last">
                   &copy;copyright since 2015, All right reserved by melody inc.
                   <div className="footer-icon">
                       <Link to="tel:08089873611"><i className="fa fa-phone"></i></Link>
                       <Link to=""><i className="fa fa-instagram"></i></Link>
                       <Link to=""><i className="fa fa-twitter"></i></Link>

                   </div>
               </div>
            </div>
         );
    }
}
 
export default Footer;