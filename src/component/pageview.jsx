import React, { Component } from 'react';

  class Pageview extends React.Component{
   state={
    toggs:true,
    option:"flex absolute-form",
     names:[  {
     profileName:"parcel de mark",
     commentName:"jerry azubuike",
     id:1,
      },
      {
        id:2,
        profileName:"kelvin markpat",
        commentName:"jerry azubuike",
         },
         {
            profileName:"sushi nyanji",
            commentName:"jerry azubuike",
            id:3,
             },
             {
                profileName:"benny collins",
                commentName:"jerry azubuike",
                id:4,
                 },
                 {
                    profileName:"krevoc ganniash",
                    commentName:"jerry azubuike",
                    id:5,
                     }]
             
                    };
             
     /* comment=(e)=>{
         let tog=this.state.toggs;
         let check=tog===true? "flex absolute-form block":"flex absolute-form none"
         this.setState({})
      }*/
                    
   render(){
       
       return(
           <div className="col-md-4 col-lg-6 profile-page">
               <div className="flow-page">
                   {this.state.names.map(name=>
                   <div key={name.id} className="flow-content">
                       <div id="luv-show">
                           <img className="photoclip">
                           </img>
                           <span className="block-title flex align-items">
                               <i className="fa fa-user post-icon"></i>
                               <span className="post-name col-8">{name.profileName}</span>
                               <i className="fa fa-heart col-2 right"></i>
                           </span>
                       </div>
                       <span className="block-title figcaption flex align-items ">
                               <img width="40px" height="40px" className="comment-photo"></img>
                               <span className="post-name col-7">{name.commentName}</span>
                               <i className="fa fa-pencil col-2 right option"></i>
                               <form className="flex absolute-form">
                                   <textarea placeholder="comment here"></textarea>
                                   <button type="submit"><i className="fa fa-send"></i></button>
                               </form>
                           </span>
                   </div>)}
               </div>
           </div> 
       );
   }

  };

  export default Pageview;