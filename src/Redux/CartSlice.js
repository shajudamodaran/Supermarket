import React from "react"
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"
import { GET_CART_DATA } from "../Firebase/Functions/CartFirebaseFunctions";

const getAllCartData = createAsyncThunk(
    'users/fetchByIdStatus',
    async () => {
      const response = await GET_CART_DATA()
      return response.data
    }
  )


const cartSlice = createSlice({
    name: "usercart",
    initialState: {
        cart: [],
        cart_refresh_flag_redux: false
    },
    reducers: {

        addItemToCartRedux: (state, action) => {
            //let newArray=[...state.cart,action.payload]
            //state.cart = [...newArray]
            console.log(action.payload);
        },
        removeItemFromCartRedux: (state, action) => {
            let newArray=[...state.cart]
            var filteredAry = ary.filter(function(e) { return e !== 'seven' })
        },
        refreshCart: (state, action) => {
            
            state.cart_refresh_flag_redux=!state.cart_refresh_flag_redux
        },
        
    },
})

export const { setActivePageRedux,addItemToCartRedux,refreshCart } = cartSlice.actions

export default cartSlice.reducer

