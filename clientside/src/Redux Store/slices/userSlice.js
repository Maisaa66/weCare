import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {useNavigate } from 'react-router-dom';

export const addUser = createAsyncThunk("user/addUser", async (userData)=>{
try{
  const response = await axios.post("http://localhost:7000/api/v1/users/signup", userData);
  console.log ("response data ", response.data);
}
catch(error){
  console.log("error", error);
}
})

export const userSlice = createSlice({

  name: 'userSlice',
  initialState:{user: []},
  reducers: {

  },
  extraReducers: (builder) => {

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addUser.fulfilled, (state, action) => {
      // Add user to the state array
      // const navigate = useNavigate();
      // navigate("/signup/stepthree");
      state.user.push(action.payload);
      return action.payload;
    });
  }
})

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions

export default userSlice.reducer