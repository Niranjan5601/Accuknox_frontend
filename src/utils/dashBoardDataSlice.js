import { createSlice } from "@reduxjs/toolkit";


const dashBoardDataSlice = createSlice(
    {
        name:'dashBoardData',
        initialState:null,
        reducers:{
            addData:(state,action) => {
                return action.payload;
            },
            updateWidgets: (state, action) => {
                return action.payload;
            },
        }
    }
);

export const {addData,updateWidgets} = dashBoardDataSlice.actions;
export default dashBoardDataSlice.reducer;