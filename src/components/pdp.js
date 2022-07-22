import React,{createRef} from "react";
import "../styling/productPage.css";
import "../styling/productCart.css";
import "../styling/mini-cart-product.css"
import { exchangeContext } from "./App";
import { connect } from "react-redux";
import {chosenItem,addtocart,quantityIncr,quantityDecr,total_quantity,total_price,removeFromCart} from "../features/cartslice";

 class Pdp extends React.Component {
    constructor(props){
      super(props);
      this.myRef=createRef();
      this.elementsRef=createRef();
      this.ImgRef=createRef();
      this.handleSizeClick=this.handleSizeClick.bind(this);
      this.handleImgClick=this.handleImgClick.bind(this);
      this.onChange=this.onChange.bind(this);
      this.handlecolorclick=this.handlecolorclick.bind(this)
      this.addtocart=this.addtocart.bind(this)
      this.current=this.current.bind(this)
      this.Increament=this.Increament.bind(this)
      this.decrement=this.decrement.bind(this)
      this.removeFromCart=this.removeFromCart.bind(this)

    this.state={
         available_sizes:this.props.class==="product-page"?this.props.available_sizes[0]:this.props.available_sizes,        
         available_colors:this.props.available_colors,
         selected_color:this.props.class==="product-page"?this.props.available_colors[0]:this.props.selected_color,
         selected_size:this.props.selected_size?this.props.selected_size:null,
         mainImg:this.props.mainImage,
         imgs:this.props.class==="product-page"?this.props.imgs[0]:this.props.imgs,
         elevalue:1,
    }
}

current(){  
    let ele=""
    if (this.props.category==="women"){ele=this.props.products.value.women.find(x=>x.id==this.props.id)}
    else if (this.props.category==="men"){ele=this.props.products.value.men.find(x=>x.id==this.props.id)}
    else {ele=this.props.products.value.kids.find(x=>x.id==this.props.id)} 
return ele;
}

handlecolorclick(e,ele){
    const mypromise=new Promise((resolve)=>{
    resolve(this.setState({color:ele}))
}).then(()=>{
    this.setState({
        mainImg:this.current().colors[this.state.color].img[0],
        imgs:this.current().colors[this.state.color].img,
        available_sizes:this.current().colors[this.state.color].sizes
    })})

for(let i=0;i<this.elementsRef.current.parentElement.childNodes.length;i++){
    e.target.parentElement.childNodes[i].id=""
}
e.target.id="selected-color"
}

handleSizeClick=(event)=>{
    this.setState({selected_size :event.target.innerText });
   }

handleImgClick(event){
let children=this.ImgRef.current.parentElement.children;

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
Increament(e){
    e.preventDefault();
    this.setState({elevalue:this.state.elevalue+1})
    this.props.dispatch(quantityIncr(this.props.id)) 
    this.props.dispatch(total_quantity())
    this.props.dispatch(total_price())
}
decrement(e){
    e.preventDefault();
    this.setState({elevalue:this.state.elevalue-1})
    this.props.dispatch(quantityDecr(this.props.id))
    this.props.dispatch(total_quantity())
    this.props.dispatch(total_price())
}

addtocart(){
if(this.state.selected_size==null){
    alert("please choose size")
}
else{
    if(this.props.cart.cartItems.length>0){
    let cart= this.props.cart.cartItems ;
    let result = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id==this.props.id) {
            result = true;
            break;
        }
    } 
     result==true?alert("Your Item is already in the cart"):
       new Promise((resolve)=>{
        resolve( this.props.dispatch(chosenItem({
            id:this.props.id,
            category:this.props.category,
            name:this.props.name,
            price:this.props.price,
            available_colors:this.state.available_colors,
            available_sizes:this.state.available_sizes,
            selected_color:this.state.selected_color,
            selected_size:this.state.selected_size,
            imgs:this.state.imgs,
            mainImage:this.state.mainImg,
            quantity:this.state.elevalue,
        })))
        }).then(()=> this.props.dispatch(addtocart(this.props.cart.chosenItem)) ) ;
           
       } 
   else{
    new Promise((resolve)=>{
        resolve( this.props.dispatch(chosenItem({
            id:this.props.id,
            category:this.props.category,
            name:this.props.name,
            price:this.props.price,
            available_colors:this.state.available_colors,
            available_sizes:this.state.available_sizes,
            selected_color:this.state.selected_color,
            selected_size:this.state.selected_size,
            imgs:this.state.imgs,
            mainImage:this.state.mainImg,
            quantity:this.state.elevalue,
        })))
        }).then(()=> this.props.dispatch(addtocart(this.props.cart.chosenItem)) ) ;
        
   }

}}

removeFromCart(){
if(window.confirm("Are you sure you want to remove Item from cart?")==true){
    this.props.dispatch(removeFromCart(this.props.id))
}    
}

render() {
return (
    <div className={this.props.class}>   

    <div className="flex-box">

    <div className='product-image'>
{
this.props.class==="product-page"?
<div className='images-column'>
{
this.state.imgs.map((ele,ind)=>{
return(<img src={ele} ref={this.ImgRef} onClick={this.handleImgClick} key={ind}/>)})
}
</div>:""
}
    

    <div className='big-image' >
    <img src={this.state.mainImg} ref={this.myRef}/>
    </div>

    </div>

    
{ this.props.class!="product-page"?
<form>
    <button onClick={this.Increament}>+</button>
     <span  className="quantity">{this.state.elevalue}</span> 
    {this.state.elevalue>1?<button onClick={this.decrement}>-</button>
    :
    <button onClick={this.removeFromCart}><i className="fa-regular fa-trash-can"></i></button>} 
    
</form>:""
}         
    

    </div>

    <div className='product-description'>

    <span className="brand-name">Apollo</span>

    <h3>{this.props.name}</h3>

    <exchangeContext.Consumer>

    {(value)=>{return (

    <>
<span className="cart-price">{Math.ceil(this.props.price*value.EXR) +value.currency}</span>

    <div className="size">


<span>Size :</span>

<ul>
{    this.props.class==="product-page"?

this.state.available_sizes.map((ele,ind)=>{
    return(
  <li key={ind} id={this.state.selected_size===ele?"selected-size":""}  onClick={this.handleSizeClick} >{ele }</li>
          )
 }):

  <li  id={"selected-size"} >{this.props.selected_size }</li>

}     
</ul>

</div>


<span className="color-span">Colors :</span>

<div className="color">
{this.props.class==="product-page"?
this.state.available_colors.map((ele,ind)=>{
let colorCode= this.current().colors[ele].colorCode;
    return(
<div key={ind} id={this.state.selected_color===ele?"selected-color":""} style={{background:`rgb${colorCode}`}} ref={this.elementsRef} onClick={(e)=>{this.handlecolorclick(e,ele)}}></div>
)}) :
       
<div  id={"selected-color"} style={{background:`rgb${this.current().colors[this.props.selected_color].colorCode}`}} ></div>
    
}
</div>

    

    <div className="price">
    <span> Price :</span>
    <p>{Math.ceil(this.props.price*value.EXR) +value.currency}</p>
    </div>

    </>

    )}}          

    </exchangeContext.Consumer>       

   {this.props.class==="product-page"?
    <>
    <div className="add-to-cart" onClick={this.addtocart}>
    ADD TO CART
    </div> 

    <p className="description">
    {this.props.description}
    </p>
    </>
   :""} 

    </div>

    </div>
)}}



function mapStateToProps(store) {
return { products: store.products,
         cart:store.cart,
        }
}
   
  
export default connect(mapStateToProps)(Pdp)


  
  