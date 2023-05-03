import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages : []
    },
    reducers:{
        addMessages : (state,action)=>{
               state.messages.splice(10,1);
               state.messages.unshift(action.payload);
        },
        clearChatBox : (state,action)=>{
            state.messages.length = 0;
        }

    }
})

export const {addMessages,clearChatBox} = chatSlice.actions;
export default chatSlice.reducer;