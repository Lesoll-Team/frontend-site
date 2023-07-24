import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    languageIs:false //(false = ENG) ?& (true= ARB)
    // islogin:false //(false = ENG) ?& (true= ARB)
}

export const globalState = createSlice({
name:"GlobalState",
initialState,
reducers:{
    handleLanguage:(state)=>{
        state.languageIs=!state.languageIs
    }
},
  })
  export const {handleLanguage}= globalState.actions
  export default globalState.reducer