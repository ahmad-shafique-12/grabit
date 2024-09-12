import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cart: [],
    findValue:""
  },
  reducers: {
    AddToCart: (state: any, action: any) => {
      const obj = action.payload;
      const exist = state.cart.find((e: any) => e.name === obj.name);
      if (!exist) {
        state.cart.push({ ...action.payload });
      } else {
        state.cart = state.cart.map((e: any) =>
          e.name === obj.name
            ? { ...e, quantity: e.quantity + action.payload.quantity }
            : e
        );
      }
    },
    InCrement: (state: any, action: any) => {
      state.cart = state.cart.map((e: any) =>
        e.name === action.payload.name
          ? { ...e, quantity: e.quantity+ 1 }
          : e
      );
    },


    DeCrement: (state: any, action: any) => {
        state.cart = state.cart.map((e: any) =>
          e.name === action.payload.name
            ? { ...e, quantity: e.quantity- 1 }
            : e
        );
      },
      RemoveIdx: (state: any, action: any) => {
        const idx = action.payload;
        state.cart = state.cart.filter((_:any, i:any) => i !== idx);
      },
      searchValue:(state: any, action: any)=>{
        state.findValue=action.payload
      }
  },
});

export const { AddToCart, InCrement,DeCrement,RemoveIdx,searchValue } = CartSlice.actions;
export default CartSlice.reducer;
