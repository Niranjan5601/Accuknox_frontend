import { configureStore } from "@reduxjs/toolkit";
import dashBoardDataReducer from "./dashBoardDataSlice";
import toggleSidebarReducer from "./toggleSideBarSlice";
const appStore = configureStore(
    {
        reducer:{
            dashBoardData:dashBoardDataReducer,
            toggleSidebar:toggleSidebarReducer,
        }
    }
);

export default appStore;