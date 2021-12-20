//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import logo from './bac.png';

   class Counter extends Component{
     state={
       count:"thes display is an object",
       age:this.props.value,
       bool:true,
       tags:["tag1","tag2","tag3"]
     };
     /*constructor{
       super();
       this.increaseCount=this.increaseCount.bind(this)
     }*/
     renderTag(){
      if(this.state.age > 30)
      return <span>you are too old</span>;
      return <span>you are qualified </span>;
   }
   // these is to increase and decrease the span component by one(1)
     increaseCount=(product)=>{
      console.log(product);
        this.setState({ age : this.state.age +1 });
     }
     decreaseCount=(item)=>{
      console.log(item);
      this.setState({ age : this.state.age - 1 });
  
   }
   //these is to display the id of the parent container or div
     doHandleIncrease=()=>{
          this.increaseCount({id:this.props.id})
     }
     doHandleDecrease=()=>{
      this.decreaseCount({id:this.props.id})
 }
     



     render(){ 
      
      return(
         <div >
           <input onChange={this.props.display}></input>
           <img alt="counter-img" src={logo} width="50px"></img>
           {this.props.children}
            <span className={ this.getColorChange()}>{this.zeroCount()}</span>
          <button onClick={this.doHandleIncrease} className="butt2">Add</button>
          <button onClick={this.doHandleDecrease} className="butt2 yell">Reduce</button>
          <button onClick={()=>this.props.onDelete(this.props.id)} className="butt3">delete</button>
       
         <ul>
            {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
          </ul>
          <span className="mar-1 pad-1">{this.renderTag()}</span>
        </div>
        ); 
     }
     getColorChange() {
       var classes = "butt";
       classes = this.state.age === 0 ? "red butt" : "yell butt";
       return classes;
     }
        
       zeroCount(){
        const { age } =this.state;
        const know= (age === 0) ? 'zero':age;
        return know;
         


       }  
   }
      export default Counter;