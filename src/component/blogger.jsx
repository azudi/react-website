import React, { Component } from 'react';

class Blogger extends React.Component{
 state={
      usedItems:[
             {icon:"fa fa-css3",title:"styling",id:1},
             {icon:"fa fa-html5",title:"structure",id:2},
             {icon:"fa fa-wordpress",title:"simplicity",id:3},
             {icon:"fa fa-google",title:"ui/ux design",id:4},
             {icon:"fa fa-git",title:"code storage",id:5,},
             {icon:"fa fa-bold",title:"efficiency",id:6}
      ]
          }
 render(){
     
     return(
         <div className="flex blue-back">
           <div className="col-md-6 col-lg-5">
                <h4 className="news-header">For <span>latest news/update</span> on our newly launched website
                    fill <span>up </span>the <span>newsteller</span> below
                </h4>
                <form className="newsteller">
                    <input type="email" placeholder="youremail@yahoo.com" required></input>
                    <button type="submit">submit</button>
                </form><br></br><br></br><br></br>
               </div>
               <div className="flex col-md-6 col-lg-5">
                   <h5 className="news-header">webpage made<span> with react</span> but other <span>alternatives</span></h5>
                   {this.state.usedItems.map(items=>
                    <div key={items.id} className="pointers col-6 col-md-4 col-lg-3 col-sm-4">
                        <span className={items.icon}></span>
                        <b>{items.title}</b>
                    </div>)}
               </div>
         </div> 
     );
 }

};

export default Blogger