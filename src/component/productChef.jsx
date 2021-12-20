import React, { Component } from 'react';
import OtherGallery from './otherGallery';
import Footer from './footer';
import axios from 'axios';

class ProductChef extends React.Component {
    constructor(){
        super();
        
    } 
    state={
         cooking:"cooking",
         productDetail:[]
     }
         scrolls=(result)=>{
            if(result){
                this.setState({productDetail:[...result.meals]})
               }
              
         }
componentDidMount=()=>{
     async function product(){
        try{   
           return await axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+localStorage.getItem("idMeal"),{
           params:{            
           }
        })
      }
         catch(err){ console.log(err)}
      }
       product().then(response=>this.scrolls(response.data))
       .catch(err=>console.log(err))
    }
    render() { 
        return (
        <div>
             <OtherGallery headername={this.state.cooking}></OtherGallery>
           <div className="flex">
                 {
                     this.state.productDetail.map(e=>
                        <div key={e.idMeal} className="col-md-8 foodContain">
               {/* start heading of the image */}
               <div className="picsContain">
                   <img className="header-pics" src={e.strMealThumb} style={{borderRadius:10}}></img>
                </div>{/* end heading of the image */}
            
         {/* start of the article image */}
             <div className="food-property">
                   <h5>{e.strMeal}</h5>
                   <span>@ {e.strArea}</span>
                   <p>{e.strInstructions}</p>
                   <h5 className="item-head">items needed to prepare food</h5>
                   <ul className="item-item">
                       {e.strMeasure1===""?"":<li>{e.strMeasure1}</li>}
                       {e.strMeasure2===""?"":<li>{e.strMeasure2}</li>}
                       {e.strMeasure3===""?"":<li>{e.strMeasure3}</li>}
                       {e.strMeasure4===""?"":<li>{e.strMeasure4}</li>}
                       {e.strMeasure5===""?"":<li>{e.strMeasure5}</li>}
                       {e.strMeasure6===""?"":<li>{e.strMeasure6}</li>}
                       {e.strMeasure7===""?"":<li>{e.strMeasure7}</li>}
                       {e.strMeasure8===""?"":<li>{e.strMeasure8}</li>}
                       {e.strMeasure9===""?"":<li>{e.strMeasure9}</li>}
                       {e.strMeasure10===""?"":<li>{e.strMeasure10}</li>}
                       {e.strMeasure11===""?"":<li>{e.strMeasure11}</li>}
                       {e.strMeasure12===""?"":<li>{e.strMeasure12}</li>}
                       {e.strMeasure13===""?"":<li>{e.strMeasure13}</li>}
                       {e.strMeasure14===""?"":<li>{e.strMeasure14}</li>}
                       {e.strMeasure15===null?"":<li>{e.strMeasure15}</li>}
                       {e.strMeasure16===null?"":<li>{e.strMeasure16}</li>}
                       {e.strMeasure17===null?"":<li>{e.strMeasure17}</li>}
                       {e.strMeasure18===null?"":<li>{e.strMeasure18}</li>}
                        {e.strMeasure19===null?"":<li>{e.strMeasure19}</li>}
                        {e.strMeasure20===null?"":<li>{e.strMeasure20}</li>}
                   </ul>
                   <a href={e.strYoutube}><div className="player"><span className="fa fa-play-circle-o "></span> Watch Video</div></a>
             </div>{/* end of article of the image */}
                
             </div>
                        )
                 }
         </div>
        <Footer></Footer>
        </div>);
    }
}
 
export default ProductChef;
