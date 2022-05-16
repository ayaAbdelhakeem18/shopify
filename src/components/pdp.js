import React, { createRef } from "react";
import { myContext } from "./App";
import "../styling/productPage.css";
import "../styling/productCart.css"
import grey from "../images/2.png";
import black from"../images/black.webp";
import offwhite from"../images/off white.webp";
import { exchangeContext } from "./App";

export default class Pdp extends React.Component {
    constructor(props){
      super(props);
      this.handleSizeClick=this.handleSizeClick.bind(this);
      this.handleColorClick=this.handleColorClick.bind(this);
      this.handleImgClick=this.handleImgClick.bind(this);
      this.onChange=this.onChange.bind(this);
      this.handleremove=this.handleremove.bind(this) 
     this.myRef=createRef();


    this.state={
        product_img:this.props.img,
        product_name:this.props.name,
        price:this.props.price,
        description:this.props.description,
        size:null,
        color:null,
        elevalue:1,
    }
    }
    

  handleSizeClick=(event)=>{
      if(event.target.innerText!=="S"){
      let children=event.target.parentElement.children;
       for(let x=0;x<children.length;x++){
           children[x].style.backgroundColor="white";
           children[x].style.color="black";
       };
   this.setState({size :event.target.innerText });
    event.target.style.backgroundColor="black";
    event.target.style.color="white";
    console.log(event)};

  }
  handleColorClick(event){
  
    let children=event.target.parentElement.children;
       for(let x=0;x<children.length;x++){
           children[x].style.border="none";
       };
    event.target.style.border="2px solid black";
   this.setState({color :event.target.className });
   if(event.target.className==="black"){
       this.setState({product_img:black})
   }
   else if(event.target.className==="offwhite"){
       this.setState({product_img:offwhite})
   }
   else{this.setState({product_img:grey})}
    
}
handleImgClick(event){
    let children=event.target.parentElement.children;
       for(let x=0;x<children.length;x++){
           children[x].style.border="none";
       };
    this.myRef.current.src=event.target.src;
    event.target.style.border="1px solid grey";

}
onChange(event){
event.preventDefault();
this.setState({elevalue:event.target.value});
}
handleremove(e){
     
if(window.confirm("Are you sure you want to remove this item from your cart?")){e.target.parentElement.parentElement.parentElement.style.display = "none";};
 
}

  render() {
      const size=["XS","S","M","L"] ;
      const f=this.handleSizeClick;  
    return (
        <myContext.Consumer>
           {(value)=>{return(
               <div className={this.props.class}>
       
               <div className="flex-box">
               <div className='product-image'>
                   <div className='images-column'>
                       <img src={this.state.product_img} onClick={this.handleImgClick} />
                       <img src={this.state.product_img} onClick={this.handleImgClick}/>
                       <img src={this.state.product_img} onClick={this.handleImgClick}/>
                   </div>
                   <div className='big-image' >
                       <img src={this.state.product_img} ref={this.myRef}/>
                   </div>
               </div>
               <form>
                <button onClick={(e)=>{e.preventDefault();this.setState({elevalue:this.state.elevalue+1});value.incr()}}>+</button>   
               <input type="number" className="quantity" value={this.state.elevalue} onChange={this.onChange}/>
               <button  onClick={(e)=>{
                   if(this.state.elevalue===1){
                       if(window.confirm("Are you sure you want to remove this item from your cart?"))
                       {e.target.parentElement.parentElement.parentElement.style.display = "none";value.dcr()}
                    }
                        else{this.setState({elevalue:this.state.elevalue-1}) ;value.dcr();}
                         e.preventDefault();
                         }}>-</button>   
               </form>
               </div>
               <div className='product-description'>
                   <span className="brand-name">Apollo</span>
                   <h3>{this.state.product_name}</h3>
                  <exchangeContext.Consumer>
                      {(value)=>{return (
                          <>
                           <span className="cart-price">{Math.ceil(this.state.price*value.EXR) +value.currency}</span>
                           <div className="size">
                               <span>size:</span>
                               <ul>
                                   {size.map(function(ele,ind){
                                       return(<li key={ind} onClick={f} >{ele }</li>)
                                   } )}
                               </ul>
                           </div>
                           <span className="color-span">Color:</span>
                           <div className="color">
                               <div className="grey" onClick={this.handleColorClick}></div>
                               <div className="black" onClick={this.handleColorClick} ></div>
                               <div className="offwhite" onClick={this.handleColorClick} ></div>
                           </div>
                           <div className="price">
                           <span> price:</span>
                           <p>{Math.ceil(this.state.price*value.EXR) +value.currency}</p>
                           </div>
                           </>
                      )}}
                  
                   </exchangeContext.Consumer>
                  
                  <div className="add-to-cart"  onClick={()=>{ value.fG(this) ;value.fM(this.props)}}>
                      ADD TO CART
                   </div> 
                   <p className="description">
                         {this.state.description}
                   </p>
               </div>
             </div>
           )}}
       
      </myContext.Consumer>
    )
  }
}
