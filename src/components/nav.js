import React, { createRef } from "react";
import "../styling/nav.css";
import "../styling/mini-cart-product.css";
import logo from "../images/Group.png";
import cart from "../images/Empty Cart.png";
import currency from "../images/Group 1.png";
import{Link} from"react-router-dom";
import { myContext } from './App';
import{change_currency}from "../graphql/queries";
import {Query} from "@apollo/client/react/components";

export let exchangeContext=React.createContext();

class Nav extends React.Component {
    constructor(props){
      super(props);
      this.handleclick=this.handleclick.bind();
      this.handlecartclick=this.handlecartclick.bind(this);
      this.cancelfunc=this.cancelfunc.bind(this);
      this.minicart=createRef();
      
      this.state={
        style:"",
        clicked:false,
        exchange_rate:2,
        currency:"EUR"
      }
    }
    
     handleclick(event){
      let children=event.target.parentElement.parentElement.children;
      for(let x=0;x<children.length;x++){
        children[x].children[0].classList.remove("activ");
    };
      event.target.classList.add("activ");  
        
     }
     
    handlecartclick(event){
    if(this.state.clicked===false){
    this.minicart.current.style.display="block";
    this.setState({style:<style >
      {`body::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 200%;
        background: rgba(57, 55, 72, 0.22);
        left: 0;
        top: 78px;`}
             </style>})
      this.setState({clicked:true})  }
      else{
        this.cancelfunc();
        this.setState({clicked:false})
    }
  }
  cancelfunc(){
  this.minicart.current.style.display="none";
    this.setState({style:""})
  }
  

    
  
    render() { 
        return (
          <exchangeContext.Provider value={{text:"hello"}}>
         <Query query={change_currency}  >
          {({error,data})=>{
            if(error){
              return <div>Error...</div>
            }
            return(

        <div className="nav"  >
         <ul className="nav-list"  >
        <Link   to="/"> <li onClick={this.handleclick} className="activ" >WOMEN</li></Link>
        <Link to="/men"><li onClick={this.handleclick} >MEN</li></Link>
        <Link to="/kids"><li onClick={this.handleclick}>KIDS</li></Link>
         </ul>
        <img  src={logo} className="logo" />
           
          <div className="icons" >
            {this.props.countproducts}
           <img src={currency} className="currency"/>
           <div className="select">
             <option onClick={()=>{this.setState({exchange_rate:data.latest[1].quote});this.setState({currency:"USD"})}}>$ USD</option>
             <option onClick={()=>{this.setState({exchange_rate:1});this.setState({currency:"EUR"})}}>€ EURO</option>
             <option onClick={()=>{this.setState({exchange_rate:data.latest[0].quote});this.setState({currency:"JPY"})}}>¥ JPY</option>
           </div>
           <img src={cart} className="bag" onClick={this.handlecartclick} onDoubleClick={this.cancelfunc} />
           
           <div className="mini-cart" ref={this.minicart}  >
           {this.state.style}
           <myContext.Consumer>
           {function(value){
           return (
           <><div className="heading">
             <h3>My Bag :</h3>{value.minicart.length+ " Items"}
             </div> 
             <div className="products">
          
             <div>{value.minicart.map((el) => el)}</div>
            </div>
            {value.minicart.length>1?<div className="total">Total <span>{value.minicart.reduce(function(acc,ele){return acc+ele.props.price},0)+"$"}</span></div>:value.minicart.length===0?<div className="empty">YOUR BAG IS EMPTY</div>:<div className="total">Total <span>{value.minicart[0].props.price+"$"}</span></div>}
          
            </>)
          }}
             
             </myContext.Consumer>
             <div>
               <div className="buttons">
               <Link to="/cart"><button>VIEW BAG</button></Link>
               <button>CHECK OUT</button>
               </div>
             </div>
           </div>
          </div>
        </div>
            )
          }}
               
        
        </Query>
        </exchangeContext.Provider>
        );
    }
}

export default Nav;