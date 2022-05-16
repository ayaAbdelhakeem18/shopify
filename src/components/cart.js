import React from 'react';
import "../styling/cart.css";
import { myContext } from './App';
import empty from "../images/Empty.gif";
import { exchangeContext } from './App';

export default class Cart extends React.Component {
constructor(props){
super(props);

this.state={
products:[],  
priceAfterTaxes:0,
quantity:0,
total:0,
}
}
  render() {
    let priceAfterTaxes="";
    let quantity="";
    let total="";
     return (
      <exchangeContext.Consumer>
        {(v)=>{return(
 <div className='cart'>
 <myContext.Consumer>
    {(value)=>{
      if(value.bigcart.length>0){
      priceAfterTaxes=value.bigcart.map((ele)=>{return Math.ceil(ele.props.price*v.EXR)*(0.21)}).reduce((acc,ele)=>{return acc+ele},0)
      quantity=value.quantity+value.bigcart.length
      total=value.bigcart.map((ele)=>{return Math.ceil(ele.props.price*v.EXR)}).reduce((acc,ele)=>{return acc+ele},0)*quantity+priceAfterTaxes}
      return (
      
    <>
   {value.bigcart.length>0? <h1 >Cart</h1>:<div className='empty-cart'>
            <img src={empty}/>
            <h2>your cart is empty</h2>
            <p>Looks like you have not added anything to your cart, Go ahead and explore top categories</p>
            </div>}
  
   
      <div>{value.bigcart.map((el) => el)}</div> 
    {value.bigcart.length>0?
    <div className='info'>
      
          <span>Tax21%   :{"  "+priceAfterTaxes+" "+v.currency}</span> 
          <span>Quantity :{"  "+quantity}</span>
          <span>Total :{"  "+total+" "+v.currency}</span>
          <button className='order'>ORDER</button>
          </div>:null
          }
    
   
    
    </>
      )
    
    }}
  </myContext.Consumer>
  
 
</div>
        )}}
      </exchangeContext.Consumer> 
    )
  }
}
