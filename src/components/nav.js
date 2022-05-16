import React, { createRef } from "react";
import "../styling/nav.css";
import "../styling/mini-cart-product.css";
import logo from "../images/Group.png";
import cart from "../images/Empty Cart.png";
import currency from "../images/Group 1.png";
import{Link} from"react-router-dom";
import { myContext } from './App';
import { exchangeContext } from "./App";



class Nav extends React.Component {
    constructor(props){
      super(props);
      this.handleclick=this.handleclick.bind();
      this.handlecartclick=this.handlecartclick.bind(this);
      this.cancelfunc=this.cancelfunc.bind(this);
      this.handlecurrency=this.handlecurrency.bind(this);

      this.minicart=createRef();
      this.currencyref=createRef();
      
      
      this.state={
        style:"",
        clicked:false,
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
  handlecurrency(){
    if(this.state.clicked===false){
      this.currencyref.current.style.display="block"
      this.setState({clicked:true}) 
    }
    else{
      this.currencyref.current.style.display="none";
      this.setState({clicked:false})
    }
  
  
  }

    
  
    render() { 
        return (
        
<myContext.Consumer>{(value)=>{return(<>
  <div className="nav"  >
         <ul className="nav-list"  >
        <Link   to="/ayaAbdelhakeem18/shopify.git"> <li onClick={this.handleclick} className="activ" >WOMEN</li></Link>
        <Link to="/men"><li onClick={this.handleclick} >MEN</li></Link>
        <Link to="/kids"><li onClick={this.handleclick}>KIDS</li></Link>
         </ul>
        <img  src={logo} className="logo" />
           
          <div className="icons" >
            {this.props.countproducts}
           <img src={currency} className="currency" onClick={this.handlecurrency}/>
           <div className="select" ref={this.currencyref}>
             <option onClick={this.props.usd}>$ USD</option>
             <option onClick={this.props.eur}>€ EURO</option>
             <option onClick={this.props.jpy}>¥ JPY</option>
           </div>
           
           <img src={cart} className="bag" onClick={this.handlecartclick} onDoubleClick={this.cancelfunc} />
          {value.minicart.length>0?<span className="countpro">{value.minicart.length}</span>:""} 
           
           <div className="mini-cart" ref={this.minicart}  >
           {this.state.style}
           
           <div className="heading">
             <h3>My Bag :</h3>{value.minicart.length+ " Items"}
             </div> 
             <div className="products">
          
             <div>{value.minicart.map((el) => el)}</div>
            </div>
            <exchangeContext.Consumer>
              {(v)=>{return(<>
                {value.minicart.length>1?<div className="total">Total <span>{value.minicart.reduce((acc,ele)=>{return Math.ceil(ele.props.price*v.EXR)+acc},0)+v.currency}</span></div>:value.minicart.length===0?<div className="empty">YOUR BAG IS EMPTY</div>:<div className="total">Total <span>{Math.ceil(value.minicart[0].props.price*v.EXR)+v.currency}</span></div>}
              </>)}}
            </exchangeContext.Consumer>
            
             <div>
               <div className="buttons">
               <Link to="/cart"><button>VIEW BAG</button></Link>
               <button>CHECK OUT</button>
               </div>
             </div>
           </div>
          </div>
        </div>
</>)}}</myContext.Consumer>
       
           
        );
    }
}

export default Nav;