import React, { Component } from 'react';

class Counters extends Component{
   state={
       counters:[
      {id:1,value:4},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:2},
      
 ],
   new:{
       cattle:"dog",
       name:this.cattle
   },
 test:[
     23,54,'cattle','yatch',75,32,89,5327],
 play:"",
     sale:['play1','play2','play3']   
   }
   handleDelete=(id)=>{
        let filt=this.state.counters.filter(c=>c.id!==id);
        console.log(filt);
        this.setState({counters:filt})
   }
  
   componentDidMount(){
      
         setInterval(function(){
           
           //console.log();
     },1000
         
         )
        
   }
       display=(e)=>{
             this.setState({play:e.target.value});
       }
       
     

      render(){ 
      
    return(
       <div>
           <h1>{this.state.test.filter(e => e>45).map(e=><h1>{e}</h1>)}</h1>  
           
       </div>
    );
   }

} 
export default Counters;