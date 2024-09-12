import { createSlice } from "@reduxjs/toolkit";

const Sidebar2 = createSlice({
    name: "sidebar2",
    initialState: {
        Sidebar2: "left-[-250px]"
    },
    reducers: {
        sidebarOpen2: (state: any) => {

            return {
                ...state,Sidebar2: "left-0",
            };
        },
        sidebarClose2: (state: any) => {

            return {
                ...state, Sidebar2: "left-[-250px]",
            };
        },
    }
})

export const {sidebarClose2,sidebarOpen2}=Sidebar2.actions;
export default Sidebar2.reducer