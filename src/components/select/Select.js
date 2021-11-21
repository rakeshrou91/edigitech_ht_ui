import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Select.css";

export  function Currency() {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem className="MenuItem" value={10}>Ten</MenuItem>
          <MenuItem class="MenuItem" value={20}>Twenty</MenuItem>
          <MenuItem class="MenuItem" value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export  function Department() {
  const [department, setDepartment] = React.useState('');

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem class="MenuItem" value={10}>Ten</MenuItem>
          <MenuItem class="MenuItem" value={20}>Twenty</MenuItem>
          <MenuItem class="MenuItem" value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export  function Destination() {
  const [destination, setDestination] = React.useState('');

  const handleChange = (event) => {
    setDestination(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl className="formcontrol">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={destination}
          label="Destination"
          onChange={handleChange}
        >
          <MenuItem class="MenuItem" value={10}>Ten</MenuItem>
          <MenuItem class="MenuItem" value={20}>Twenty</MenuItem>
          <MenuItem class="MenuItem" value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
