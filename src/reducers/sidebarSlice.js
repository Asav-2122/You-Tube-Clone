import { createSlice } from "@reduxjs/toolkit";


const sidebarSlice = createSlice({
    name:"sidebar",
    initialState:{
        isSideBarOpen : true,
       
    },
    reducers:{
        toggleSideBar : (store)=>{
               store.isSideBarOpen = !store.isSideBarOpen
              
        },
        closeSideBar :(store)=>{
            store.isSideBarOpen = false;
        }
    }
})

export const {toggleSideBar,closeSideBar} = sidebarSlice.actions;
export default sidebarSlice.reducer;