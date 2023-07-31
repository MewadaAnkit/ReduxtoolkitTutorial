import {createSlice, createSelector} from "@reduxjs/toolkit"
import { useSelector } from "react-redux"


const cartSlice = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addItem : (state, action)=>{
          state.push(action.payload)
        },
        deleteItem : (state, action)=>{
            state.pop(action.payload)
          }
    }
})

export const getItemsSelector = createSelector((state)=>state.cart,(state)=>state)

export const {addItem} = cartSlice.actions

export default cartSlice.reducer;