import React, { Component } from 'react';
import Project from './project.jsx';
import Dropdown from './dropdown.jsx';

  class Projects extends React.Component{
   state={
      block:[
         {id:1,name:"fa fa-share-alt",dis:" porro quisquam est, qui dolorem ipsum quiadolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"},
         {id:2,name:"fa fa-line-chart",dis:"porro quisquam est, qui dolorem ipsum quiadolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"},
         {id:3,name:"fa fa-mixcloud",dis:"porro quisquam est, qui dolorem ipsum quiadolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi"}
      ],
         drop:[{brand:"company",blog:"blog",board:"brand",contact:"contact",drop1:"drop1",drop2:"drop2"},
         {brand:"project",blog:"header",board:"topic",contact:"contact",drop1:"drop3",drop2:"drop4"},
         {brand:"market",blog:"chart",board:"success",contact:"register",drop1:"drop5",drop2:"drop6"}
   ],
      dropHeader:["practice","management","profile"],
      color:["blue","blue","blue"]   
   };
     
   render(){
       return(
          <div>
          <div className="flex main-block">
             <h3 className="cross-header col-11">our simile progress</h3>  
            {this.state.block.map(block=> 
            <Project key={block.id} dis={block.dis.substring(0,127)+"..."} name={block.name}></Project>)}
            
           </div>
           <div className="col-11 ">
                <Dropdown color={this.state.color} brand={this.state.drop} dropheader={this.state.dropHeader}/>
            </div>
           </div> 
       );
   }

  };

  export default Projects;