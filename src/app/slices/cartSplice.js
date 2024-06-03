import { createSlice } from "@reduxjs/toolkit";
// product example

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      console.log(product, "adding to cart", state.cart);
      if (!Array.isArray(state.cart)) {
        state.cart = [];
      }
      const existingProduct = state?.cart?.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart = [...state?.cart, { ...product, quantity: 1 }];
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cart = state?.cart?.filter((item) => item.id !== productId);
    },
    incrementCart: (state, action) => {
      const productId = action.payload;
      const product = state?.cart?.find((item) => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementCart: (state, action) => {
      const productId = action.payload;
      const product = state?.cart?.find((item) => item.id === productId);
      if (product && product?.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.cart = state?.cart?.filter((item) => item.id !== productId);
      }
    },
  },
});
export const getTotalPrice = (state) => {
  return state?.cart?.cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
};
export const cart = (state) => state?.cart?.cart;
export const { addToCart, removeFromCart, incrementCart, decrementCart } =
  cartSlice.actions;

export default cartSlice.reducer;
