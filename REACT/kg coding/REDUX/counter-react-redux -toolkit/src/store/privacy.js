import {createSlice} from '@reduxjs/toolkit'


const privacySlice=createSlice({
  name:"privacy",
  initialState:{currState:false},
  reducers:{
     privacyTogler:(state)=>{
        state.currState=!state.currState;
     }
  }
})

export const  privacyAction=privacySlice.actions;

export default privacySlice;