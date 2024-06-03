import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: null,
    likedProducts: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      const { token, expiry } = action.payload;
      state.token = token;
      state.expiry = expiry;
    },
    setUser: (state, action) => {
      const user = action.payload;
      console.log(user);
      state.user = user;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = null;
      state.expiry = null;
    },
  },
});
