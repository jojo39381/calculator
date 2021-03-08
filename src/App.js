
import './App.css';
import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'

import {MenuItem} from '@material-ui/core'


import axios from 'axios'

import {Button} from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TableContainer from '@material-ui/core/TableContainer';

import TableRow from '@material-ui/core/TableRow';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// rate style





import MuiTableCell from "@material-ui/core/TableCell";

const TableCell = withStyles({
  root: {
    borderBottom: "0.5px solid #B2BEC3"
  }
})(MuiTableCell);


const ResultBodyStyle = {
    width: "90%",
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

const ContinueButton = withStyles({
    root: {
        borderRadius: 4,
        backgroundColor: 'black',
        color: 'white',
        height: 41,
        width: 69
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

////////////////////////

const FormStyle = {
  display:"block",
  marginBottom:15,
  width:"90%"
}

const FormDivStyle = {
  width:"100%",
  // marginLeft:"20%"
}
const ButtonStyle = {
  marginTop:20,
  marginBottom: 10,
  width:"40%"
}


const InstructionStyle = {
  fontFamily: 'Inter'

}

const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

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








const federalTaxParams = [{
  "code": "FILINGSTATUS",
  "effectiveDate": 2020,
  "type": "options",
  "options": [
      {
          "code": "S",
          "name": "Single or Married filing separately",
          "effectiveDate": 2020
      },
      {
          "code": "M",
          "name": "Married filing jointly",
          "effectiveDate": 2020
      },
      {
          "code": "H",
          "name": "Head of Household",
          "effectiveDate": 2020
      }
  ],
  "defaults": [
      {
          "effectiveDate": 2020,
          "code": "S"
      }
  ]
},
{
  "code": "IS_NON_RESIDENT_ALIEN",
  "effectiveDate": 2020,
  "type": "boolean",
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": false
      }
  ]
},
{
  "code": "TWO_JOBS",
  "effectiveDate": 2020,
  "type": "boolean",
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": false
      }
  ]
},
{
  "code": "DEPENDENTS_AMOUNT",
  "effectiveDate": 2020,
  "type": "dollars",
  "constraints": [
      {
          "min": 0,
          "max": null,
          "effectiveDate": 2020
      }
  ],
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": 0
      }
  ]
},
{
  "code": "OTHER_INCOME",
  "effectiveDate": 2020,
  "type": "dollars",
  "constraints": [
      {
          "min": 0,
          "max": null,
          "effectiveDate": 2020
      }
  ],
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": 0
      }
  ]
},
{
  "code": "EXTRA_WH",
  "effectiveDate": 2020,
  "type": "dollars",
  "constraints": [
      {
          "min": 0,
          "max": null,
          "effectiveDate": 2020
      }
  ],
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": 0
      }
  ]
},
{
  "code": "DEDUCTIONS",
  "effectiveDate": 2020,
  "type": "dollars",
  "constraints": [
      {
          "min": 0,
          "max": null,
          "effectiveDate": 2020
      }
  ],
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": 0
      }
  ]
},
{
  "code": "EXEMPT",
  "effectiveDate": 2020,
  "type": "boolean",
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": false
      }
  ]
},
{
  "code": "SUBJECT",
  "effectiveDate": 2020,
  "type": "boolean",
  "defaults": [
      {
          "effectiveDate": 2020,
          "value": true
      }
  ]
}]


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

