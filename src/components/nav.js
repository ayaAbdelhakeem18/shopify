import React, { createRef } from "react";
import "../styling/nav.css";
import logo from "../images/Group.png";
import cart from "../images/Empty Cart.png";
import currency from "../images/Group 1.png";
import{Link} from"react-router-dom";

class Nav extends React.Component {
    constructor(props){
      super(props)
      this.handleclick=this.handleclick.bind();
    }
    state = { 
      class:"activ"
     } 
     handleclick(event){
      let children=event.target.parentElement.parentElement.children;
      for(let x=0;x<children.length;x++){
        children[x].children[0].classList.remove("activ");
    };
      event.target.classList.add("activ");  
        
     }
    render() { 
        return (
        <div className="nav">
         <ul className="nav-list"  >
        <Link   to="/"> <li onClick={this.handleclick} className="activ" >WOMEN</li></Link>
        <Link to="/men"><li onClick={this.handleclick} >MEN</li></Link>
        <Link to="/kids"><li onClick={this.handleclick}>KIDS</li></Link>
         </ul>
        <img  src={logo} className="logo" />
          <div className="icons">
           <img src={currency} className="currency"/>
           <Link to="/cart"><img src={cart}/></Link>
          </div>
        </div>
        );
    }
}
 
export default Nav;