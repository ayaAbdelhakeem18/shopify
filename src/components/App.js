import react, { createRef } from "react";
import React from "react";
import "../styling/app.css";
import{BrowserRouter,Routes,Route}from"react-router-dom";
import{ApolloClient,InMemoryCache,ApolloProvider,HttpLink,from}from "@apollo/client";
import { ErrorLink, onError} from "@apollo/client/link/error";
import PLP from "./plp";
import Nav from "./nav";
import Pdp from "./pdp";
import Cart from "./cart";
import{change_currency}from "../graphql/queries";
import {Query} from "@apollo/client/react/components";
import { connect } from "react-redux";



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
export let exchangeContext = React.createContext("");

class App extends react.Component {
  constructor(props){
    super(props)  

  this.state = { 
    exchange_rate:1,
    currency:"€",
   }
  }
  render() {
    
    return (
      <exchangeContext.Provider value={{EXR:this.state.exchange_rate,currency:this.state.currency}}>  
      <ApolloProvider client={client}>
      
      <Query query={change_currency}  >
          {({error,data})=>{
            if(error){
              return <div>Error...</div>
            }
            return(
      <BrowserRouter>
      <Nav  usd={()=>{this.setState({exchange_rate:data.latest[1].quote});this.setState({currency:"$"})}}
            eur={()=>{this.setState({exchange_rate:1});this.setState({currency:"€"})}} jpy={()=>{this.setState({exchange_rate:data.latest[0].quote});this.setState({currency:"¥"})}}/>
      <Routes >
          <Route path="https://github.com/ayaAbdelhakeem18/shopify.git"  element={<PLP gender={this.props.products.value.women}/>} />
          <Route path="/men" element={<PLP gender={this.props.products.value.men}/>}/>
          <Route path="/kids" element={<PLP gender={this.props.products.value.kids}/>}/>

          {this.props.products.value.women.map(function(ele,ind){
           let available_colors=[];
           let available_sizes=[];
           let imgs=[]
            for(let color in ele.colors){
             available_colors.push(color);
             available_sizes.push(ele.colors[color].sizes);
             imgs.push(ele.colors[color].img)
            }
            return(
              <Route  key={ind} path={ele.link} element={<Pdp id={ele.id}  category={ele.category} class="product-page" name={ele.name} price={ele.price} description={ele.description} mainImage={ele.img}  available_colors={available_colors} available_sizes={available_sizes} imgs={imgs}/>}/>
            ) 
          })}
          {this.props.products.value.men.map(function(ele,ind){
            let available_colors=[];
            let available_sizes=[];
            let imgs=[]
             for(let color in ele.colors){
              available_colors.push(color);
              available_sizes.push(ele.colors[color].sizes);
              imgs.push(ele.colors[color].img)
             }
            return(
              <Route key={ind} path={ele.link} element={<Pdp id={ele.id} category={ele.category} class="product-page"name={ele.name} price={ele.price} description={ele.description} mainImage={ele.img} available_colors={available_colors} available_sizes={available_sizes} imgs={imgs}/>}/>
            ) 
          })}
          {this.props.products.value.kids.map(function(ele,ind){
            let available_colors=[];
            let available_sizes=[];
            let imgs=[]
             for(let color in ele.colors){
              available_colors.push(color);
              available_sizes.push(ele.colors[color].sizes);
              imgs.push(ele.colors[color].img)
             }
            return(
              <Route key={ind} path={ele.link} element={<Pdp id={ele.id} category={ele.category} class="product-page" name={ele.name} price={ele.price} description={ele.description} mainImage={ele.img} available_colors={available_colors} available_sizes={available_sizes} imgs={imgs}/>}/>
            ) 
          })}

      <Route path="/cart" element={<Cart></Cart>}/> 
      </Routes>  
           
          
          
             
         

    



          
    
    </BrowserRouter>
     )
    }}
         
  
</Query>
</ApolloProvider>
</exchangeContext.Provider>
    )
    ;
  }
}


function mapStateToProps(state) {
  return { products: state.products,

  }
}

export default connect(mapStateToProps)(App)