function App() {
  const [allStatesDetails, setAllStatesDetails] = useState()
  useEffect(() => {
    axios.post("https://engine.staging.joinpuzzl.com/api/taxparams/getTaxParameterDefinitions")
    .then((response) => {
      setAllStatesDetails(response.data.result)
     
    })
  }, [])

  const [calculated, setCalculated] = useState(false)
  const [calculations, setCalculations] =useState([])
  const handleFormChange = (event, category, context) => {
    const value = event.target.value
    const temp = {...userInput}
    if (category === "general" && context === "state") {
        temp["state"] = {

        }
    }
    temp[category][context] = value
    setUserInput(temp)
    
  }
  const [userInput, setUserInput] = useState({
    "general": {
        "date": new Date().toISOString().split('T')[0],
        "state": "CA",
        "pay_frequency": "Daily"
    },
    "federal": {

    },

    "state": {

    }
  })
 
  const generalTaxParams = ["date", "address", "address_line_2", "state", "gross_pay", "gross_pay_YTD", "pay_frequency"]
  const validateForm = () => {
     
    for (var k = 0; k < generalTaxParams.length; k++) {
        const key = generalTaxParams[k]
        if (key === "address_line_2" || key === "gross_pay_YTD") {
            continue
        }
        if (!(key in userInput["general"]) || userInput["general"][key] === "" ) {
            console.log(key)
            return false
        }


    }
        
      
      for (var i = 0; i < federalTaxParams.length; i++) {
        const key = federalTaxParams[i].code
        if (!(key in userInput["federal"]) || userInput["federal"][key] === "" ) {
            console.log(key)
            return false
        }


    }
    for (var j = 0; j < allStatesDetails[userInput["general"]["state"]].length; j++) {
        const key = allStatesDetails[userInput["general"]["state"]][j].code
        if (!(key in userInput["state"]) || userInput["state"][key] === "" ) {
            console.log(key)
            return false
        }


    }
    return true






    }

  const submitForm = async (e) => {
        e.preventDefault()
        if (!validateForm()) {
            alert("wrong form")
        }
       
      const federalParams = []
      const checkDate = userInput["general"]["date"]
      const federal = userInput["federal"]
      for (var key in federal) {
          const curFederal = {"jurisdiction":"US", "code":key, "value":federal[key]}
          federalParams.push(curFederal)
      }

      const stateParams = []
      const stateP = userInput["state"]
      for (var stateKey in stateP) {
          const curState = {"jurisdiction":userInput["general"]["state"], "code":stateKey, "value":stateP[stateKey]}
          stateParams.push(curState)
      }
  

   const firstCall = {
        "wages": [
            {
                "payType": "REG",
                "amount": userInput["general"]["gross_pay_YTD"],
                "location": {
                    "street1": userInput["general"]["address"],
                    "street2": userInput["general"]["address_line_2"],
                    "city": userInput["general"]["city"],
                    "state": userInput["general"]["state"],
                    "zip": userInput["general"]["zip"]
                }
            }
        ],
        "employeeConfig": {
            "residency": 
                {
                    "street1": userInput["general"]["address"],
                    "street2": userInput["general"]["address_line_2"],
                    "city": userInput["general"]["city"],
                    "state": userInput["general"]["state"],
                    "zip": userInput["general"]["zip"]
                },
                "taxparams": federalParams.concat(stateParams),
                "accruals": []
        },
        "companyConfig": {
            "taxparams": []
        },
        "payFrequency": "annually",
        "payDate": checkDate
    }
    
    const withholdingsRequest = await axios.post("https://engine.staging.joinpuzzl.com/api/calculator/calcTax", firstCall)

    const withholdings = withholdingsRequest.data.result
    
    var accrual_withholdings = []
    
    for (var i = 0; i < withholdings.length; i++) {
        const witholdingObject = withholdings[i]
       
        const cur_withholding = {amount:witholdingObject.withheld, taxType:witholdingObject.codename}
        accrual_withholdings.push(cur_withholding)

    }
   
    const dayBeforeCheckDate = new Date(checkDate)
    dayBeforeCheckDate.setDate(dayBeforeCheckDate.getDate() - 1)
    const dayBeforeString = dayBeforeCheckDate.toISOString().split('T')[0]
 
    const secondCall = {
        "wages": [
            {
                "payType": "REG",
                "amount": userInput["general"]["gross_pay"],
                "location": {
                    "street1": userInput["general"]["address"],
                    "street2": userInput["general"]["address_line_2"],
                    "city": userInput["general"]["city"],
                    "state": userInput["general"]["state"],
                    "zip": userInput["general"]["zip"]
                }
            }
        ],
        "employeeConfig": {
            "residency": 
                {
                    "street1": userInput["general"]["address"],
                    "street2": userInput["general"]["address_line_2"],
                    "city": userInput["general"]["city"],
                    "state": userInput["general"]["state"],
                    "zip": userInput["general"]["zip"]
                },
                "taxparams": federalParams.concat(stateParams),
                "accruals": [
                    {
                        "payDate": dayBeforeString,
                        "residency":  {
                            "street1": userInput["general"]["address"],
                            "street2": userInput["general"]["address_line_2"],
                            "city": userInput["general"]["city"],
                            "state": userInput["general"]["state"],
                            "zip": userInput["general"]["zip"]
                        },
                        "earnings": [
                            {
                                "location": {
                                    "street1": userInput["general"]["address"],
                                    "street2": userInput["general"]["address_line_2"],
                                    "city": userInput["general"]["city"],
                                    "state": userInput["general"]["state"],
                                    "zip": userInput["general"]["zip"]
                                },
                                "amount": userInput["general"]["gross_pay_YTD"],
                                "payType": "REG"
                            }
                        ],
                        "withholdings": accrual_withholdings
                    }
                ]
        },
        "companyConfig": {
            "taxparams": []
        },
        "payFrequency": userInput["general"]["pay_frequency"],
        "payDate": userInput["general"]["date"]
    } 
     
    const finalWithholdingsRequest = await axios.post("https://engine.staging.joinpuzzl.com/api/calculator/calcTax", secondCall)
    const finalWithholdings = finalWithholdingsRequest.data.result
    
    

    
    const grossPay = userInput["general"]["gross_pay"]
    var curCalculations = [createData("Gross pay", grossPay)]
      
    var amountSubtracted = 0
    finalWithholdings.forEach((row) => {
            curCalculations.push(createData(row["name"], row["withheld"]))
            amountSubtracted += row["withheld"]
        }
    )
    curCalculations.push(createData("Net pay", grossPay - amountSubtracted));
    

    setCalculations(curCalculations)
    setCalculated(true)
  }

  const backToInput = () => {
      setCalculated(false)
      setCalculations([])
      
  }
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header"/>
      {calculated ?
            <Grid  container spacing={12}>
            <Grid style={{ margin:"0 auto"}} item xs={11} md={6} lg={4}>
            <div style={ResultBodyStyle}>
                    <h1 style={InstructionStyle}>Salary Paycheck Calculator</h1>
                    <InputLabel style={InstructionStyle}>Let's take a look at your estimated earnings after taxes</InputLabel>
                    <BackButton style={{marginTop: 37}} onClick={backToInput}> Back to calculators </BackButton>
                    <h2 style={InstructionStyle}>Your salary paycheck calculation:</h2>
                        <TableContainer  >
                            <Table className={classes.table} aria-label="simple table" size='small' >
                                <TableBody>
                                    {calculations.map((row) => (
                                    <TableRow key={row.name}>
                                        { row.name !== "Net pay" ? 
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell> :
                                            <BoldTableCell component="th" scope="row">
                                                {row.name}
                                            </BoldTableCell>
                                        }
                                        { row.name !== "Net pay" ? 
                                            <TableCell align="right">{"$" + row.amount}</TableCell> :
                                            <BoldTableCell align="right">{"$" + row.amount}</BoldTableCell>
                                        }
                                        
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    <h2 style={InstructionStyle}>Results are based on:</h2>
                    <TableContainer style={{borderWidth:0.5, borderStyle:"solid", borderColor:"#B2BEC3", borderBottom:"none"}}>
                        <Table className={classes.table} aria-label="simple table" size='small'>
                            <TableBody>
                                {information.map((row) => (
                                <TableRow key={row.name} >
                                    <TableCell component="th" scope="row">
                                    {row.name}
                                    </TableCell>
                                    <TableCell align="right">{"$" + row.amount}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <EditButton style={{marginTop: 26}} variant="outlined" onClick={backToInput}>Edit</EditButton>
                </div>
                </Grid>
                </Grid>
        : 
        <Grid  container spacing={12}>
        <Grid style={{ margin:"0 auto"}} item xs={9} md={6} lg={4}>
        <div style={ResultBodyStyle}>
          <h1 style={InstructionStyle}>Salary Paycheck Calculator</h1>
          <p style={InstructionStyle}>Find out your true estimated earnings after taxes</p>
          <p>Salary Calculator</p> 
          
         
          <form style={FormDivStyle} noValidate autoComplete="off" onSubmit={submitForm}>
            <h3 style={InstructionStyle}>First, tell us some general information:</h3>
            <TextField label="check date" type='date' fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" value={userInput["general"]["date"] || new Date().toISOString().split('T')[0]} onChange={(e) => {handleFormChange(e, "general", "date")}}/>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" label="address" value={userInput["general"]["address"] || ""} onChange={(e) => {handleFormChange(e, "general", "address")}}/>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" label="address line 2" value={userInput["general"]["address_line_2"] || ""} onChange={(e) => {handleFormChange(e, "general", "address_line_2")}}/>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" label="city" value={userInput["general"]["city"] || ""} onChange={(e) => {handleFormChange(e, "general", "city")}}/>
            
            <TextField
                fullWidth={true}
                style={FormStyle}
                size="small"
                id="standard-select-currency"
                select
                label="State"
                value={userInput["general"]["state"] || states[0].abbreviation}
                onChange={(e) => {handleFormChange(e, "general", "state")}}
                variant="outlined"
              >
                {states.map((stateOption) => (
                  <MenuItem value={stateOption.abbreviation}>
                    {stateOption.name}
                  </MenuItem>
                ))}
            </TextField>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" label="zip" value={userInput["general"]["zip"] || ""} onChange={(e) => {handleFormChange(e, "general", "zip")}}/>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Gross pay" variant="outlined"  value={userInput["general"]["gross_pay"] || ""} onChange={(e) => {handleFormChange(e, "general", "gross_pay")}}/>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label="Gross pay YTD" variant="outlined" value={userInput["general"]["gross_pay_YTD"] || ""} onChange={(e) => {handleFormChange(e, "general", "gross_pay_YTD")}}/>
            <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" select label="Pay Frequency" variant="outlined" value={userInput["general"]["pay_frequency"] || freqs[0]} onChange={(e) => {handleFormChange(e, "general", "pay_frequency")}}>
            {freqs.map((freqOption) => (
                    <MenuItem value={freqOption}>
                      {freqOption}
                    </MenuItem>
                ))}
            </TextField>
                  
            <h3 style={InstructionStyle}>Now for some federal information:</h3>
                
           { federalTaxParams && federalTaxParams.map((detail) => {
             
             if (detail.type === "options") {
                userInput["federal"][detail.code] = detail.options[0].code
               return (
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label={detail.code} variant="outlined" select value={userInput["federal"][detail.code] || detail.options[0].code} onChange={(e) => {handleFormChange(e, "federal", detail.code)}}>
               {detail.options.map((option) => (
                <MenuItem value={option.code}>
                    {option.name}
                  </MenuItem>
               ))}
                </TextField>
               )
             }
             else if (detail.type === "boolean") {
                userInput["federal"][detail.code] = false
                return (
                <TextField fullWidth={true} style={FormStyle}  size="small" id="outlined-basic" label={detail.code} variant="outlined" select value={userInput["federal"][detail.code] || false} onChange={(e) => {handleFormChange(e, "federal", detail.code)}}>
               {[{code:"Yes", value:true}, {code:"No", value:false}].map((option) => (
                <MenuItem value={option.value}>
                    {option.code}
                  </MenuItem>
               ))}
                </TextField>
               )
            }
            else {
              return (
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label={detail.code} variant="outlined"  value={userInput["federal"][detail.code] || ""} onChange={(e) => {handleFormChange(e, "federal", detail.code)}}/>
              )
            }
            })
            
           }
           <h3 style={InstructionStyle}>Now for some state information:</h3>
           { userInput["general"]["state"] && allStatesDetails && allStatesDetails[userInput["general"]["state"]].map((detail) => {
            
             if (detail.type === "options") {
               userInput["state"][detail.code] = detail.options[0].code
               return (
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label={detail.code} variant="outlined" select value={userInput["state"][detail.code] || detail.options[0].code} onChange={(e) => {handleFormChange(e, "state", detail.code)}}>
               {detail.options.map((option) => (
                <MenuItem value={option.code}>
                    {option.name}
                  </MenuItem>
               ))}
                </TextField>
               )
             }
            else if (detail.type === "boolean") {
                userInput["state"][detail.code] = false
                return (
                <TextField fullWidth={true} style={FormStyle}  size="small" id="outlined-basic" label={detail.code} variant="outlined" select value={userInput["state"][detail.code] || false} onChange={(e) => {handleFormChange(e, "state", detail.code)}}>
               {[{code:"Yes", value:true}, {code:"No", value:false}].map((option) => (
                <MenuItem value={option.value}>
                    {option.code}
                  </MenuItem>
               ))}
                </TextField>
               )
            }
            else {
              return (
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label={detail.code} variant="outlined" value={userInput["state"][detail.code] || ""} onChange={(e) => {handleFormChange(e, "state", detail.code)}}/>
              )
            }





            })
           }
            
          
            <ContinueButton type="submit" style={ButtonStyle} variant="contained" color="primary">Continue</ContinueButton>
          </form>
          
        </div>
       </Grid>
       </Grid>
        
        
        
        
        }
        
        
    </div>








  );
}

export default App;
