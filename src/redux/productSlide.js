import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItem:[],
};

export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers: {
        addCartItem:(state=[],action)=>{
            const check=state.cartItem.some((el)=>el._id===action.payload._id)
            if(check){
                alert("Already Item is in cart")
            }
            else{
                alert("item added sucessfully")
                state.cartItem=[...state.cartItem,{...action.payload}]
            }

        },
        deleteCartItem:(state,action)=>{
            alert("one item deleted")
            const index=state.cartItem.findIndex((el)=>el._id===action.payload)
            state.cartItem.splice(index,1)
            console.log(index)
        }
        
    },
})
export const {
    addCartItem,
    deleteCartItem,
}=productSlice.actions

export default productSlice.reducer