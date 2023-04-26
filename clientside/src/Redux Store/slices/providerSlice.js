import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProvider = createAsyncThunk(
  "provider/addProvider",
  async (userData) => {
    try {
      console.log(userData);
      const response = await axios.post(
        "http://localhost:7000/api/v1/providers/signup",
        userData
      );

      console.log("response  ", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const providerSlice = createSlice({
  name: "providerSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addProvider.fulfilled, (state, action) => {
      // Add user to the state array
      // const navigate = useNavigate();
      // navigate("/signup/stepthree");
      const expires = new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000
      ).toUTCString(); // 2 days from now
      document.cookie = `jwt=${action.payload.cookie}; expires=${expires};`;
      // state.user.push(action.payload.data);
      return action.payload.data;
      // console.log("ACTION!!!!", action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions

export default providerSlice.reducer;
