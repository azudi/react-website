import React, { Component } from 'react';

  class Profile extends React.Component{
   state={
     profileName:"Jerry Azubuike",
      };
  
            
   render(){
       
       return(
           <div className="col-md-4 col-lg-3 profile-div">
               <div className="pro-icon-div">
                   <i><i className="fa fa-heart"></i></i>
                   <i><i className="fa fa-bookmark"></i></i>
                   <i><i className="fa fa-pencil"></i></i>
                   <i> <i className="fa fa-share-alt"></i></i>
                   <i><i className="fa fa-star"></i></i>
                   <i> <i className="fa fa-download"></i></i>
               </div>
               <div className="pro-img-div">
                     <img id="profilePics"></img>
                     <h6>{this.state.profileName}</h6>
                     <span className="profile-name">profile name</span>
               </div>
               <div className="pro-button-div flex">
                     <button className="flex col-5"><span className="col-8 left">follow</span> 
                     <i className="col-2 loco">+</i></button>
                     <button className="flex col-5"><span className="col-8 left">message</span> 
                     <i className="col-2 fa fa-comment-o loco"></i></button>
               </div>

           </div> 
       );
   }

  };

  export default Profile;