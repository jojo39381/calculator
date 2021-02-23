
import './App.css';
import React, {useState} from 'react';
import {TextField} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Switch} from '@material-ui/core'
import {MenuItem} from '@material-ui/core'
import styled from 'styled-components'

const FormStyle = {
  display:"block",
  marginBottom:15,
  width:"60%"
}

const FormDivStyle = {
  width:"40%",
  // marginLeft:"20%"
}

const SwitchStyle = {
  display:"block"
}

const BodyStyle = {
  width: "80%",
  margin: "0 auto"
}

const InstructionStyle = {
  fontFamily: 'Inter'

}

const states = ["Alaska",
"Alabama",
"Arkansas",
"American Samoa",
"Arizona",
"California",
"Colorado",
"Connecticut",
"District of Columbia",
"Delaware",
"Florida",
"Georgia",
"Guam",
"Hawaii",
"Iowa",
"Idaho",
"Illinois",
"Indiana",
"Kansas",
"Kentucky",
"Louisiana",
"Massachusetts",
"Maryland",
"Maine",
"Michigan",
"Minnesota",
"Missouri",
"Mississippi",
"Montana",
"North Carolina",
" North Dakota",
"Nebraska",
"New Hampshire",
"New Jersey",
"New Mexico",
"Nevada",
"New York",
"Ohio",
"Oklahoma",
"Oregon",
"Pennsylvania",
"Puerto Rico",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Virginia",
"Virgin Islands",
"Vermont",
"Washington",
"Wisconsin",
"West Virginia",
"Wyoming"]


const filingStatuses = [{"Single":"Single or married filing separately"}, {"Married":"Married filing jointly"}, {"Head":"Head of Household"}]

function App() {
  const [state, setState] = useState("Arizona")
  const handleStateChange = (event) => {
    setState(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div style={BodyStyle}>
          <h1>Salary Paycheck Calculator</h1>
          <p>Find out your true estimated earnings after taxes</p>
          <p>Salary Calculator</p> 
          
        
          <form style={FormDivStyle} noValidate autoComplete="off">
            <h3 style={InstructionStyle}>First, tell us some general information:</h3>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Check date" variant="outlined" />
            <TextField
                fullWidth={true}
                style={FormStyle}
                size="small"
                id="standard-select-currency"
                select
                label="State"
                value={state}
                onChange={handleStateChange}
                variant="outlined"
              >
                {states.map((stateOption) => (
                  <MenuItem value={stateOption}>
                    {stateOption}
                  </MenuItem>
                ))}
            </TextField>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Gross pay" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Gross pay YTD" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Pay Frequency" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Outlined" variant="outlined" />
            <InputLabel>Do you have any exemptions?</InputLabel>
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" />}
              label="Federal"
            />
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" />}
              label="State"
            />
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" />}
              label="Medicare"
            />
            <h3 style={InstructionStyle}>Now for some federal information:</h3>
            
          </form>
          
        </div>

      </header>
    </div>
  );
}

export default App;
