import React from "react";
import "../styling/plp.css";
import {Link}from "react-router-dom";
import {exchangeContext}from"./nav";



class PLP extends React.Component {
 
    render() { 
        return (
     <div className="plp">   
     <h1>Category name</h1>
     <exchangeContext.Consumer>
       {(value)=>{
         console.log(value)
         return(
       <div className="products-list">
       {this.props.gender.map(function(ele,ind){
          return(
            ind===2?<div key={ind} className="product">
            <img src={ele.img} width="354px" height="330px"/>
            <p> {ele.name}</p>
            <p> {ele.price+"$"}</p>
         </div>  :
           <Link to={ ele.link}>
            <div key={ind} className="product">
               <img src={ele.img} width="354px" height="330px"/>
               <p> {ele.name}</p>
               <p> {ele.price+"$"}</p>
            </div>
           </Link>
          
        )
       })}
  </div>
   )}}
       
  </exchangeContext.Consumer>  
</div>
        );
    }
}
 

export default PLP;