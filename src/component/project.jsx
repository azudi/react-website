import React, { Component } from 'react';
   
  class Project extends React.Component{
state={
    button:"more..."
};
   render(){
       return(
        
          <div className="col-md-3  block-icon-div" >
           
              <div className="block-icon">
                  <span className={this.props.name}></span></div>
              <div className="block-p" >
                 <p>
                { this.props.dis }
                 </p>
                 <button>{this.state.button}</button>
              </div>
          </div>
       );
   }

  };

  export default Project;