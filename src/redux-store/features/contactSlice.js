import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { sendMessage } from "@/utils/contactAPI";
const initialState = {
    message:null,
    sending:false,
    errorMessage:null
  };

  export const sendUserMessage = createAsyncThunk(
    "Contact/registerUser",
    async (data) => {
      const response = await sendMessage(data);
      return response.message; // Assuming your API returns user data upon successful signup
    }
  );

  const contactSlice=createSlice({
    name:"Contact",
    initialState,
    reducers:{
deleteMessage: (state) => {
  state.message = null;
},
    },
    extraReducers:(builder) => {
        builder 

        .addCase(sendUserMessage.pending, (state) => {
            state.sending=true
          })
          .addCase(sendUserMessage.fulfilled, (state,action) => {
            state.sending=false
            state.message=action.payload
          })
          .addCase(sendUserMessage.rejected, (state,action) => {
            state.sending=false
            state.errorMessage=action.error.message

          })
    }
  })
  export const {deleteMessage} = contactSlice.actions;
  export default contactSlice.reducer;