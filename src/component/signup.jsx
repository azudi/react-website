import React, { Component } from 'react';
import Footer from './footer';
import OtherGallery from "./otherGallery";
import {Link} from  'react-router-dom'
class Signup extends Component {
    state = {  
        name:"SIGN-UP",
        check:true,
        eye:"fa fa-eye-slash",
        msgpass:"",
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
    formcheck=(e)=>{
        let msgpass=document.querySelectorAll(".passer")
      
        if(msgpass[0].value!==msgpass.value[1]){
            this.setState({msgpass:"password and comfirm password not correct"})
        e.preventDefault();}
                
        else{e.allowDefault()            }
    }
    render() { 
        return ( 
            <div className="cancle-out">
                <OtherGallery headername={this.state.name} />
                 <div className="flex login-form">
                     <form onSubmit={this.formcheck} className="text-center">
                         <div className="warning">
                             <span>{this.state.msgpass}</span>
                         </div>
                         <div className="username">
                             <i className="fa fa-user"></i>
                             <input  type="text" placeholder="Username" required></input>
                         </div>
                         
                         <div className="username">
                             <i className="fa fa-envelope"></i>
                             <input type="email" placeholder="Email" required></input>
                                                      </div>
                         <div className="password">
                             <i className="fa fa-lock"></i>
                             <input className="passer"  type="password" placeholder="Password" required></input>
                             <i onClick={this.eyechange} className={this.state.eye}></i>
                         </div>
                         <div className="username">
                             <i className="fa fa-lock"></i>
                             <input className="passer"  type="password" placeholder="Comfirm password" required></input>
                             
                         </div>
                                                  
                         <button type="submit" className="submit-but">SUBMIT</button>

                       <div className="sign-up">
                           <span><Link to="/login">LOGIN</Link></span><span className="rigth"><Link to="/">forgot password</Link></span>
                       </div>
                     </form>
                 </div>
                <Footer/>
            </div>
         );
    }
}
 
export default Signup;