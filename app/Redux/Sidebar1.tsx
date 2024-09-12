import { createSlice } from "@reduxjs/toolkit";


const Sidebar1slice = createSlice({
  name: "sidebar",
  initialState: {
    Sidebar1: false,
    MOdel:false
  },
  reducers: {
    sidebarOpen: (state:any) => {
      state.Sidebar1=true
    },
    closeSidebar: (state:any) => {
      state.Sidebar1=false
    },

    ModelOpen:(state:any)=>{
    state.Model=true
    },
   ModelClose:(state:any)=>{
    state.Model=false
   }
  },
});

export const { sidebarOpen,closeSidebar,ModelOpen,ModelClose } = Sidebar1slice.actions;

export default Sidebar1slice.reducer;
