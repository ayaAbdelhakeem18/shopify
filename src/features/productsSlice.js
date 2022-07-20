import { productsValue } from "./products";
import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"products",
    initialState:{value:productsValue},
    reducers:{
       displayproducts:(state)=>{
        return state;
       } 
    }
})

export default productSlice.reducer;