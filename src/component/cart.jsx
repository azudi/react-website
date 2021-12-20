import React, { Component } from 'react';
import OtherGallery from "./otherGallery";
import Footer from "./footer";
import {Link} from "react-router-dom"
class Cart extends Component {
    state = { 
        name:"CART",
        cookieImg:[],
        cookieDetail:[],
        cookieprice:[],
        hasError:false,
        count:0,
        poporder:"",
        month:["jan","feb","mar","apr"]
     }
       
     componentDidMount=()=>{
            
                  // localStorage.removeItem("cookiedetails")
        //localStorage.removeItem("cookieImgs")   

            //alert(localStorage.getItem("cookCookieId9"))
           //alert(localStorage.getItem("cookieCount"))
         
           if(localStorage.getItem("cookieImgs")!==null){
            if(localStorage.getItem("cookieImgs")==="[]"){
            document.querySelector(".no-cart").classList.add("yes-cart");
            }
            else{
                document.querySelector(".no-cart").classList.remove("yes-cart");                
            }
            let localjson=JSON.parse(localStorage.getItem("cookiedetails"));
            let localjsonimg=JSON.parse(localStorage.getItem("cookieImgs"));
            let localjsonprice=JSON.parse(localStorage.getItem("cookieprice"));

            
            for(let y=0;y<localjson.length;y++){
              this.state.cookieDetail.push(localjson[y]);
              this.state.cookieImg.push(localjsonimg[y]);
              this.state.cookieprice.push(localjsonprice[y]);
            }
            this.setState({cookieDetail:this.state.cookieDetail})
            this.setState({cookieImg:this.state.cookieImg})
            this.setState({cookieprice:this.state.cookieprice})

            localStorage.setItem("cookieImgs",JSON.stringify(this.state.cookieImg))              
            localStorage.setItem("cookiedetails",JSON.stringify(this.state.cookieDetail))              
            localStorage.setItem("cookieprice",JSON.stringify(this.state.cookieprice))              
            
           //  alert(this.state.cookieImg)
             //alert(this.state.cookieDetail)
             setTimeout(
                ()=>{
                 var sub=document.querySelectorAll(".sub-art");
                 var tag=document.querySelectorAll(".pricetag");
                 for(let h=0;h<sub.length;h++){
                   sub[h].innerHTML=localjson[h];
                   tag[h].innerHTML=localjsonprice[h];
                 }           
                },100
            )
            
            }      
                 
     }

     remove=(e)=>{
   
        if(localStorage.getItem("cookieImgs")!==null){
            
         let newImg=[];
         let newdet=[];
         let newprice=[];
         for(let x=0;x<this.state.cookieImg.length;x++){
             if(e.target.parentElement.parentElement.children[0].children[1].src!==this.state.cookieImg[x]){
                newImg.push(this.state.cookieImg[x]);
                newdet.push(this.state.cookieDetail[x]);
                newprice.push(this.state.cookieprice[x]);
            }
         }
         this.setState({cookieDetail:newdet})
         this.setState({cookieImg:newImg})
         this.setState({cookieprice:newprice})
            
         localStorage.setItem("cookieImgs",JSON.stringify(newImg))              
         localStorage.setItem("cookiedetails",JSON.stringify(newdet))                      
         localStorage.setItem("cookieprice",JSON.stringify(newprice))                      
        }
        if(localStorage.getItem("cookieImgs")==="[]"){
            document.querySelector(".no-cart").classList.add("yes-cart");
        }
        else{
            document.querySelector(".no-cart").classList.remove("yes-cart");                
        }
     } 
     know=()=>{
         //alert(localStorage.getItem("cookieImgs"))
     }
     counter=()=>{
          this.setState({count:this.state.count+1})
          return this.state.count;
     }
       changeHeart=(e)=>{
         e.target.className="fa fa-heart"
       }
       
