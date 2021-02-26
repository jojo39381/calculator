import './App.css';

import React, {useState} from 'react';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'

const FormStyle = {
    display:"block",
    marginBottom:15,
    width:"60%"
  }

  const BodyStyle = {
    width: "80%",
    margin: "0 auto"
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