import React, { createRef } from "react";
import "../styling/nav.css";
import "../styling/mini-cart-product.css";
import logo from "../images/Group.png";
import cart from "../images/Empty Cart.png";
import currency from "../images/Group 1.png";
import {Link} from"react-router-dom";
import {connect} from "react-redux";
import { exchangeContext } from "./App";
import Pdp from "./pdp";
import { total_price } from '../features/cartslice';


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
     
    handlecartclick(){
    if(this.state.clicked===false){
    this.minicart.current.style.display="block";
    this.setState({style:<style >
      {`body::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 300vh;
        background: rgba(57, 55, 72, 0.22);
        left: 0;
        top: 78px;`}
             </style>})
      this.setState({clicked:true})  }
      else{
        this.cancelfunc();
        this.setState({clicked:false})
    };
    this.props.dispatch(total_price())
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
      let taxes= this.props.cart.total_price*0.21;

        return (
          <div className="nav"  >
         <ul className="nav-list"  >
        <Link   to="/" onClick={this.handleclick} > <li  className={window.location.pathname==="/"?"activ":""}>WOMEN</li></Link>
        <Link to="/men"onClick={this.handleclick} ><li  className={window.location.pathname==="/men"?"activ":""}>MEN</li></Link>
        <Link to="/kids"onClick={this.handleclick} ><li className={window.location.pathname==="/kids"?"activ":""}>KIDS</li></Link>
         </ul>
        <img  src={logo} className="logo" />
          {this.state.style} 
          <div className="icons" >
           <img src={currency} className="currency" onClick={this.handlecurrency}/>
           <div className="select" ref={this.currencyref}>
             <option onClick={this.props.usd}>$ USD</option>
             <option onClick={this.props.eur}>€ EURO</option>
             <option onClick={this.props.jpy}>¥ JPY</option>
           </div>
           
           <img src={cart} className="bag" onClick={this.handlecartclick} onDoubleClick={this.cancelfunc} />
           <span className="countpro">{this.props.cart.cartItems.length}</span> 

           <div className="mini-cart" ref={this.minicart}  >
           
           <div className="heading">
              <h3>My Bag :</h3>{this.props.cart.cartItems.length+ " Items"} 
              </div>
             <exchangeContext.Consumer>
              {(v)=>{return(
              <div className="products">
            {this.props.cart.cartItems.length>0?
            <>
             {this.props.cart.cartItems.map((ele,ind)=>{
              return(
              <Pdp key={ind} class="mini-cart-pro" category={ele.category} name={ele.name} price={ele.price} mainImage={ele.mainImage} id={ele.id} available_colors={ele.available_colors} available_sizes={ele.available_sizes} selected_color={ele.selected_color} selected_size={ele.selected_size} imgs={ele.imgs}/>
              )
             })}
             <div className="total" >Total <span>{" "+v.currency+Math.ceil((this.props.cart.total_price)*v.EXR+taxes)}</span></div>
             <div className="buttons">
               <Link to="/cart"><button>VIEW BAG</button></Link>
               <button>CHECK OUT</button>
               </div>
             </>
             :<div className="empty_cart">your Cart is empty</div>
            }
             </div>)}}
             </exchangeContext.Consumer> 

             </div>
           </div>
          </div>
           
        );
    }
}

function mapStateToProps(store) {
  return { 
          cart:store.cart,
          }
  }
     
    
  export default connect(mapStateToProps)(Nav)