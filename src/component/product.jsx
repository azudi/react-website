import React, { Component } from 'react';


class Product extends React.Component {
    state = {
        products:[],
        firstproduct:[],
        popUp:"",
        changeCartStyle:'cookie-display off',
        count:0,
        cartproduct:[],
        cookie:"",
        nocartmsg:"",
        blog:[],
        cartNum:0,
    }
    
    componentDidMount=()=>{
           fetch(window.location.href.substring(0,window.location.href.lastIndexOf("/"))+"/ajax/product.json").
           then(response=>response.json()).
           then(data=>this.load(data)).catch(err=>console.log(err))
       document.querySelector("body").onscroll=(e)=>{
           console.log(document.querySelector("body").scrollTop)
       }
       this.setState({count:JSON.parse(localStorage.getItem("cartpic")).length})
       if(localStorage.getItem("cartpic")!==null){
            this.setState({cartproduct:JSON.parse(localStorage.getItem("cartpic"))})
       }

        }
    load=(data)=>{
        this.setState({products:data})
           for(let k=0;k<8;k++){
            this.state.firstproduct.push(data.product[k])
           }
        
             this.setState({firstproduct:this.state.firstproduct});
        }
        loadAll=()=>{
            this.setState({cartNum:this.state.cartNum+20})
            let newLoad=[];

         if(this.state.products.product.length-this.state.cartNum>20){    
            if(this.state.products.product.length>50){
                for(let y=this.state.cartNum;y<this.state.cartNum+20;y++){
               newLoad.push(this.state.products.product[y])         
            }
                this.setState({firstproduct:newLoad});
            }
            else{
                this.setState({firstproduct:this.state.products.product});         
            }         
        }
            else{
            
                for(let y=this.state.cartNum;y<this.state.products.product.length;y++){
                    newLoad.push(this.state.products.product[y])         
                 }
                     this.setState({firstproduct:newLoad});
            }
        }
        rotateLeft=(e)=>{
            e.target.parentElement.children[0].style.display="none"
            setTimeout(()=>{
                e.target.parentElement.children[0].style.display="block";                
           e.target.parentElement.children[0].style.transform="rotateZ(-90deg)";
        },85)
        
        }
        rotateRight=(e)=>{
            e.target.parentElement.children[0].style.display="none"
            setTimeout(()=>{
                e.target.parentElement.children[0].style.display="block";                
           e.target.parentElement.children[0].style.transform="rotateZ(90deg)";
        },85)
         }
   cartAdd=(e)=>{
      
   this.setState({popUp:<div className="hanger">
        <img className="respond" src={e.target.src}></img>
        <button onClick={this.placecart} className="view-gallery">Add to Review Cart</button>
        <i onClick={this.rotateLeft} className="fa fa-rotate-left round"></i>
        <i onClick={this.rotateRight} className="fa fa-rotate-right round"></i>
        <span onClick={this.cancleCart} className="pop-remove">x</span>
   </div>})   
   }
   placecart=(e)=>{
       if(localStorage.getItem("cartpic")!==null){
       let check=0;
       for(let k=0;k<this.state.cartproduct.length;k++){
           if(e.target.parentElement.children[0].src===this.state.cartproduct[k]){
             check++;
        }
       }
       if(check<=0){
        this.state.cartproduct.push(e.target.parentElement.children[0].src)
        this.setState({cartproduct:this.state.cartproduct})
        localStorage.setItem("cartpic",JSON.stringify(this.state.cartproduct))
        this.setState({count:JSON.parse(localStorage.getItem("cartpic")).length})
    }
       else{
           alert("These item is already added to your cart")
       }
    }
   }
   cookiImgTurnR=(e)=>{
    e.target.parentElement.parentElement.children[0].style.display="none"; 
    setTimeout(()=>{
        e.target.parentElement.parentElement.children[0].style.display="block"; 
        e.target.parentElement.parentElement.children[0].style.transform="rotateZ(90deg)";
        },85)
}
cookiImgTurnL=(e)=>{
    e.target.parentElement.parentElement.children[0].style.display="none"; 
    setTimeout(()=>{
        e.target.parentElement.parentElement.children[0].style.display="block"; 
        e.target.parentElement.parentElement.children[0].style.transform="rotateZ(-90deg)";
        },85)

}
cookieDelete=(e)=>{
    let newcart=[];
    for(let x=0;x<this.state.cartproduct.length;x++){
        if(e.target.parentElement.parentElement.children[0].src!==this.state.cartproduct[x]){
          newcart.push(this.state.cartproduct[x])
      }
    }
    this.setState({cartproduct:newcart})
    localStorage.setItem("cartpic",JSON.stringify(newcart))
    this.setState({count:newcart.length})
     
    if(JSON.parse(localStorage.getItem("cartpic")).length==0){
        this.setState({nocartmsg:<h3 className="nocartmsg">NO CART ITEM </h3>})
   }
   else{
    this.setState({nocartmsg:""})
   }
}
   cancleCart=()=>{
    this.setState({popUp:""})
   }
   cartDisplay=()=>{
    this.setState({popUp:""})
       if(JSON.parse(localStorage.getItem("cartpic")).length==0){
            this.setState({nocartmsg:<h3 className="nocartmsg">NO CART ITEM </h3>})
       }
       else{
        this.setState({nocartmsg:""})
       }
       this.setState({changeCartStyle:"cookie-display"})

       var rotate=document.querySelectorAll(".rotate");
   }
   put=(data)=>{
      this.setState({blog:data})
   }
   Navigate=(e)=>{
       try{
       let target=e.target.parentElement.parentElement.children[0].src;
       fetch(e.target.parentElement.parentElement.children[0].src)
       .then(response=>response.blob)
       .then(data=>this.put(data))
       let blogfile=[
           new File(
               [this.state.blog],
               target.substring(target.lastIndexOf("/")+1),
               {
                   type:"image/jpg"
               }
           )
       ]
       console.log(blogfile)
    let toshare={
        title:window.document.title,
        text:"shared bedsheet image",
        url:window.document.location.href,
        files:blogfile
    };
    if(navigator.canShare(toshare) && navigator.canShare({files:blogfile})){
        console.log("done and dusted")
        if(navigator.canShare){
         navigator.share(toshare)   
        }
    }
    else{
        alert("please upgrade your browser to experience all our features ")
    }
}
catch(err){
    console.log("something went wromg");
}
}
offcart=()=>{
    this.setState({changeCartStyle:"cookie-display off"})
}
    render(){ 
        return <div className="flex mar-down">
     <div className={this.state.changeCartStyle}>
        <h4>cart</h4><span className="cookie-remove" onClick={this.offcart}>x</span>
        {this.state.nocartmsg}
    {this.state.cartproduct.map(e=><div key={e}>
        <img className="respond rotate" src={e}></img>
        
        <div>
            <span onClick={this.cookiImgTurnL} className="fa fa-rotate-left tools"></span>
            <span onClick={this.cookiImgTurnR} className="fa fa-rotate-right tools"></span>
            <span onClick={this.cookieDelete} className="fa fa-trash tools"></span>       
            <span onClick={this.Navigate} className="fa fa-share-alt tools"></span>       
        </div>
    </div>)}
  </div>

             {this.state.cookie}
           
           <h3 className="col-lg-10 col-md-11 colour-h1 avail">Available Stock</h3>
           {this.state.popUp}
           <div className="flex">
               <div className="col-md-11 col-lg-10 flex">
                 {
                 this.state.firstproduct.map(e=>
                    <div className="col-sm-6 col-md-3 avail-img" key={e.id}>
                    <img onClick={this.cartAdd} className="respond prod-img" src={e.img}></img>
                </div>
                    )
             }
           </div>
           <div className="col-md-10">
           <button onClick={this.backAll} className="view-gallery"><i className="fa fa-chevron-left"></i></button>
           <button onClick={this.loadAll} className="view-gallery back-roll"><i className="fa fa-chevron-right"></i></button>
           </div>
           </div>

           <div className="col-lg-10 col-md-11 services">
               <h4 className="col-lg-10 col-md-11 colour-h1">Our services Cut Accross </h4>
           
           <div className="flex">
                 <div className="col-md-4 service-col">
                   <b>Hospitals</b>
                   <h2>7+</h2>
                 </div>
                 <div className="col-md-4 service-col">
                   <b>Hotels</b>
                   <h2>15+</h2>
                 </div>
                 <div className="col-md-4 service-col">
                   <b>costomers</b>
                   <h2>2000+</h2>
                 </div>
           </div>
           </div>

           <span onClick={this.cartDisplay} className="cart"><i className="fa fa-shopping-basket"></i> <span>{this.state.count}</span></span>   

        </div>;
    }
}
 
export default Product;