import React from "react"
import { createSlice } from "@reduxjs/toolkit"
import ActualHomePage from "../Pages/Homepage/OtherPages/ActualHomePage"


const messageSlice = createSlice({
  name: "message",
  initialState: {
    activepage: "actualhome"
  },
  reducers: {

    setActivePageRedux: (state, action) => {
      state.activepage = action.payload
    },

  }
})

export const { setActivePageRedux} = messageSlice.actions

export default messageSlice.reducer