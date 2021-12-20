import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './bootstrap.css';
import Orders from './component/orders';
import Gallery from "./component/gallery";
import { BrowserRouter as Router, Switch ,Route, BrowserRouter} from "react-router-dom";
import Login from "./component/login-food";
import Cart from "./component/cart"
import Signup from "./component/signup"
import Privacy from "./component/privacy";
import Location from "./component/location";
import Blog from "./component/blog";
import {Redirect} from "react-router-dom";
import ChefMaster from "./component/chefMaster";
import ProductChef from "./component/productChef"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter
     // basename={window.location.pathname || ''}
     >
      <Switch>
     <Route path="/" exact component={Orders}/>
         
     <Route path="/gallery" exact component={Gallery}/>
     <Route path="/login" exact component={Login}/>
     <Route path="/cart" exact component={Cart}/>
     <Route path="/chefmaster" exact component={ChefMaster}/>
     <Route path="/property" exact component={ProductChef}/>
     <Route path="/signup" exact component={Signup}/>
     <Route path="/privacy" exact component={Privacy}/>
     <Route path="/location" exact component={Location}/>
     <Route path="/blog" exact component={Blog}/>
     </Switch>
     </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
