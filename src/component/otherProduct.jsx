import React, { Component } from 'react';
class OtherProduct extends React.Component {
    render() { 
        return <div className=" flex">
              <div className="col-12 flex">
                       <h3 className="col-lg-10 col-md-11 colour-h1 line-down">Special Available Stock</h3>
                  <div className="col-sm-6 col-md-4 flex special-product">
                   <div className="col-5">
                      <img className="respond" src="pics/other-pics/Elasticated-White-Bed-Sheet-Design.jpg"></img>
                   </div>
                   <div className="col-7"><h5>White bedspread</h5>
                   <p>
                       We sell all sorts of white ranging from strips-white,
                       designers-white, and plane white with quality next to none
                  </p></div>
               </div>

               <div className="col-sm-6 col-md-4 flex special-product">
                   <div className="col-5">
                      <img className="respond" src="pics/other-pics/coloured-bedsheet.jpg"></img>
                   </div>
                   <div className="col-7"><h5>colour bedspread</h5>
                   <p>
                       All colour of italian bedsheet with top notch quality 
                       forieng texture 
                  </p></div>
               </div>
               
               <div className="col-sm-6 col-md-4 flex special-product">
                   <div className="col-5">
                      <img className="respond" src="pics/other-pics/forieng-trow-pillow.jpg"></img>
                   </div>
                   <div className="col-7"><h5>Foreign throw-pillow</h5>
                   <p>
                       We have throw pillow of local made and foreign
                       made available based on costumer request
                      </p></div>
               </div>

               <div className="col-sm-6 col-md-4 flex special-product">
                   <div className="col-5">
                      <img className="respond" src="pics/other-pics/white-towel.jpg"></img>
                   </div>
                   <div className="col-7"><h5>White towel</h5>
                   <p>
                       Our towel is one of it's foreign kind with high durability
                       and best texture  
                      </p></div>
               </div>

               
               <div className="col-sm-6 col-md-4 flex special-product">
                   <div className="col-5">
                      <img className="respond" src="pics/other-pics/bail.jpg"></img>
                   </div>
                   <div className="col-7"><h5>Bails</h5>
                   <p>
                       We distribute bail with latest designs to anyone around the world 
                       at cheap price
                      </p></div>
               </div>
            </div>
        </div>;
    }
}
 
export default OtherProduct;