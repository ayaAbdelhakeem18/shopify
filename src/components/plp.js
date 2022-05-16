import React from "react";
import "../styling/plp.css";
import {Link}from "react-router-dom";
import { exchangeContext } from "./App";



class PLP extends React.Component {
 
    render() { 
        return (
<exchangeContext.Consumer>
  {(value)=>{
   console.log(value.EXR)
    return(
    <div className="plp">   
    <h1>Category name</h1>

      <div className="products-list">
      {this.props.gender.map(function(ele,ind){
         return(
           ind===2?<div key={ind} className="product">
           <img src={ele.img} width="354px" height="330px"/>
           <p> {ele.name}</p>
           <p> {Math.ceil(ele.price*value.EXR) +" "+value.currency}</p>
        </div>  :
          <Link to={ ele.link}>
           <div key={ind} className="product">
              <img src={ele.img} width="354px" height="330px"/>
              <p> {ele.name}</p>
              <p> {Math.ceil(ele.price*value.EXR) +" "+value.currency}</p>
           </div>
          </Link>
         
       )
      })}
     </div>
 
    </div>
)
  }}
     
</exchangeContext.Consumer>    
        );
    }
}
 

export default PLP;