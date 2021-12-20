
import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Mainfood extends Component {
  constructor(props){
    super(props);
    this.touchToggle=this.touchToggle.bind(this);
  }
  state = {  
    keeper:0,
    sphere:"no-sund",
    ballCount:1,
    childArr:[],
    firsttopic:[
      " ","BEST HARVEST","NUTRITIOUS"
    ],
    ballray:[1,2,3],
    secondtopic:[
      "livestock",
      "good nutrition",
      "always delivers"
    ],
    texttopic:[
      'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in exercitation ullamco ',
      'magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor                    '
    ],
      playray:[0,1,2]  }
       clearme=0
       componentDidMount=()=>{
        this.setState({childArr:[...document.querySelector('.shuffle').childNodes].concat([...document.querySelector('.topmost-nav').childNodes])})
         this.clearme=setInterval(()=>{
          if(this.state.ballCount===this.state.ballray.length){
            this.setState({ballCount:0})              
          }
          let sundot=document.querySelectorAll(".sundot>span");
             for(let j=0;j<sundot.length;j++){
               sundot[j].classList.remove("sund")
             }
             sundot[this.state.ballCount].classList.add("sund")
           this.setState({keeper:this.state.keeper+1})
           if(this.state.keeper===this.state.playray.length){
            this.setState({keeper:0});}
            this.setState({ballCount:this.state.ballCount+1})
          
           
         },10000);
       }
       touchToggle=(e)=>{
        if(this.state.childArr.indexOf(e.target)===-1){
          document.querySelector('.shuffle').classList.add('not-shuffle')
        }
}
       componentWillUnmount=()=>{
        clearInterval(this.clearme)
      }   
                
       
  render() { 
  
    return (  
      <div onClick={this.touchToggle} className="change-back">
        
         <div className="no-mar no-par">
          
           <div className="no-par no-mar ">
              <div className="nav-box-div">
                {this.props.children}
                 </div>
                   <span className="sundot">
                 {this.state.ballray.map(e=><span id={e+"span"} key={e}>&middot;</span>)}
               </span>
        <h1 className="pl-3 top-head">{this.state.firsttopic[this.state.keeper]}</h1>
          <h1 className="pl-3 next-head">{this.state.secondtopic[this.state.keeper]}</h1>
             <p className="pl-3 head-par col-md-10 col-lg-8">{this.state.texttopic[this.state.keeper]}</p>
               <Link to="/chefmaster" ><button className="explore-button ml-3">Explore</button></Link>
                 <Link to="/gallery" ><button className=" ml-3 hungry">I'm hungry</button></Link>
                  <i className="ranger"></i>
               <div className="topmost-nav">
              <span>Az</span>
            <span onClick={this.props.nots} className="material-icons navicon" >sort</span>
            <div className="nav-side-span">
              <span><Link to="/blog">Blog<hr className="hr"></hr></Link></span>
              <span><Link to="/signup">Sign-up<hr className="hr"></hr></Link></span>
              <span><Link to="/gallery">Gallery<hr className="hr"></hr></Link></span>
              <span><Link to="/location">Contact<hr className="hr"></hr></Link></span>
              <span><Link to="/location">Location<hr className="hr"></hr></Link></span>
            </div>
          </div>
        <a href=""><span className="fa fa-angle-double-down doter"></span></a>
      </div>
       </div>
      </div>
 
         
  
    )
    
  }
} 
export default Mainfood;
