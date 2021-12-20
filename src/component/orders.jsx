import React, { Component } from 'react';
import Mainfood from "./order";
import {Link} from "react-router-dom";
import ChefMaster from "./chefMaster"

class Food extends Component {
    state = {  
       bol:true,
       subol:true,
       shuffle:"shuffle",
       drop:"drop"
    }
     onDisplay=()=> { 
           
        if(this.state.bol===false){
          this.setState({shuffle:" shuffle not-shuffle"})
          this.setState({bol:!this.state.bol})
        }
        else{
            this.setState({shuffle:"shuffle shuff"})
            this.setState({bol:!this.state.bol})
          }
    }
    offdisplay=()=>{
      
        if(this.state.subol===true){
       this.setState({drop:"drop height"})
         this.setState({subol:!this.state.subol})
        }
        else{
            this.setState({drop:"drop no-height"})
         this.setState({subol:!this.state.subol})
        }
    }
    componentDidMount=()=>{
          document.querySelector('.loader').style.display="none";
  }
    render() { 
        return ( 
            <div>
              <div className="loader">
                          <span className="loader-span"></span>
                </div>
                <Mainfood nots={this.onDisplay}>
                    <div className={this.state.shuffle}>
                       <h2>Check menus</h2>
                          <span><i className="material-icons icon">home</i> <Link to="/blog">Blog</Link></span>
                             <span onClick={this.offdisplay} className="drop-food"><i className="material-icons icon">local_dining</i> Ready food
                                <i className="fa fa-chevron-down right"></i></span>
                                  <span className={this.state.drop}>
                                    <span>cost</span>
                                    <span>plane</span>
                                    <span>weather</span>
                                    <span>rust</span>
                                    <span>nost</span>
                                    <span>usher</span>
                                    <span>cashier</span>
                            </span>
                        <span><i className="material-icons icon">map</i><Link to="/location"> location</Link></span>
                     <span><i className="material-icons icon">drive_file_rename_outline</i> <Link to="/signup">sign-in</Link></span>
                   <span><i className="material-icons icon">manage_accounts</i><Link to="/login"> log-in</Link></span>
                <span><i className="fa fa-leanpub icon"></i><Link to="/privacy"> private policy</Link></span>
                <p className="nav-par">
                porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora
                porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi temp privacy
               </p>
               <i className="fa fa-twitter social"></i>
               <i className="fa fa-facebook social"></i>
               <i className="fa fa-instagram social"></i>
               <i className="fa fa-linkedin social"></i>

                   </div>
                     </Mainfood>
                       </div>
         );
    }
}
 
export default Food;
<div>

</div>