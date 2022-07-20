import React from "react";
import "../styling/plp.css";
import {Link}from "react-router-dom";
import { exchangeContext } from "./App";


class PLP extends React.Component {
 
  render() {
  return ( 
    
     
<exchangeContext.Consumer> 
 {(value)=>{
     return(
      <div className="plp">  
        <h1>Category name</h1>
        <div className="products-list">
          {this.props.gender.map((ele,ind)=>{
            return(
            ele.availability==true?
            <Link to={ ele.link} key={ind}>
            <div className="product">
            <img  src={ele.img} width="354px" height="330px"/>
            <p > {ele.name}</p>
            <p > {Math.ceil(ele.price*value.EXR) +" "+value.currency}</p>
            </div>
            </Link>
           :<div key={ind} className="out-of-stock product">
           <img  src={ele.img} width="354px" height="330px"/>
           <p > {ele.name}</p>
           <p > {Math.ceil(ele.price*value.EXR) +" "+value.currency}</p>
           </div> )
          } )}
        </div>
      </div>
    )
   }}
</exchangeContext.Consumer>     

    );
  }
}
 
export default PLP;
