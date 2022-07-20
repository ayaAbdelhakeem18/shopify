import React from 'react';
import "../styling/cart.css";
import empty from "../images/Empty.gif";
import { exchangeContext } from './App';
import { connect } from "react-redux";
import Pdp from './pdp';
import { total_quantity,total_price } from '../features/cartslice';

export  class Cart extends React.Component {
constructor(props){
super(props);

}
componentDidMount(){
  this.props.dispatch(total_quantity())
  this.props.dispatch(total_price())

}

render() {
let taxes= this.props.cart.total_price*0.21;
console.log(this.props.cart.total_price)
return (
<exchangeContext.Consumer>
{(v)=>{return(
<div className='cart'>
{this.props.cart.cartItems.length===0? 
<div className='empty-cart'>
  <img src={empty}/>
  <h2>your cart is empty</h2>
  <p>Looks like you have not added anything to your cart, Go ahead and explore top categories</p>
</div>:
<div>
<h1 >Cart</h1>
{this.props.cart.cartItems.map((ele,ind)=>{
return(
<Pdp key={ind} class="product-cart" category={ele.category} name={ele.name} price={ele.price} mainImage={ele.mainImage} id={ele.id} available_colors={ele.available_colors} available_sizes={ele.available_sizes} selected_color={ele.selected_color} selected_size={ele.selected_size} imgs={ele.imgs}/>)  
})}
<div className='info'>
<span>Tax21%{`  ${v.currency}${Math.ceil(taxes * v.EXR)}`}</span> 
<span >Quantity :{" "+this.props.cart.total_quantity}</span> 
<span >Total :{" "+v.currency+Math.ceil((this.props.cart.total_price)*v.EXR+taxes)}</span>
<button className='order'>ORDER</button>
</div>
</div>
}
</div>)}}
</exchangeContext.Consumer> 
)
}
}

function mapStateToProps(store) {
  return { products:store.products,
           cart:store.cart,
          }
  }
     
    
  export default connect(mapStateToProps)(Cart)
  