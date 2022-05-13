import react from "react";
import React from "react";
import "../styling/app.css";
import{BrowserRouter,Routes,Route}from"react-router-dom";
import{ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from}from "@apollo/client";
import { ErrorLink, onError} from "@apollo/client/link/error";
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

const errorLink=onError(({graphqlErrors,networkError})=>{
if(graphqlErrors){
  graphqlErrors.map(({message,location,path})=>{
    alert(`graphql error ${message}`);
  }
  )
}
})

const link=from([
  errorLink,
  new HttpLink({uri:"https://swop.cx/graphql?api-key=b1c7971c0d3a21a13406a028901549511dda1b5725e1e19a38d2eb4eb241b2ef"})
])
const client=new ApolloClient({
  cache:new InMemoryCache(),
  link:link
})

export let myContext = React.createContext("");
class App extends react.Component {
  constructor(props){
    super(props)  
    this.addTobigCart=this.addTobigCart.bind(this);
    this.addTominiCart=this.addTominiCart.bind(this);
  this.state = { 
    countproducts:"",
    minicart:[],
    bigcart:[],
      gender:{
          women:[
              {name:"Apollo running short",price:50,img:two,link:"/ptwo", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:20,img:five,link:"/pfive" , description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:75,img:four ,link:"/pfour",  description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:100,img:three,link:"/pthree", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:30,img:one,link:"/pone", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:six,link:"/psix", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              
             ],
          men:[
              {name:"Apollo running short",price:40,img:seven,link:"/pseven", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:60,img:eight,link:"/peight", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:50,img:twelve,link:"/ptwelve", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:45,img:ten,link:"/pten", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:80,img:eleven,link:"/peleven", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:30,img:nine,link:"/pnine", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              
             ],
          kids:[
              {name:"Apollo running short",price:50,img:therteen,link:"/ptherteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:70,img:fourteen,link:"/pfourteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:65,img:fifteen,link:"/pfifteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:80,img:sixteen,link:"/psixteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:40,img:seventeen,link:"/pseventeen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              {name:"Apollo running short",price:30,img:eighteen,link:"/peighteen", description:"Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."},
              
             ]     
      }
   } 
   }
   
   addTominiCart(e){
    
    let element=<Pdp class="mini-cart-pro" name={e.name} price={e.price} img={e.img}  />;
    this.setState((prev) => {
      return {
        ...prev,
        minicart: [...this.state.minicart, element],
      };
    });
    this.setState(function(state) {
      return {
        countproducts: <style>
        {`
        .icons::before{
          content: "1";
          position: absolute;
          width: 15px;
          height: 15px;
          background-color: black;
          color: white;
          top: 29px;
          right: 93px;
          border-radius: 12px;
          text-align: center;
          padding: 2px;
          padding-bottom: 2px;
          font-size: small;
          }
        `}
      </style>
      };
    });
 }
   addTobigCart(e){
    let element=<Pdp class="product-cart" name={e.props.name} price={e.props.price} img={e.props.img} value={e.state.value} this={e} />;
    this.setState((prev) => {
      return {
        ...prev,
        bigcart: [...this.state.bigcart, element],
      };
    });
  
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
    const state=this.state; 
    
    return (
      <ApolloProvider client={client}>
      <myContext.Provider value={{minicart:this.state.minicart,fM:this.addTominiCart,fG:this.addTobigCart,bigcart:this.state.bigcart}}>
      <BrowserRouter>
      <Nav countproducts={this.state.countproducts} />
      {console.log(this.state.countproducts)}
      <Routes>

          <Route path="/"  element={<PLP gender={this.state.gender.women}/>} />
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
    </ApolloProvider>
    )
    ;
  }
}
export default App;
 