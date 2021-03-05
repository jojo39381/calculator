
import './App.css';
import React, {useState, useEffect} from 'react';
import {TextField} from '@material-ui/core'
import {InputLabel} from '@material-ui/core'
import {FormControlLabel} from '@material-ui/core'
import {Switch} from '@material-ui/core'
import {MenuItem} from '@material-ui/core'


import {Button} from '@material-ui/core'
import axios from 'axios'


// rate style



const FormStyle = {
  display:"block",
  marginBottom:15,
  width:"60%"
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
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
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

const generals = [
  "Yes",
  "No"
]



const filingStatuses = [{key: "Single", status:"Single or married filing separately"}, {key:"Married", status:"Married filing jointly"}, {key:"Head", status:"Head of Household"}]



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


function App() {


  const [allStatesDetails, setAllStatesDetails] = useState({})
  useEffect(() => {
    axios.post("https://engine.staging.joinpuzzl.com/api/taxparams/getTaxParameterDefinitions")
    .then((response) => {
      setAllStatesDetails(response.data.result)
     
    })
  }, [])


  const [state, setState] = useState("AZ")
  const [stateDetails, setStateDetails] = useState([])
  const [result, setResult] = useState([])
  const [calculated, setCalculated] = useState(false)
  // const handleStateChange = (event) => {
  //   const curState = event.target.value
  //   setState(curState)
  //   console.log(allStatesDetails[curState])
  //   setStateDetails(allStatesDetails[curState])

  // }

  const handleFormChange = (event, category, context) => {
    const value = event.target.value
    const temp = {...userInput}
    temp[category][context] = value
    setUserInput(temp)
    
  }


  const [userInput, setUserInput] = useState({
    "general": {

    },
    "federal": {

    },

    "state": {

    }
  })

  // const [freq, setFreq] = useState()
  // const handleFreqChange = (event) => {
  //   setFreq(event.target.value)
  // }
  // const [general, setGeneral] = useState()
  // const handleGeneralChange = (event) => {
  //   setGeneral(event.target.value)
  // }
  // const [filingStatus, setFilingStatus] = useState()
  // const handleFilingStatusChange = (event) => {
  //   setFilingStatus(event.target.value)
  // }

  const submitForm = async (e) => {
      e.preventDefault()
      
      const federalParams = []
      const checkDate = userInput["general"]["date"]
      const federal = userInput["federal"]
      for (var key in federal) {
          const curFederal = {"jurisdiction":"US", "code":key, "value":federal[key]}
          federalParams.push(curFederal)
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
                "taxparams": federalParams,
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
    for (var withholding in withholdings) {
        const cur_withholding = {amount:withholding["withheld"], taxType:withholding["codename"]}
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
                "taxparams": federalParams,
                "accruals": [
                    {
                        "payDate": "1/1/2021",
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
    setResult(finalWithholdings)
    setCalculated(true)
    
      
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={BodyStyle}>
          <h1>Salary Paycheck Calculator</h1>
          <p>Find out your true estimated earnings after taxes</p>
          <p>Salary Calculator</p> 
          
         
          <form style={FormDivStyle} noValidate autoComplete="off" onSubmit={submitForm}>
            <h3 style={InstructionStyle}>First, tell us some general information:</h3>
            <TextField type='date' fullWidth={true} style={FormStyle} size="small" id="outlined-basic" variant="outlined" value={userInput["general"]["date"] || new Date().toISOString().split('T')[0]} onChange={(e) => {handleFormChange(e, "general", "date")}}/>
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
                
           { federalTaxParams && federalTaxParams.map((detail) => {
             
             if (detail.type == "options") {
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
            else {
              return (
                <TextField fullWidth={true} style={FormStyle} size="small" id="outlined-basic" label={detail.code} variant="outlined"  value={userInput["federal"][detail.code] || ""} onChange={(e) => {handleFormChange(e, "federal", detail.code)}}/>
              )
            }





            })
           }

            <h3 style={InstructionStyle}>State Information:</h3>
            <FormControlLabel
              style={SwitchStyle}
              control={<Switch  name="checkedA" />}
              label="Are you exempt from state taxes?"
            />
    
           { userInput["general"]["state"] && allStatesDetails[userInput["general"]["state"]].map((detail) => {
            
             if (detail.type == "options") {
               return (
                <TextField fullWidth={true} style={FormStyle} value={detail.options[0].code} size="small" id="outlined-basic" label={detail.code} variant="outlined" select value={userInput["state"][detail.code] || detail.options[0].code} onChange={(e) => {handleFormChange(e, "state", detail.code)}}>
               {detail.options.map((option) => (
                <MenuItem value={option.code}>
                    {option.name}
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
            
          
            <Button type="submit" style={ButtonStyle} variant="contained" color="primary">Continue</Button>
          </form>
          
        </div>

      </header>
    </div>
  );
}

export default App;
