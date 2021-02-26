import './App.css';

import React, {useState} from 'react';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Switch} from '@material-ui/core'
import {MenuItem} from '@material-ui/core'
import styled from 'styled-components'
import Rate from './Rate'

import Deduction from './Deduction'



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

const ButtonStyle = {

  display: "block",

  marginBottom: 10
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

const filingStatuses = [
  "Single or married filing separately", 
  "Married filing jointly", 
  "Head of Household"
]

function Hourly() {
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

  const handleSetRatesChange = () => {
    setRates([...rates, 0])
  }
  const [deductions, setDeductions] = useState([])
  const handleSetDeductionsChange = () => {
    setDeductions([...deductions, 0])

  }
  return (
    <div className="Hourly">
      <header className="Hourly-header">
        <div style={BodyStyle}>
          <h1>Hourly Paycheck Calculator</h1>
          <p>Find out your true estimated earnings after taxes</p>
          <p>Salary Calculator Hourly Calculator</p>
        
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
            <p>Do you have any rates to add?</p>
            <Button style={ButtonStyle} variant="contained" color="primary" onClick={handleSetRatesChange}>+ Add another rate</Button>

            {rates.map((id) => {
              return <Rate key={id}></Rate>

            })}
            <p>Do you have any exemptions?</p>
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
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Gross pay" variant="outlined" />
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Gross pay YTD" variant="outlined" />
            <TextField 
                fullWidth={true} 
                style={FormStyle} 
                size="small" 
                id="outlined-basic" 
                select
                label="Pay Frequency" 
                value={freq}
                onChange={handleFreqChange}
                variant="outlined" 
            >
                {freqs.map((stateOption) => (
                    <MenuItem value={stateOption}>
                    {stateOption}
                    </MenuItem>
                ))}
            </TextField>
            <TextField 
                fullWidth={true} 
                style={FormStyle} 
                size="small" 
                id="outlined-basic" 
                select
                label="Federal filing status" 
                value={filingStatus}
                onChange={handleFilingStatusChange}
                variant="outlined" 
            >
                {filingStatuses.map((stateOption) => (
                  <MenuItem value={stateOption}>
                    {stateOption}
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
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Step 4b: deductions" variant="outlined" />
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

            <h3 style={InstructionStyle}>Now for voluntary deductions:</h3>
            <p>Do you have any voluntary deductions?</p>
            <Button style={ButtonStyle} variant="contained" color="primary" onClick={handleSetDeductionsChange}>+ Add another deduction</Button>
            {deductions.map((id) => {
              return <Deduction key={id}></Deduction>
            })}

            <Button style={ButtonStyle} variant="contained" color="primary">Calculate</Button>

          </form>
          
        </div>

      </header>
    </div>
  );
}


export default Hourly

