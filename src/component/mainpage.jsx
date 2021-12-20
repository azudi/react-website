import React, { Component } from 'react';
import Header from './header';
import Product from "./product";
import OtherProduct from "./otherProduct";
import Footer from "./footer"

class Mainpage extends React.Component {
    render() { 
        return <div>
            <Header></Header>
            <Product></Product>
            <OtherProduct></OtherProduct>
            <Footer></Footer>
        </div>;
    }
}
 
export default Mainpage;