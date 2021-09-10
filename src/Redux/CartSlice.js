import React from "react"
import { createSlice } from "@reduxjs/toolkit"

let image=require('../Assets/Images/sevenup.png')


const cartSlice = createSlice({
    name: "usercart",
    initialState: {
        cart: [{ name: "name1", price: "70", count: 1, image: image, id: "1000" },
               { name: "name2", price: "60", count: 1, image: image, id: "1001" },
              ]
    },
    reducers: {

        addItemToCartRedux: (state, action) => {
            let newArray=[...state.cart,action.payload]
            state.cart = [...newArray]
        },
        removeItemFromCartRedux: (state, action) => {
            let newArray=[...state.cart]
            var filteredAry = ary.filter(function(e) { return e !== 'seven' })
        },

    }
})

export const { setActivePageRedux } = cartSlice.actions

export default cartSlice.reducer