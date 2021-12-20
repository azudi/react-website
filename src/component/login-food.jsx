import React, { Component } from 'react';
import Footer from './footer';
import OtherGallery from "./otherGallery";
import {Link} from  'react-router-dom'
class Loginfood extends Component {
    state = {  
        name:"LOGIN",
        check:true,
        eye:"fa fa-eye-slash"
    }
    eyechange=()=>{
           if(this.state.check===true){
               this.setState({check:!this.state.check})
               this.setState({eye:"fa fa-eye"})
               document.querySelector(".password>input").type="text"
            }
            else{
                this.setState({check:!this.state.check})
               this.setState({eye:"fa fa-eye-slash"})
               document.querySelector(".password>input").type="password"
            }
    }
    render() { 
        return ( 
            <div className="cancle-out">
                <OtherGallery headername={this.state.name} />
                 <div className="flex login-form">
                     <form className="text-center">
                         <div className="username">
                             <i className="fa fa-user"></i>
                             <input type="text" placeholder="Username" required></input>
                         </div>
                         <div className="password">
                             <i className="fa fa-lock"></i>
                             <input type="password" placeholder="password" required></input>
                             <i onClick={this.eyechange} className={this.state.eye}></i>
                         </div>
                         <div className="remember">
                             <input className="checker" type="checkbox"></input><span> Remember me</span>
                         </div>
                         <button type="submit" className="submit-but">GET STARTED</button>

                       <div className="sign-up">
                           <span><Link to="/">sign-up</Link></span><span className="rigth"><Link to="/">forgot password</Link></span>
                       </div>
                     </form>
                 </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Loginfood;