import React, { Component } from 'react';

  class Manufacturer extends React.Component{
   state={
      names:[
          {icon:"fa fa-heart-o col-3",title:"superior safety practice",id:1},
          {icon:"fa fa-dribbble col-3",title:"optimal temperature",id:2},
          {icon:"fa fa-shield col-3",title:"exceptional quality",id:3},
          {icon:"fa fa-users col-3",title:"made of expert combination",id:4}
      ]
   };
  
            
   render(){
       
       return(
           <div>
              <h2 className="premium"><span>premium</span> dutch blues<br></br> manufacturer</h2>
              <div className="flex">
                  {
                      this.state.names.map(name=>
                  <div  key={name.id} className="flex col-md-6 themes align-items">
                      <span className="ball-shadow"><i className={name.icon}></i></span>
                  <span className="col-9">{name.title}</span>
                  </div>)
                 }
              </div>

           </div> 
       );
   }

  };

  export default Manufacturer;