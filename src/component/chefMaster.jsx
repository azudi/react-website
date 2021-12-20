import { render } from '@testing-library/react';
import React, { Component } from 'react';
import OtherGallery from './otherGallery';
import axios from "axios"
import Footer from './footer';
import { Link } from "react-router-dom"

class ChefMaster extends React.Component {
    constructor(){
        super();
      this.scroll=this.scroll.bind(this)
      this.topper=this.topper.bind(this)
    }
        
    

    state={
        header:"Chef-master",
        gottenSCroll:[],
        tops:[],
        top:[
           {
              idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"../pics/food.jpg"
           },
           {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"../pics/food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"pics/food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"../food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"../food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"pics/food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"pics/backgroung.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"../pics/food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"../pics/food.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"pics/backgroung.jpg"
         },
         {
            idMeal:"1",strMeal:"capachono spring tea",strMealThumb:"pics/backgroung.jpg"
         }
         
        ],
        letter:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    }
     scroll=(result)=>{
        if(result){
           this.setState({gottenSCroll:[...result.meals]})
          }
     }
       topper=(result)=>{
        if(result){
           this.setState({tops:[...result.meals]})
          }
     }
     nextPage=(e)=>{
         localStorage.setItem("idMeal",e.target.id)
     }
     changeContent=(e)=>{
        
    async function scroller(){
      try{ 
         return await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f="+e.target.textContent,{
         params:{            
         }
      })
    }
       catch(err){ console.log(err)}
    }
     scroller().then(response=>this.scroll(response.data))
     .catch(err=>console.log(err))
        window.scrollTo(0,0)
     }
  componentDidMount=()=>{
              
    async function scroller(){
        try{ 
           return await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood",{
           params:{            
           }
        })
      }
         catch(err){ console.log(err)}
      }
       scroller().then(response=>this.scroll(response.data))
       .catch(err=>console.log(err))


       async function scrolls(){
        try{   
           return await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=american",{
           params:{            
           }
        })
      }
         catch(err){ console.log(err)}
      }
       scrolls().then(response=>this.topper(response.data))
       .catch(err=>console.log(err))
    }
    render(){
        return (<div className="no-mar">
               <OtherGallery headername={this.state.header}></OtherGallery>
               <div className="flex">
                 <div className="col-md-8 flex">
                     <div className="containFlexscroll">
                         <div className="flexScroll">
                          {this.state.tops.map(e=><div key={e.idMeal} id={e.idMeal} className="imgContain">
                              <Link to="/property"><img className="respond rolls" src={e.strMealThumb} id={e.idMeal} onClick={this.nextPage}></img></Link>
                             <span className="abt-name" id={e.idMeal} onClick={this.nextPage}>{e.strMeal}</span>
                           </div>
                          )}
                         </div>
                     </div>

                 <div className="col-12">
                   {/* this is the list of all the body foods  */}
                  {this.state.gottenSCroll.map(e=> <div key={e.idMeal} className="flex chefContain">
                       <div className="image-chef col-5 col-md-4">
                          <img className="respond" src={e.strMealThumb} id={e.idMeal} onClick={this.nextPage}></img>
                       </div>
                       <div className='col-7 col-md-8'>
                           <h5 ><Link to="/property" id={e.idMeal} onClick={this.nextPage}>{e.strMeal}</Link></h5>
                           <div><span className="">chef master</span> <i className="fa fa-heart floatheart"></i></div>
                       </div>
                   </div>)}
                    {/* this is the list of all the body foods end  */}
                 </div>

               </div>
               <div className="flex">
                 <div className="col-md-7 text-center">
                   {
                     this.state.letter.map(e=><span onClick={this.changeContent} className="clicklink" key={this.state.letter.indexOf(e)}>
                       {e}
                     </span>)
                   }
                   </div>
               </div>
        </div>
               <Footer></Footer>
        </div>);
    }
}
 
export default ChefMaster;