import { createSlice } from "@reduxjs/toolkit";

const  cartSlice = createSlice({
        name:"cart",
        initialState:{
            items: []
        },
        reducers:{
            addItem:(state, action)=>{
                // Vanilla(older) Redux => DON'T MUTATAE STATE
                // const newState = [...state];
                // newState.items.push(action.payload);
                // return newState;

                // Resux toolkit 
                // WE Have to mutate the state
                
                state.items.push(action.payload);
            },
            removeItem:(state, action) => {
                state.items.pop();
            },
            clearCart: (state, action)=>{
                state.items.length = 0;
            }
        }
});



export const { addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
