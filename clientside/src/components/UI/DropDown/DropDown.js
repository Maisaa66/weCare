import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useMediaQuery } from '@mui/material';

export default function DropDown(props) {
  const [gender, setGender] = React.useState("");
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ mt: 2,minWidth: 200, ...(isSmallScreen && { width: '100%', mt:0 }) }}>
      <InputLabel id="demo-simple-select-standard-label">
        {props.dropDownObj.title}
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={gender}
        onChange={handleChange}
        label={props.dropDownObj.title}
      >
        {props.dropDownObj.options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
