import './App.css';

import React, {useState} from 'react';
import {Button} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const BodyStyle = {
    width: "30%",
    margin: "0 auto"
}

function createData(name, amount) {
    return {name, amount};
}

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});

const BoldTableCell = withStyles((theme) => ({
    body: {
      fontWeight: "bold",
    },
}))(TableCell);

const BackButton = withStyles({
    root: {
      color: '#0066ff',
    },
    label: {
      textTransform: 'none',
    },
})(Button);

const EditButton = withStyles({
    root: {
        borderRadius: 4,
        borderColor: "#E2E9F0",
        borderWidth: 1,
        color: '#0066ff',
        height: 41,
        width: 69
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

const InstructionStyle = {
    fontFamily: 'Inter'
}

const grossPay = 1600
var calculations = [createData("Gross pay", grossPay)];

var information = [
    createData("Check date"),
    createData("Gross pay"),
    createData("Gross salary year to date"),
    createData("Pay frequency"),
    createData("Federal filing status"),
    createData("# of federal allowances"),
    createData("Round federal withholding"),
    createData("Additional federal witholding"),
    createData("Addition state witholding"),
    createData("State filing status"),
    createData("Dependents"),
    createData("Exempt from federal tax"),
    createData("Exempt from FICA tax"),
    createData("Exempt from medicare tax"),
    createData("Exempt from state tax")
];


const response = require("./Response.json")
var amountSubtracted = 0
response.result.map((row) => {
        calculations.push(createData(row["name"], row["withheld"]))
        amountSubtracted += row["withheld"]
    }
)
calculations.push(createData("Net pay", grossPay - amountSubtracted));

function Result() {
    const classes = useStyles();
 
    return (
        <div className="Result">
            <header className="Result-header">
                <div style={BodyStyle}>
                    <h1 style={InstructionStyle}>Salary Paycheck Calculator</h1>
                    <InputLabel style={InstructionStyle}>Let's take a look at your estimated earnings after taxes</InputLabel>
                    <BackButton style={{marginTop: 37}}>Back to calculators</BackButton>
                    <h2 style={InstructionStyle}>Your salary paycheck calculation:</h2>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table" size='small'>
                                <TableBody>
                                    {calculations.map((row) => (
                                    <TableRow key={row.name}>
                                        { row.name != "Net pay" ? 
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell> :
                                            <BoldTableCell component="th" scope="row">
                                                {row.name}
                                            </BoldTableCell>
                                        }
                                        { row.name != "Net pay" ? 
                                            <TableCell align="right">{"$" + row.amount}</TableCell> :
                                            <BoldTableCell align="right">{"$" + row.amount}</BoldTableCell>
                                        }
                                        
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    <h2 style={InstructionStyle}>Results are based on:</h2>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table" size='small'>
                            <TableBody>
                                {information.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                    {row.name}
                                    </TableCell>
                                    <TableCell align="right">{"$" + row.amount}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <EditButton style={{marginTop: 26}} variant="outlined">Edit</EditButton>
                </div>
            </header>
        </div>
    )
}


export default Result