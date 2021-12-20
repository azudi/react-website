import React, { Component } from 'react';

  class Dropdown extends React.Component{
   state={
       toggle:true,
       fall:false,
       faller:"faller none",
     name:"menu",
     count:0,
     num:[{id:1,color:"rel-nav-div col-md-3 flex col-sm-6 blue"},
     {id:2,color:"rel-nav-div col-md-4  flex col-sm-6 blue"},
     {id:3,color:"rel-nav-div col-md-4  flex col-sm-6 blue"}]
   };
   dropDown=( event )=>{
         let togg=this.state.toggle;
    let nav= togg ===true ? "menu lefter ":"menu righter" ;
    this.setState({toggle:!this.state.toggle});
    this.setState({name:nav});
     this.setState({count:event.target.parentElement.id-1});
   // return nav;   
   }
   cancleNav=()=>{
    this.setState({toggle:false});
    let togg=this.state.toggle;
    let nav= togg ===true ? "menu lefter ":"menu righter" ;
    this.setState({name:nav});
    this.setState({toggle:true});
     return nav;   
   }
     faller=()=>{
        let togg=this.state.fall;
        let nav= togg ===true ? "faller none ":"faller block" ;
        this.setState({fall:!this.state.fall});
        this.setState({faller:nav});
     }
            
   render(){
     
       return(
           <div>
          <div className="nav-bar">
              <div className="flex move-left">
                  {this.state.num.map(num=>
               <div  key={num.id} id={num.id} className={num.color}>
                   <b>{this.props.dropheader[num.id-1]}</b> <span
                    onClick={this.dropDown}
                     className="fa fa-navicon flow-side"></span>
 
               </div>)}
             
        </div>
               <div className={this.state.name+" drop-head"}>
                   <span className="brand-company">{this.props.brand[this.state.count].brand}</span>
                   <div className="box-company">
                      <span>{this.props.brand[this.state.count].blog}</span>
                      <span>{this.props.brand[this.state.count].board+" "} 
                       <i onClick={ this.faller} className='fa fa-caret-down'></i>
                            <span  className={this.state.faller}>
                                <i>{this.props.brand[this.state.count].drop1}</i>
                                <i>{this.props.brand[this.state.count].drop2}</i>
                            </span>
                      </span>
                      <span>{this.props.brand[this.state.count].contact}</span>
                      <i  onClick={this.cancleNav} className="cancle-button">x</i>
                   </div>
               </div>
           </div>
           </div> 
       );
   }

  };

  export default Dropdown;