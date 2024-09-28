const { createSlice } = require("@reduxjs/toolkit");

const cakeInitialState = {
  cake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: cakeInitialState,
  reducers: {
    restockCake(state, payload) {
      state.cake = state.cake + payload;
    },
    orderCake(state) {
      if (state.cake !== 0) state.cake = state.cake--;
    },
  },
});

export const { restockCake, orderCake } = cakeSlice.actions;

export default cakeSlice.reducer;
