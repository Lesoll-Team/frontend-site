import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { sendMassage } from "@/utils/contactAPI";
const initialState = {
    massage:null,
    sending:false,
    errorMassage:null
  };

  export const sendUserMassage = createAsyncThunk(
    "Contact/registerUser",
    async (data) => {
      const response = await sendMassage(data);
      return response.message; // Assuming your API returns user data upon successful signup
    }
  );

  const contactSlice=createSlice({
    name:"Contact",
    initialState,
    reducers:{
deleteMessage: (state) => {
  state.massage = null;
},
    },
    extraReducers:(builder) => {
        builder 

        .addCase(sendUserMassage.pending, (state) => {
            state.sending=true
          })
          .addCase(sendUserMassage.fulfilled, (state,action) => {
            state.sending=false
            state.massage=action.payload
          })
          .addCase(sendUserMassage.rejected, (state,action) => {
            state.sending=false
            state.errorMassage=action.error.message

          })
    }
  })
  export const {deleteMessage} = contactSlice.actions;
  export default contactSlice.reducer;