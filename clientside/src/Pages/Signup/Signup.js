import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./signup.module.css";
// import { makeStyles } from "@mui/styles";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
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
// const useStyles = makeStyles((theme) => ({
//   smallScreenPadding: {
//     [theme.breakpoints.down("sm")]: {
//       padding: "16px",
//     },
//   },
// }));
export default function SignUp() {
  //   const styles = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          maxWidth="xs"
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
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
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
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="firstName"
                    autoFocus
                    sx={{ textAlign: "left" }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                    sx={{ textAlign: "left" }}
                  />
                </Grid>
              </Grid>

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                sx={{ textAlign: "left" }}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="primary"
                sx={{ textAlign: "left" }}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="confpassword"
                label="Confirm Password"
                type="password"
                id="confpassword"
                autoComplete="current-password"
                color="primary"
                sx={{ textAlign: "left" }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                sx={{ mt: 2 }}
                label="Remember me"
              />
              <div>
                <a href="http://marcel-pirnay.be/" className={`${classes.btn}`}>
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
                  <span>Sign Up</span>
                </a>
              </div>

              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4" textAlign="center" fullWidth>
                    <span style={{ fontSize: "0.9rem" }}>
                      Already have an account?
                    </span>
                    <Link
                      href="#"
                      variant="body2"
                      style={{ color: "var(--mainColor)" }}
                      sx={{ fontWeight: "bold" }}
                    >
                      {" Log In"}
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 2, mb: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
