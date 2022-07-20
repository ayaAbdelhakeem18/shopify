import { createSlice } from "@reduxjs/toolkit/";

const initialState={
  chosenItem:{},
  cartItems:[],
  total_quantity:0,
  total_price:0,
}
export const cart=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        chosenItem:(state,action)=>{
        state.chosenItem=action.payload
        },
        addtocart:(state,action)=>{
          state.cartItems=[...state.cartItems,action.payload]
        },
        quantityIncr:(state,action)=>{
        let ele=state.cartItems.find(x=>x.id==action.payload);
        ele.quantity=ele.quantity+1
        },
        quantityDecr:(state,action)=>{
          let ele=state.cartItems.find(x=>x.id==action.payload);
          ele.quantity=ele.quantity-1
        },
        total_quantity:(state)=>{
          let quantity=0
          state.cartItems.map((ele)=>{
          quantity=quantity+ele.quantity
          state.total_quantity=quantity 
          })
        },
        total_price:(state)=>{
            let prices=[];
            let arr=state.cartItems
            for(let i=0;i<arr.length;i++){
            let ll=arr[i].price*arr[i].quantity 
            prices.push(ll)
           }
           let sum=0;
           for (let i = 0; i < prices. length; i++) { 
            sum += prices[i];
            state.total_price=sum;
           }   
        },
        removeFromCart:(state,action)=>{
          let cart=state.cartItems.filter((ele)=>{return ele.id!=action.payload})
          state.cartItems=cart
        }

    }
})
export default cart.reducer
export const{chosenItem,addtocart,quantityIncr,quantityDecr,total_quantity,total_price,removeFromCart}=cart.actions