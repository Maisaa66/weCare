import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./signup.module.css";
import ProgressBar from "../../components/UI/ProgressBar/ProgressBar";
import DropDown from "../../components/UI/DropDown/DropDown";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../Redux Store/slices/userInfo";
import { addUser } from "../../Redux Store/slices/userSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DatePicker } from "@mui/x-date-picker";
// import { DatePicker } from "@mui/x-date-picker/DatePicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DropzoneArea } from "material-ui-dropzone";

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
    serviceType: "",
    title: "",
    expertise: "",
    hourlyRate: "",
    nightShift: false,
    dateOfBirth: "",
  });
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserData({ ...userData, dateOfBirth: startDate });
    dispatch(setUserDetails(userData));
    navigate("/signup/steptwo");
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  const dropDownObj = {
    title: "Service Type",
    options: [
      "Companion",
      "Nanny",
      "Physiotherapist",
      "Special-Care:Autism",
      "Special-Care:ADHD",
      "Special-Care:Alzheimer's and Dementia",
    ],
  };
  const handleDropDownChange = (value) => {
    setUserData({ ...userData, serviceType: value });
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
              Share your experience with us!
            </Typography>
            <Box sx={{ m: 3 }}>
              <ProgressBar stepNum={4}></ProgressBar>
            </Box>
            <DropzoneArea onChange={(files) => console.log("Files:", files)} />
          </Box>
          <Copyright sx={{ mt: 2, mb: 5 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
