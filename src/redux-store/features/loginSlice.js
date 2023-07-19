import { createSlice } from '@reduxjs/toolkit';


const initialState ={
    isLoading:false,
    data:{},
    error:null

}


export const registration =createSlice({
    name:"UserRegistration",
    initialState,
    reducers:{},
    extraReducers:{},
    


})
