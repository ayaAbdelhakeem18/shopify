import React from 'react';
import "../styling/cart.css";
import { myContext } from './App';
import empty from "../images/Empty.gif";


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
      <div className='cart'>
       <myContext.Consumer>
          {function(value){
            if(value.bigcart.length>0){
            priceAfterTaxes=value.bigcart.map((ele)=>{return ele.props.price*(0.21)}).reduce((acc,ele)=>{return acc+ele},0)
            quantity=value.bigcart[0].props.this.state.value
            total=value.bigcart.map((ele)=>{return ele.props.price}).reduce((acc,ele)=>{return acc+ele},0)*quantity+priceAfterTaxes}
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
            
                <span>Tax21%   :{"  "+priceAfterTaxes+" $"}</span> 
                <span>Quantity :{"  "+quantity}</span>
                <span>Total :{"  "+total+" $"}</span>
                <button className='order'>ORDER</button>
                </div>:null
                }
          </>
            )
          
          }}
        </myContext.Consumer>
        
       
      </div>
    )
  }
}
