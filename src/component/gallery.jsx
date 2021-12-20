  import React, { Component } from 'react';
  import OtherGallery from './otherGallery';
import Footer from "./footer";
import {Link} from "react-router-dom"
  class Gallery extends Component {
     constructor(props){
         super(props);
         this.binderLeftDot=this.binderLeftDot.bind(this);
         this.binderRightDot=this.binderRightDot.bind(this);
     }
      state = {
          name:"GALLERY",
          height:"height",
          click:true,
          scroll:0,
          rightmove:0,
          leftmove:0,
          slides:'',
          slideArr:[],
          cookiecheck:0,
          ajaxContent:[],
          cookieimgarr:[],
          cookiedetail:[],
          cookieprice:[],
          showDis:"discribe-div",
          showdish:true,
          filter:e=>e!=="",
          options:[{id:1,top:"Food practice",class:"fa fa-glass"},
                  {id:2,top:"delicacies",class:"fa fa-cutlery"},
                  {id:3,top:"What we love",class:"fa fa-heart-o"},
                  {id:4,top:"High quality",class:"fa fa-stethoscope"},
                  {id:5,top:"Fresh meal",class:"fa fa-thumbs-up"},
                  {id:6,top:"Healthy food",class:"fa fa-smile-o"}
                ]
       }
    toggleMenu=()=>{
        if(this.state.click===true){
        document.querySelector(".gallery-menu").classList.add(this.state.height);
        this.setState({click:!this.state.click})
        }
        else{
            document.querySelector(".gallery-menu").classList.remove(this.state.height);
            this.setState({click:!this.state.click})
        }
    }
         changeDis=(e)=>{

          if(this.state.showdish){
            e.target.parentElement.parentElement.children[1].classList.add("dis-height");
          e.target.innerHTML="detail"
         this.setState({showdish:!this.state.showdish})
          }
          else{
            e.target.parentElement.parentElement.children[1].classList.remove("dis-height");
            e.target.innerHTML="detail";
         this.setState({showdish:!this.state.showdish})
          }

        }
       set=(data)=>{
           for(let j=0;j<data.length;j++){
         this.state.ajaxContent.push(data[j])}
         this.setState({ajaxcontent:this.state.ajaxContent})
         this.setState({mainContent:this.state.ajaxContent})
        }
       continental=()=>{
        this.setState({filter:e=>e.type==="continental"})
       }

       local=()=>{
        this.setState({filter:e=>e.type==="local"})
       }
       arsorted=()=>{
        this.setState({filter:e=>e.type==="arsorted"})
       }
       all=()=>{
        this.setState({filter:e=>e.type!==""})
       }
       slideFill=(data)=>{
        this.setState({slideArr:data.slideContent});
        let dotslide=this.state.slideArr;
        for(let p=0;p<dotslide.length-1;p++){
          let flow=document.createElement('i');
          document.querySelector('.dotter-span').appendChild(flow);
        }
         document.querySelectorAll('.dotter-span>i')[0].classList.add('white')
   }
   binderLeftDot=(left)=>{
    let doti=document.querySelectorAll('.dotter-span>i')
    for(let p=0;p<doti.length;p++){
      document.querySelectorAll('.dotter-span>i')[p].classList.remove('white')
    }
     document.querySelectorAll('.dotter-span>i')[left].classList.add('white');    
   }
   binderRightDot=(left)=>{
    let doti=document.querySelectorAll('.dotter-span>i')
    for(let p=0;p<doti.length;p++){
      document.querySelectorAll('.dotter-span>i')[p].classList.remove('white')
    }
     document.querySelectorAll('.dotter-span>i')[left].classList.add('white');  
   }

       rightslide=(e)=>{
        if(this.state.scroll>=e.target.parentElement.children[0].children.length-1){
          this.setState({scroll:this.state.scroll})
          e.target.style.transform="scale(0)";
        }
 
          else{
            let left=this.state.scroll;
            this.setState({scroll:this.state.scroll+1})
            e.target.parentElement.children[0].children[this.state.scroll].style.width="0%";
          e.target.parentElement.children[1].style.transform="scale(1)"
          this.binderLeftDot(left+1); 
        }
            
             
          
       
      }
      leftslide=(e)=>{
        let left=this.state.scroll;
        if(this.state.scroll<=0){
          this.setState({scroll:0})
          e.target.style.transform="scale(0)"
        }
        else{
          let left=this.state.scroll;
          e.target.parentElement.children[2].style.transform="scale(1)";
        this.setState({scroll:left-1})
        e.target.parentElement.children[0].children[left-1].style.width="100%";
      this.binderRightDot(left-1) 
      }
        
      }

      
      componentDidMount=()=>{
        async function setter(){
        try{
          return await fetch(window.location.href.substring(0,window.location.href.lastIndexOf("/"))+"/ajax/dishes.json")
        .then(response=> response.json())
        }
        catch(err){
          console.log(err)
        }
        }
        setter().then(data=>
            this.set(data)
            )
        .catch(err=>console.log(err));
         
        async function slidefiller(){
        try{
          return await fetch(window.location.href.substring(0,window.location.href.lastIndexOf("/"))+"/ajax/slider.json")
        .then(response => response.json())
        }
        catch(err){console.log(err)}
        }
      slidefiller().then(data=>
          this.slideFill(data)
        )
      .catch(err => console.log("error occured"))
      document.querySelector('.loader').style.display="none"
      this.setState({loader:false})
        if(localStorage.getItem("cookieImgs")!==null && localStorage.getItem("cookieprice")!==null){
        let localjson=JSON.parse(localStorage.getItem("cookiedetails"));
        let localjsonimg=JSON.parse(localStorage.getItem("cookieImgs"));
        let localjsonprice=JSON.parse(localStorage.getItem("cookieprice"));
        
        for(let y=0;y<localjson.length;y++){
          this.state.cookiedetail.push(localjson[y]);
          this.state.cookieimgarr.push(localjsonimg[y]);
          this.state.cookieprice.push(localjsonprice[y])

        }
        this.setState({cookiedetail:this.state.cookiedetail})
        this.setState({cookieimgarr:this.state.cookieimgarr})
        this.setState({cookieprice:this.state.cookieprice})
        this.setState({cookiecheck:this.state.cookieimgarr.length})
        }
        
      }
      cookie=(e)=>{
        let cookieImage=e.target.parentElement.parentElement.children[0].children[0].src;
        let cookienote=e.target.parentElement.parentElement.children[1].children[0].innerHTML;
        let pricer=e.target.parentElement.parentElement.children[0].children[2].innerHTML;
         let count=0;
         for(let j=0;j<this.state.cookiedetail.length;j++){
           if(cookienote===this.state.cookiedetail[j] && cookieImage===this.state.cookieimgarr[j]){
            count++;
           }
         }
         
            if(count===0){
              this.state.cookiedetail.push(cookienote);
              this.state.cookieprice.push(pricer);
              this.state.cookieimgarr.push(cookieImage);
              localStorage.setItem("cookieImgs",JSON.stringify(this.state.cookieimgarr))
              localStorage.setItem("cookiedetails",JSON.stringify(this.state.cookiedetail))
              localStorage.setItem("cookieprice",JSON.stringify(this.state.cookieprice))
            }
            else{
              alert("these item has being added already")
             }
             e.target.parentElement.parentElement.children[1].classList.remove("dis-height");
             this.setState({showdish:!this.state.showdish})

       /*  localStorage.removeItem("cookiedetails")
         localStorage.removeItem("cookieImgs")
       */
         this.setState({cookiecheck:this.state.cookieimgarr.length})

        }

        touchstart=(e)=>{
          this.setState({leftmove:e.changedTouches[0].clientX})
        }
        touchcancle=(e)=>{
          e.preventDefault();
        }
        touchend=(e)=>{
          let left=this.state.scroll;
          this.setState({rightmove:e.changedTouches[0].clientX});
          if(this.state.leftmove-this.state.rightmove>50){
             if(this.state.scroll>=e.target.parentElement.parentElement.parentElement.children[0].children.length-1){
             this.setState({scroll:this.state.scroll});
             e.target.parentElement.parentElement.parentElement.children[2].style.transform="scale(0)"
          }
            else{
              this.setState({scroll:this.state.scroll+1});
            e.target.parentElement.parentElement.parentElement.children[0].children[this.state.scroll].style.width="0%";
            e.target.parentElement.parentElement.parentElement.children[1].style.transform="scale(1)"
            let doti=document.querySelectorAll('.dotter-span>i');
             this.binderLeftDot(left+1);
          }
          }
          else if(this.state.rightmove-this.state.leftmove>50){
           
              if(this.state.scroll>=0){
                this.setState({scroll:this.state.scroll-1})
              e.target.parentElement.parentElement.parentElement.children[0].children[this.state.scroll].style.width="100%";
              e.target.parentElement.parentElement.parentElement.children[2].style.transform="scale(1)"
            this.binderRightDot(left)
            }
          }
          else if(this.state.scroll<=0){
            this.setState({scroll:0})
            e.target.parentElement.parentElement.parentElement.children[1].style.transform="scale(0)"
          }
        }
    render() {
          return (
              <div className="section">
                <span className="cart-show"><em>{this.state.cookiecheck}</em><Link to="/cart"><i className="fa fa-shopping-basket"></i></Link></span>
                  <OtherGallery headername={this.state.name} />

                  <div className="flex galleryarticle">
                      <h1 className="col-sm-11 col-md-10"><span>Hello we</span>  are melody we <span>love</span> food our food <span>gallery</span></h1>
                <div>
                  <span>
                    <span>{this.state.time}</span>
                  </span>
                </div>
              <div className="flex col-12 cont">
                 <div onTouchStart={this.touchstart} onTouchCancel={this.touchcancle} onTouchEnd={this.touchend} className="slides-div col-12 col-md-8 col-sm-10">
                   {this.state.slideArr.map(e=>
                   <div key={e.id}>
                     <img alt="background" src={e.background} className="rounder-img"></img>
                     <Link to="/gallery"><span className="fa fa-link slideicon"></span></Link>
                     <h1>{e.name}</h1>
                   </div>)}
                </div>
                 <button onClick={this.leftslide} id="left">&lang;</button>
                    <button onClick={this.rightslide} id="right">&rang;</button>
                    <i className="ender-scroll"></i>
                    <i className="starter-scroll"></i>
                    <div className="dotter-span">
                      <i></i>
                    </div>
              </div>
                  <p className="col-md-5">
                    To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
                  </p>
                  <p className="col-md-5">
                    To take a trivial example,
                    which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
                  </p>
                  <div className="col-md-9 m-4 gallery-category">
                      <span  onClick={this.toggleMenu} >meals <i   className="fa fa-chevron-down right"></i></span>
                      <span className="gallery-menu">
                        <span onClick={this.all}>All dishes</span>
                          <span onClick={this.continental}>Continental</span>
                          <span onClick={this.local}>Local-made</span>
                          <span onClick={this.arsorted}>Arsorted</span>
                      </span>
                  </div>
                  </div>

                  <div className="flex in-between ml-md-5 mr-md-5">
                    {this.state.ajaxContent.filter(this.state.filter).map(e=>
                    <div className="relative col-sm-6 col-md-4 col-lg-3"  key={e.id} id={e.id}>
                         <div className="relative dish-container">
                           <img src={e.img} alt="order-cart-img"></img>
                             <span onClick={this.changeDis} className="detail-img">detail</span>
                               <span className="price-cost">{"$"+e.cost}</span>
                             </div>
                           <div className={this.state.showDis}>
                              <p>{e.discription}</p>
                             <button onClick={this.cookie}>add cart <i className="fa fa-shopping-cart cart-icon"></i></button>
                           </div>
                      </div>)}

                  </div>

                  <div className="flex bottom-gallery">
                       <span>fresh food</span>
                       <h1 className="col-11 text-center">OUR MELODY STORE</h1>
                       <p className="col-md-11 text">
                       Right must explain to you how all this mistaken idea
                       of denouncing pleasure and praising pain was born and I
                       will give you a complete account of the
                       Right must explain to you how all this mistaken idea
                       of denouncing pleasure and praising pain was born
                       </p>
                       <div className="flex col-12">
                         {this.state.options.map(e=><div key={e.id} className="options flex col-sm-6 col-md-4 ">
                              <div className="col-4 col-lg-3 opt-icon"><i className={e.class+" food-icon"}></i></div>
                                <div className="options-div col-8 col-lg-9"><h4>{e.top}</h4>
                                 <p>explain to you how all this mistaken idea
                                  of denouncing pleasure and praising pain was born
                                 </p>
                               </div>
                         </div>)}
                       </div>
                  </div>
                  <Footer/>
              </div>
           );
      }
  }

  export default Gallery;
