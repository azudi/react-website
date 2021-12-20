import React, { Component } from 'react';
import {Link} from "react-router-dom";
import OtherGallery from './otherGallery';
import Footer from "./footer";
class Blog extends React.Component {
    state={
       name:"BLOG"
    }
    render() { 
        return <div className="section">
            <OtherGallery headername={this.state.name}></OtherGallery>

            <div className="flex galleryarticle">
                <h1 className="col-md-11">Great <span>Healthly</span> Food Tips and <span>Health effect</span></h1>
                <p class="col-md-11">  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
                    which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
</p>
            </div>

            <div className="flex blog-main">
               <div className="col-md-4 col-lg-3 blog-main-div">
                   <img class="respond" src="pics/food2.jpg"></img>
                   <b>snack-berry</b>
                   <p>
                   To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
                    To take a trivial example,<br></br><br></br>
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
 
                   </p>
                     <button className="reply">dislike <i className="fa fa-thumbs-down"></i></button>
                     <button className="like">Like <i className="fa fa-thumbs-up"></i></button>
                   </div>

                   <div className="col-md-4 col-lg-5 blog-main-div">
                   <img class="respond" src="pics/dish3.jpg"></img>
                   <b>Hand-bugger</b>
                   <p>
                   To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has.<br></br><br></br>
                    any right to find fault with a man who chooses to enjoy To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy.
                    To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
 
                   </p>
                   <button className="reply">dislike <i className="fa fa-thumbs-down"></i></button>
                     <button className="like">Like <i className="fa fa-thumbs-up"></i></button>
                   </div>


                   <div className="col-md-4 col-lg-3 blog-main-div">
                   <img className="respond" src="pics/food.jpg"></img>
                   <b>Sponge-cake</b>
                   <p>
                   To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy.
                    To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has<br></br><br></br>
                    any right to find fault with a man who chooses to enjoy  To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                    except to obtain some advantage from it? But who has
                    any right to find fault with a man who chooses to enjoy
 
                   </p>
                   <button className="reply">dislike <i className="fa fa-thumbs-down"></i></button>
                     <button className="like">Like <i className="fa fa-thumbs-up"></i></button>
                   </div>

            </div>
                   <div className="flex"><div className="col-md-11 flex">
                     <h3 className="col-12 other-header">Other Section</h3>
                     <div className="col-md-4 col-md-3 flex subtitle">
                        <div className="col-4"><img src="pics/food.jpg" alt="subtitle food content" className="respond"></img></div>
                        <div className="col-8">
                       <p> advantage from it But who has  
                    any right to find fault </p>
                        </div>
                     </div>

                     <div className="col-md-4 col-md-3 flex subtitle">
                        <div className="col-4"><img src="pics/cafe.jpeg" alt="subtitle food content" className="respond"></img></div>
                        <div className="col-8">
                       <p> advantage from it But who has
                    any right to find fault </p>
                        </div>
                     </div>

                     <div className="col-md-4 col-md-3 flex subtitle">
                        <div className="col-4"><img src="pics/dish3.jpg" alt="subtitle food content" className="respond"></img></div>
                        <div className="col-8">
                       <p> advantage from it But who has
                    any right to find fault </p>
                        </div>
                     </div>

                     <div className="col-md-4 col-md-3 flex subtitle">
                        <div className="col-4"><img src="pics/dish2.jpg" alt="subtitle food content" className="respond"></img></div>
                        <div className="col-8">
                       <p> advantage from it But who has
                    any right to find fault </p>
                        </div>
                     </div>

                     <div className="col-md-4 col-md-3 flex subtitle">
                        <div className="col-4"><img src="pics/food2.jpg" alt="subtitle food content" className="respond"></img></div>
                        <div className="col-8">
                       <p> advantage from it But who has
                    any right to find fault </p>
                        </div>
                     </div>

                     </div>
                   </div>

            <Footer></Footer>


        </div>;
    }
}
 
export default Blog;