import React from 'react';
import "../styling/cart.css";
import { myContext } from './App';
import Pdp from './pdp';
import two from "../images/2.png";


export default class Cart extends React.Component {
constructor(props){
super(props);

} 
state={
products:[],

  }

  render() {
   
     return (
      <div className='cart'>
       <h1 >Cart</h1>
       <myContext.Consumer>
       {(value)=> {
         
         return (
         console.log(value.s)
       )}}
       </myContext.Consumer>
      <div className='info'>
         <span>Tax21% :</span>
         <span>Quantity :</span>
         <span>Total :</span>
       </div>
       <button className='order'>ORDER</button>
      </div>
    )
  }
}
