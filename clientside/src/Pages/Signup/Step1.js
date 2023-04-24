import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./signup.module.css";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import DropDown from "../../components/UI/DropDown/DropDown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {setUserDetails} from "../../Redux Store/slices/userInfo";

function Copyright(props) {
  
  
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        weCare
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#66b9a6",
    },
  },
  typography: {
    fontFamily: "var(--textFont)",
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "var(--mainColor)",
          border: "2px solid var(--mainColor)",
          fontWeight: 600,
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "transparent",
            border: "2px solid var(--mainColor)",
            color: "var(--mainColor)",
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default function StepOne() {
  const dropDownObj = {
    title: "Gender",
    options: ["female", "male"],
  };
  //states
  const [userData, setUserData] = useState(
    {
      phoneNum: "",
      nationalID: "",
      gender: "",
    }
   );


  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const styles = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    dispatch(setUserDetails(userData));
    navigate("/signup/steptwo");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleDropDownChange = (value) => {
    setUserData({ ...userData, gender: value });
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        className={`${classes.box}`}
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          component="main"
          maxWidth="md"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            borderRadius: "20px",
            bgcolor: "white",
            padding: "0px 20px",
            [theme.breakpoints.down("sm")]: {
              padding: "30px",
            },
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "var(--mainColor)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ m: 2 }}>
              Lets get to know you
            </Typography>
            <Box sx={{ m: 3 }}>
              <ProgressBar stepNum={1}></ProgressBar>
            </Box>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="phoneNum"
                    label="Phone Number"
                    name="phoneNum"
                    autoComplete="phoneNum"
                    sx={{ textAlign: "left" }}
                    value={userData.phoneNum}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DropDown dropDownObj={dropDownObj} handleDropDownChange={handleDropDownChange}></DropDown>
                </Grid>
              </Grid>

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="nationalID"
                label="National ID"
                type="text"
                id="nationalID"
                autoComplete="nationalID"
                color="primary"
                sx={{ textAlign: "left" }}
                value={userData.nationalID}
                onChange={handleChange}
              />

              <div>
                <button type="submit" className={`${classes.btn}`}>
                  <svg width="277" height="62">
                    <defs>
                      <linearGradient id="grad1">
                        <stop offset="0%" stopColor="#66b9a6" />
                        <stop offset="100%" stopColor="#5fe4c5" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="5"
                      y="5"
                      rx="25"
                      fill="none"
                      stroke="url(#grad1)"
                      width="266"
                      height="50"
                    ></rect>
                  </svg>
                  <span>Next</span>
                </button>
              </div>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2, mb: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