       canclePopOrder=()=>{
        this.setState({poporder:""})
    }
    addLine=(e)=>{
        let regex=/^['/' 0-9]+$/;
        let checker='';
            let check=document.querySelector(".pop-input");
            if(check.value.length<=9){
              if(!regex.test(check.value)){
                for(let y=0;y<check.value.length-1;y++){
                    checker=checker+check.value[y]
                }
                check.value=checker;
            }//end of regex check
            if(check.value.length===2){
                if(Number(check.value)<=12){
                    check.value=check.value+" / ";
                }
                else{
                    check.value="01 / ";
                }
            }//end of equals to 2 lenght check
        }//end of if check value is equals to 9
    }
    gapLine=(e)=>{
        let regex2=/^[ 0-9]+$/;
            let check2=document.querySelector(".gap-input");
            let checker2='';
            if(checker2.length<check2.value.length){
            if(check2.value.length<=25){
              if(!regex2.test(check2.value)){
                for(let y=0;y<check2.value.length-1;y++){
                    checker2=checker2+check2.value[y]
                }
                check2.value=checker2;
            }//end of regex check
            if((check2.value.length%5)==0){
                    check2.value=check2.value+" ";
            }//end of equals to 2 lenght check
        }//end of if check value is equals to 9
    }
    else{

    }
    }
    
        order=(e)=>{
            if(e.target.parentElement.children[1].children[0].value==='' && e.target.parentElement.children[2].children[0].value===''){
              alert("provide date to proceed to submit")
            }
            else{
                this.setState({poporder:
                    <div className="flex pop-cart-div">
                <div className="pop-cart relative relative">
                <img src={e.target.parentElement.parentElement.parentElement.children[0].children[1].src} className="respond cartimg"></img>
                <p className='sub-art'>{e.target.parentElement.parentElement.children[0].innerHTML}</p>
                <span>{e.target.parentElement.children[1].children[0].value}</span>
                <span>{e.target.parentElement.children[2].children[0].value}</span>
                <i className="pricebuy">{e.target.parentElement.parentElement.parentElement.children[0].children[0].innerHTML}</i>
                <form>
                   <label>card details</label>
                   <input maxLength="25" onChange={this.gapLine} type="text" placeholder="xxxxx xxxx xxxx xxxx" className="gap-input"></input>
                   <input maxLength="4" type="number" placeholder="cvv"></input>
                   <input maxLength="9" type="text" onChange={this.addLine} className="pop-input" placeholder="mm / yyyy"></input>
                   <span className="other-platform">other platform</span>
                   <Link to="/cart"><i><i className="fa fa-cc-paypal"></i> Paypal</i></Link>
                   <Link to="/cart"><i><i className="fa fa-cc-visa"></i> Visa</i></Link>
                   <button type="submit">Purchase</button>
                   <span onClick={this.canclePopOrder} className="x-pop">x</span>
                </form>
            </div>
            </div>
        })
            }
        }
    
    render() {
        return (  
            <div>
                
                <OtherGallery headername={this.state.name} />

                <div className="no-cart">
                    <h1 className="col-sm-11 col-md-10 text-center">
                        no item added to cart<br></br>
                        <i className="fa fa-shopping-cart"></i>
                    </h1>
                </div>
                      
                          {this.state.poporder}
                      
                <div className="flex">
                   {this.state.cookieImg.map(e=>
                   <div key={e} className=" flex col-md-8 col-sm-10 cartdiv relative">
                       
                        <div className="col-sm-5">
                            <span className="pricetag"></span>
                            <img alt="cart-img" onClick={this.know} src={e} className="respond cartimg"></img>
                        </div>
                      <div className="col-sm 7">
                        <span className="sub-art">food interm lorem ipseum chavreur sect practice del preil do baels parc dasbash manchi iran sak deq</span>
                        <div className="carttime">
                            <span>fill out the date to order</span>
                                  <i className="time-spot"><input type="date"  placeholder="input date"></input></i>
                                  <i className="time-spot"><input type="time" placeholder="input-time"></input></i>
                            <button onClick={this.order}>Order</button>
                        </div>
                     </div>
                     <div className="cancle-div">
                            <i onClick={this.remove} className="fa fa-trash"></i>
                            <i onClick={this.changeHeart} className="fa fa-heart-o"></i>
                        </div>
                    </div>)}
                </div>
                <Footer/>
            </div>
         );
    }
    
}
 
export default Cart;