import { createSlice } from "@reduxjs/toolkit";

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: {
    icecream: 0,
  },
  reducers: {
    restockIcecream(state, payload) {
      state.icecream = state.icecream + payload;
    },
    orderIcecream(state) {
      if (state.icecream !== 0) state.icecream = state.icecream--;
    },
  },
  extraReducers: {
    ['cake/orderCake']: (state, action) => {
      return orderIcecream(state, action)
    }
  }
})

export const {restockIcecream, orderIcecream} = icecreamSlice.actions;

export default icecreamSlice.reducer;