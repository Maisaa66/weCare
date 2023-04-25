import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./signup.module.css";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../Redux Store/slices/userInfo";
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from "react-dropzone";
import { addProvider } from "../../Redux Store/slices/providerSlice";

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

export default function StepFive() {
  const [userData, setUserData] = useState({
    documents: "",
  });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.userInfo.userDetails);

  const handleClick = (event) => {
    event.preventDefault();
    setUserData({ ...userData, documents: files });
    dispatch(setUserDetails(userData));
    dispatch(addProvider(userDetails));
    navigate("/signup/stepthree");
  };

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
              Gain our trust with your credentials!
            </Typography>
            <Box sx={{ m: 3 }}>
              <ProgressBar stepNum={4}></ProgressBar>
            </Box>
            <Box>
              <section className="container">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p
                    style={{
                      backgroundColor: "#daefea",
                      padding: "50px",
                      borderRadius: "10px",
                    }}
                  >
                    Drag 'n' drop some files here, or click to select files
                  </p>
                </div>
                <aside>
                  {files.length !== 0 && <h4>Uploaded Files</h4>}
                  <ul>{files}</ul>
                </aside>
              </section>
            </Box>
            <div>
              <button onClick={handleClick} className={`${classes.btn}`}>
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

          <Copyright sx={{ mt: 2, mb: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
