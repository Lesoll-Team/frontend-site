import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    languageIs:false //(false = ENG) ?& (true= ARB)
}

export const changeLanguageSlice = createSlice({
name:"Languages",
initialState,
reducers:{
    handleLanguage:(state)=>{
        state.languageIs=!state.languageIs
    }
},
  })
  export const {handleLanguage}= changeLanguageSlice.actions
  export default changeLanguageSlice.reducer