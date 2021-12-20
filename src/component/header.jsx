import React, { useState } from 'react';
import jQuery from 'jquery';
class Header extends React.Component {
state={
    show:"fa fa-chevron-up upper"
}
componentDidMount=()=>{
    window.onscroll=()=>{
        if(window.scrollY<document.querySelector("body").clientHeight/2.35){
            this.setState({show:"fa fa-chevron-up upper"})
        }
        else{
            this.setState({show:"fa fa-chevron-up upper noupper"})
            console.log("alert")
        }
      }
}
    scrollUp=()=>{
        window.scrollTo(0,0)
    }
    render() { 
        return <div>
        <div className="text-center relative header flex">
            <div className="cover-head"></div>
            <h1 className="col-md-12">fabulous store</h1>
            <p className="col-md-6">Our store is entitled to bring the best design to any interior keeping 
                comfortability our motto. from beddings to other 
                interior design
            </p>
            <i className="col-md-12"><i className="fa fa-phone"></i> +234 703 735 2463</i>
        </div><br></br><br></br><br></br>
        <div className="flex align-center">
            <div className="col-md-4 col-lg-3">
               <h1 className="colour-h1 liner">OUR WORK</h1>
            </div>
            <div className="col-md7 col-lg-7 flex">
                   <div className=" col-md-6 work-div pillow">
                        <h3>pillow</h3>
                   </div>
                   <div className=" col-md-6 work-div duvet-cover">
                        <h3>Duvet</h3>
                   </div>
                   <div className=" col-md-6 work-div bedsheet">
                        <h3>Bedspread</h3>
                   </div>
                   <div className=" col-md-6 work-div throw-pillows">
                        <h3>Throw-pillow</h3>
                   </div>
                   <div className=" col-md-6 work-div duvet">
                        <h3>duvet-cover</h3>
                   </div>
                 
            </div>
        </div>
        <br></br><br></br><br></br>
        <span onClick={this.scrollUp} className={this.state.show}></span>
        </div>;
    }
}
 
export default Header;