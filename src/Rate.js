import './App.css';

import React, {useState} from 'react';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'

const FormStyle = {
    display:"block",

    margin: "15",
    backgroundColor: "white"
  }

const BodyStyle = {
    width: "60%",
    backgroundColor: "lightgray"
    marginBottom:15,
    width:"60%"
  }

function Rate() {
    return (
        <div className="Rate">
            <div style={BodyStyle}>
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Amount" variant="outlined" />
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Hours" variant="outlined" />
                <Button color="primary">Delete rate</Button> 
            </div>
        </div>
    )
}


export default Rate

