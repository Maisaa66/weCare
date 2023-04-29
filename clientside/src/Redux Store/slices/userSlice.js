import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";

export const addUser = createAsyncThunk("user/addUser", async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:7000/api/v1/users/signup",
      userData
    );

    // console.log ("response data ", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
});

// export const getUser = createAsyncThunk("user/getUser", async (id) => {
//   try {
//     const response = await axios.get(
//       `http://localhost:7000/api/v1/users/${id}`,
//     );

//     // console.log ("response data ", response);
//     return response.data;
//   } catch (error) {
//     console.log("error", error);
//   }
// });

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    id: "",
    isAdmin: false,
    info: {},
    profileID: "",
    userType: "",
  },
  reducers: {
    setToken: (state) => {
      console.log(state);
      // get cookie from browser and get the token
      const token = document.cookie.split("=")[1];
      // decode JWT
      const decodedToken = decodeToken(token);
      state.id = decodedToken.id;
      state.isAdmin = decodedToken.isAdmin;
      state.userType = decodedToken.userType;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
    setProfileId: (state, action) => {
      state.profileID = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addUser.fulfilled, (state, action) => {
      // Add user to the state array
      // const navigate = useNavigate();
      // navigate("/signup/stepthree");
      const expires = new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000
      ).toUTCString(); // 2 days from now
      document.cookie = `jwt=${action.payload.cookie}; expires=${expires};`;
      // state.user.push(action.payload.data);
      return action.payload.data;
      // console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function

export const { setToken, setInfo, setProfileId } = userSlice.actions;
export default userSlice.reducer;
