import React, { Component } from 'react';
import Footer from './footer';
import OtherGallery from "./otherGallery";
class Privacy extends Component {
    state = {  
        name:"PRIVACY POLICY",
    }
    
    render() { 
        return ( 
            <div className="cancle-out">
                <OtherGallery headername={this.state.name} />
                 <div className="flex policy">
                     <div className=" flex col-md-10 col-lg-9">
                    <h2 className="col-sm-12">PRIVACY</h2>
                    <p className="col-md-6">
                    Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it
            is pleasure
                    </p>
                        <p className="col-md-6">
                    Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it
            is pleasure
                    
                    </p>
                    </div>

                    <div className=" flex col-md-10 col-lg-9">
                    <h2 className="col-sm-12">POLICY</h2>
                    <p className="col-md-6">
                    Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it
            is pleasure
                    </p>
                        <p className="col-md-6">
                    Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it
            is pleasure
                    
                    </p>
                    </div>
                    <div className=" flex col-md-10 col-lg-9">
                    <h2 className="col-sm-12">TERMS AND CONDITION</h2>
                    <p className="col-md-12">
                    Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it
            is pleasure
                   
                    Right must explain to you how all this mistaken idea
            of denouncing pleasure and praising pain was born and I
            will give you a complete account of the system, and
            expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness. No
            one rejects, dislikes, or avoids pleasure itself, because it
            is pleasure
                    
                    </p>
                    <div className="remember terms">
                             <input onChange={this.alert} className="checker" type="checkbox"></input><span> Accept to all terms and conditions</span>
                         </div>

                    </div>

                    
                 </div>
                 
                <Footer/>
            </div>
         );
    }
}
 
export default Privacy;