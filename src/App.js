
import './App.css';
import React, {useState} from 'react';
import {TextField} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Switch} from '@material-ui/core'
import {MenuItem} from '@material-ui/core'
import styled from 'styled-components'
import Rate from './Rate'
import {Button} from '@material-ui/core'



// rate style




const FormStyle = {
  display:"block",
  marginBottom:15,
  width:"40%"
}

const FormDivStyle = {
  width:"40%",
  // marginLeft:"20%"
}
const ButtonStyle = {
  marginTop:20,
  marginBottom: 10,
  width:"40%"
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

const freqs = [
  "Daily",
  "Weekly",
  "Bi-weekly",
  "Semi-monthly",
  "Monthly",
  "Quarterly",
  "Semi-annually",
  "Annually"
]

const generals = [
  "Yes",
  "No"
]

const filingStatuses = [{key: "Single", status:"Single or married filing separately"}, {key:"Married", status:"Married filing jointly"}, {key:"Head", status:"Head of Household"}]

function App() {
  const [state, setState] = useState("Arizona")
  const handleStateChange = (event) => {
    setState(event.target.value)
  }

  const [freq, setFreq] = useState()
  const handleFreqChange = (event) => {
    setFreq(event.target.value)
  }
  const [general, setGeneral] = useState()
  const handleGeneralChange = (event) => {
    setGeneral(event.target.value)
  }
  const [filingStatus, setFilingStatus] = useState()
  const handleFilingStatusChange = (event) => {
    setFilingStatus(event.target.value)
  }
  const [rates, setRates] = useState([])
  const handleSetRatesChange = (event) => {
    const temp = rates
    temp.push(Math.random(10))
    setRates(temp)
    
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
            <TextField type='date' fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" />
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
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" select label="Pay Frequency" variant="outlined" onChange={handleFreqChange}>
            {freqs.map((freqOption) => (
                    <MenuItem value={freqOption}>
                      {freqOption}
                    </MenuItem>
                ))}
            </TextField>
                  
            <InputLabel>Do you have any exemptions?</InputLabel>
           
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" color='primary' />}
              label="Federal"
            />
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" color='primary' />}
              label="State"
            />
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" color='primary'/>}
              label="Medicare"
            />
            <h3 style={InstructionStyle}>Now for some federal information:</h3>
            
            
            <TextField 
                fullWidth={true} 
                style={FormStyle} 
                size="small" 
                id="outlined-basic" 
                select
                label="Federal filing status" 
                
                onChange={handleFilingStatusChange}
                variant="outlined" 
            >
                {filingStatuses.map((statusDict) => (
                  <MenuItem value={statusDict.key}>
                    {statusDict.status}
                  </MenuItem>
                ))}
            </TextField>
            <TextField 
                fullWidth={true} 
                style={FormStyle} 
                size="small" 
                id="outlined-basic" 
                select
                label="Step 2: Two jobs" 
                value={general}
                onChange={handleGeneralChange}
                variant="outlined" 
            >
                {generals.map((stateOption) => (
                  <MenuItem value={stateOption}>
                    {stateOption}
                  </MenuItem>
                ))}
            </TextField>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Step 3: Dependents amount" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Step 4a: Other Income" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Step 4b: Deductions" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Additional federal witholding" variant="outlined" />
            <TextField 
                fullWidth={true} 
                style={FormStyle} 
                size="small" 
                id="outlined-basic" 
                select
                label="Round federal withholding" 
                value={general}
                onChange={handleGeneralChange}
                variant="outlined" 
            >
                {generals.map((stateOption) => (
                  <MenuItem value={stateOption}>
                    {stateOption}
                  </MenuItem>
                ))}
            </TextField>
            <h3 style={InstructionStyle}>State Information:</h3>
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" />}
              label="Are you exempt from state taxes?"
            />
             <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="State elected percentage rate" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Additional state withholding" variant="outlined" />
            <Button style={ButtonStyle} variant="contained" color="primary">Continue</Button>
          </form>
          
        </div>

      </header>
    </div>
  );
}

export default App;
