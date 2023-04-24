import { createSlice } from '@reduxjs/toolkit'



export const providerSlice = createSlice({
  name: 'providerSlice',
  initialState:{},
  reducers: {
    addNewUser:(state)=>{
      
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = providerSlice.actions

export default providerSlice.reducer