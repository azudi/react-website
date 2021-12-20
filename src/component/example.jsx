import React, { Component } from 'react';
   class Examples extends React.Component{
      state={
           count:0,
           drop:true,
           days:[1,2,3,4,5,6,7],
           week:[
               {day:"monday",id:1},
               {day:"tuesday",id:2},
               {day:"wedday",id:3},
               {day:"thurday",id:4},
               {day:"friday",id:5},
               {day:"satday",id:6},
               {day:"sunday",id:7}
           ],
           value:"",
          
      };
        
         increaseNum=()=>{
             this.setState({count:this.state.count+1});
         }
             /* filter=()=>{
                 let fil= this.state.days.filter(num => num>0);
               // return fil.map(day => <li class="mar-1" key={day}>{day}</li>);
               return fil;
              }
              week=()=>{
                  let name=this.state.week.filter(names => names.includes(""));
                  return name;
              }*/
              text=(event)=>{
                this.setState({value:"event.target.value"})
              }
        dropDown=()=>{
            this.setState({drop:!this.state.drop});
            console.log(this.state.drop)
        }
          dropFunction=()=>{
            let { drop }=this.state;
            let nav=( drop )===true ? "butt red yes":"butt yell no" ;
            return nav;                                            
          }
            showId=(day)=>{
                console.log(day);    
            }
      render(){
          return(
              <div>
                  <h1>React Examples</h1>
                  <input value={this.state.value} onChange={()=>this.text()}></input>
                  <span className="mar-1">{this.state.count}</span>
                  <button onClick={this.increaseNum} className="butt3">count</button>
                  <div className={this.dropFunction()}>
                      <h1>drop down</h1>
                  </div>
                  <buttton onClick={this.dropDown} class="butt3"> <i class="fa fa-caret-down"></i> drop</buttton>
                  <ul>
                    {this.state.week.filter(day=>day.day.includes('s')).map(day=>
                    <li onClick={()=>this.showId(day.id)} key={day.id} class="list">{day.day} is the {day.id} of the week</li>)}
                  </ul>
                  <ul>
                    {this.state.week.filter(day=>day.id>3).map(day=><li key={day.id} class="list">{day.id}</li>)}
                  </ul>
                   </div>
          );
      }
   }
   export default Examples;