import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (urlType) => {
    let { data } = await axios.get(`http://localhost:7000/api/v1/${urlType}`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Content-Type": "application/json",
      },
    });
    if (data.data.users) {
      return data.data.users;
    }
    if (data.data.providers) {
      return data.data.providers;
    }
  }
);
export const getTopRating = createAsyncThunk(
  "users/getTopRating",
  async (urlType) => {
    let { data } = await axios.get(
      `http://localhost:7000/api/v1/${urlType}?rating[gte]=4.8`,
      {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
          "Content-Type": "application/json",
        },
      }
    )
    if(data.data.users){return data.data.users}
    if(data.data.providers){return data.data.providers}

  }
);
export const getWorstRating=createAsyncThunk("users/getWorstRating",
async (urlType)=>{
    let {data}=await axios.get(`http://localhost:7000/api/v1/${urlType}?rating[lte]=2`, {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Content-Type': 'application/json'
        }
      })
      if(data.data.users){return data.data.users}
      if(data.data.providers){return data.data.providers}
  
}
)


let myinitialState = { users: [] ,topUsr:[],wrstUsr:[] };
let usersSlice = createSlice({
  name: "users",
  initialState: myinitialState,
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(getTopRating.fulfilled, (state, action) => {
      state.topUsr = action.payload;
    });
    builder.addCase(getWorstRating.fulfilled, (state, action) => {
      state.wrstUsr = action.payload;
    });
    
  },
});

export let usersReducer = usersSlice.reducer;
