import React, { Component } from 'react';
import Counter from './counter'
 
class Props extends React.Component{
        state={
           names:[
             {id:1,value:40,name:'jerry'},
             {id:2,value:0,name:'mike'},
            
           ]
}

        Delete=(counterId)=>{
           // this.state.names.filter()
           }
        Transform=()=>{
         let classes="butt yell";
           
          return classes;
        }
        handleDelete(counterId){
        console.log("delete mwssage "+counterId)
     }   

       render(){
        
       return(
      <div class="contain">
       { this.state.names.map(people => <Counter key={people.id}
        value={people.value} onDelete={this.Delete} name={people.name}
         id={people.id} onDelete={this.handleDelete}>
          <h4>#{ people.id }
          </h4>
     </Counter>)}
     <button class={this.Transform()} >transform</button>
      </div>
  );
      
        }
      
}
export default Props;