import react from "react";
import React from "react";
import "../styling/app.css";
import{BrowserRouter,Routes,Route}from"react-router-dom";
import PLP from "./plp";
import Nav from "./nav";
import Pdp from "./pdp";
import Cart from "./cart";

import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";
import five from "../images/5.png";
import six from "../images/6.png";
import seven from "../images/7.webp";
import eight from "../images/8.webp";
import nine from "../images/9.webp";
import ten from "../images/10.jpg";
import eleven from "../images/11.webp";
import twelve from "../images/12.jpg";
import therteen from "../images/13.webp";
import fourteen from "../images/14.webp";
import fifteen from "../images/15.jpg";
import sixteen from "../images/16.webp";
import seventeen from "../images/17.webp";
import eighteen from "../images/18.jpg";



export let myContext = React.createContext("");
class App extends react.Component {
  constructor(props){
    super(props)  
    this.addToCart=this.addToCart.bind(this);
  this.state = { 
    array:[],
      gender:{
          women:[
              {name:"Apollo running short",price:50,img:two,link:"/ptwo", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:five,link:"/pfive" , description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:four ,link:"/pfour",  description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:three,link:"/pthree", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:one,link:"/pone", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:six,link:"/psix", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              
             ],
          men:[
              {name:"Apollo running short",price:50,img:seven,link:"/pseven", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:eight,link:"/peight", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:twelve,link:"/ptwelve", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:ten,link:"/pten", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:eleven,link:"/peleven", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:nine,link:"/pnine", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              
             ],
          kids:[
              {name:"Apollo running short",price:50,img:therteen,link:"/ptherteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:fourteen,link:"/pfourteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:fifteen,link:"/pfifteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:sixteen,link:"/psixteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:seventeen,link:"/pseventeen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:eighteen,link:"/peighteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              
             ]
      }
   } }
   addToCart=()=>{
    let element=<Pdp class="product-cart" name="Apollo running short" price="50"  />;
    this.setState({array:this.state.array=[...this.state.array,element]})
    console.log(this.state.array)
 }
  render() { 
    const pathWomen=this.state.gender.women.map(function(ele,ind){
      return(
        ele.link
      )
    });
    
    const pathmen=this.state.gender.men.map(function(ele,ind){
      return(
        ele.link
      )
    });
    const pathkids=this.state.gender.kids.map(function(ele,ind){
      return(
        ele.link
      )
    });
    let state=this.state; 
   
    
    return (
      <myContext.Provider value={{s:this.state.array,f:this.addToCart}}>
    <BrowserRouter>
      <Nav/>
      
    <Routes>
      <Route path="/"  element={<PLP gender={this.state.gender.women}/>}/>
          <Route path="/men" element={<PLP gender={this.state.gender.men}/>}/>
          <Route path="/kids" element={<PLP gender={this.state.gender.kids}/>}/>
        { pathWomen.map(function(ele,ind){  
          let name= state.gender.women[ind].name;
          let price= state.gender.women[ind].price;
          let description= state.gender.women[ind].description;
          let img= state.gender.women[ind].img;
          
          
        return(
        <Route key={ind} path={ele} element={<Pdp name={name} price={price} description={description} img={img} class="product-page"  />}/>
        );
      })}
        { pathmen.map(function(ele,ind){  
          let name= state.gender.men[ind].name;
          let price= state.gender.men[ind].price;
          let description= state.gender.men[ind].description;
          let img= state.gender.men[ind].img;
        return(
        <Route key={ind} path={ele} element={<Pdp name={name} price={price} description={description} img={img} class="product-page" />}/>
        );
      })}

        { pathkids.map(function(ele,ind){  
          let name= state.gender.kids[ind].name;
          let price= state.gender.kids[ind].price;
          let description= state.gender.kids[ind].description;
          let img= state.gender.kids[ind].img;
        return(
        <Route key={ind} path={ele} element={<Pdp name={name} price={price} description={description} img={img} class="product-page"/>}/>
        );
      })}
      <Route path="/cart" element={<Cart elements={this.state.array} ></Cart>}/>
      
           
          
          
             
         

    



          
    </Routes>
    
    </BrowserRouter>
    </myContext.Provider> 
    )
    ;
  }
}
 
export default App;
 