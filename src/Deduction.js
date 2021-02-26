import './App.css';

import React, {useState} from 'react';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Switch} from '@material-ui/core'

const FormStyle = {
    display:"block",
    margin: "15",
    backgroundColor: "white"
  }

const BodyStyle = {
    width: "60%",
    backgroundColor: "lightgray"
}

const SwitchStyle = {
    display:"block"
}

function Deduction() {
    return (
        <div className="Deduction">
            <div style={BodyStyle}>
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Deduction name" variant="outlined" />
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Deduction type" variant="outlined" />
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Deduction aamount (%)" variant="outlined" />
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Year to date amount" variant="outlined" />
                <p>Does this deduct any exemptions?</p>
                <FormControlLabel
                    style={SwitchStyle}
                    control={<Switch  name="Federal" />}
                    label="Federal"
                />
                <FormControlLabel
                    style={SwitchStyle}
                    control={<Switch  name="Fica" />}
                    label="Federal"
                />
                <FormControlLabel
                    style={SwitchStyle}
                    control={<Switch  name="State" />}
                    label="Federal"
                />
                <FormControlLabel
                    style={SwitchStyle}
                    control={<Switch  name="checkedA" />}
                    label="Federal"
                />
                <Button color="primary">Delete rate</Button> 
            </div>
        </div>
    )
}

export default Deduction
