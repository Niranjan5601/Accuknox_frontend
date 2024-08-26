import { createSlice } from "@reduxjs/toolkit";


const toggleSidebarSlice = createSlice(
    {
        name:"toggleSidebar",
        initialState: {
            toggleSidebar:false
        },
        reducers:{
            changeToggleSidebar:(state) => {
                state.toggleSidebar = !state.toggleSidebar;
            }
        
        }
    });

export const {changeToggleSidebar} = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;