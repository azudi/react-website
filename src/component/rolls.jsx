import React, { Component } from 'react';

  class Rolls extends React.Component{
   state={
      names:[
         {id:1,icon:"fa fa-home",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:2,icon:"fa fa-user",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:3,icon:"fa fa-map-marker",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:4,icon:"fa fa-gears",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:5,icon:"fa fa-diamond",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:6,icon:"fa fa-comments",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:7,icon:"fa fa-gift",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:8,icon:"fa fa-sliders",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:9,icon:"fa fa-exclamation-circle",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        {id:10,icon:"fa fa-plus-circle",ft1:" porro quisquam est quisquam  hayleo part",
        ft2:"porro quisquam ",ft3:" quisquam est expota"},
        
      ]
   };
  
            
   render(){
       return(
            <div className="scroll-flow">
                {
                    this.state.names.map(name=>
                 <a href="#" className="a-flow-div" key={name.id}>
                     <div className="flow-div">
                     <span className="flow-span "><i className={name.icon}></i></span> 
                    <p className="flow-p">
                        <span>
                        {name.ft1}
                        </span>
                        <span>
                        {name.ft2}
                        </span>
                        <span>
                         {name.ft3}
                        </span>
                    </p>
                 </div></a>
                     ) }
           </div> 
       );
   }

  };

  export default Rolls;