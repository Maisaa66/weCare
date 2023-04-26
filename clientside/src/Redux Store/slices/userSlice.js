import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  try {
    const response = await axios.post("http://localhost:7000/api/v1/users/signup", userData);

    // console.log ("response data ", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
});

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addUser.fulfilled, (state, action) => {
      // Add user to the state array
      // const navigate = useNavigate();
      // navigate("/signup/stepthree");
      const expires = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toUTCString(); // 2 days from now
      document.cookie = `jwt=${action.payload.cookie}; expires=${expires};`;
      // state.user.push(action.payload.data);
      return action.payload.data;
      // console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions

export default userSlice.reducer;
