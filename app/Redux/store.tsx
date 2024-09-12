'use client'
import Cartslice from "./Cartslice";
import Sidebar1slice from "../Redux/Sidebar1"; // Import Sidebar1slice
import Sidebar2 from "./sidebar2";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    Cart: Cartslice,
    sidebar1: Sidebar1slice, 
    sidebar2:Sidebar2
  },
});

export default store;
