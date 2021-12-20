
  import React, { Component } from 'react';

  class Login extends React.Component{
   state={
        disable:true
                    };
  
            onChange=(e)=>{
            
             let len=e.target.value.length >= 8 ? false:true
               this.setState({disable:len})
             
            }
   render(){
       
       return(
           <div className="col-md-4 col-lg-3 profile-page">
               <div className="login-form-div">
               <h5>Login into your account</h5>
               <span>dont have account<a href=""> Create here </a></span>
               </div>
               <form className="flex login-form">
                   <div className="flex align-items col-md-11 col-lg-10">
                       <input required type="text" id="email" className="col-10" placeholder="youremail@gmail.com"></input>
                   <span className="fa fa-envelope-o col-2 loco"></span>
                   </div>
                   <div className="flex align-items col-md-11 col-lg-10"> 
                   <input id="password" type="password" onChange={this.onChange} className="col-10" placeholder="password"></input>
                   <span className="fa fa-lock col-2 loco"></span>
                   </div>
                    <button className="col-9" type="submit" disabled={this.state.disable}>login</button>
               </form>
           </div> 
       );
   }

  };

  export default Login