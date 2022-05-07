import React from "react";
import "../styling/plp.css";
import {Link}from "react-router-dom";


class PLP extends React.Component {
 
    render() { 
      console.log()
        return (
<div className="plp">   
     <h1>Category name</h1>
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

</div>
        );
    }
}
 

export default PLP;