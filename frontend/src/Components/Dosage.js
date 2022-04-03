import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

function Dosage() {

    const [formData, setFormData] = useState({
        numMeds: 0,
        meds: [],
        dosage: [],
        usage: []
    })
    const {numMeds,meds,dosage,usage} = formData

    const onChange = e => {setFormData({[e.target.name]:[e.target.value]})

    const medInputs = []
    // for (var i = 0; i < numMeds; i++) {
    //     medInputs.push(
    //         <div>
    //             <MedInput placeholder="Medication Name" name="meds" value={meds} type="text"/>
    //             <DosageInput placeholder="Dosage in (units)" name="dosage" value={dosage} type="number"/>
    //             <UsageInput placeholder="Usage/Day" name="usage" value={usage} type="number"/>
    //         </div>
    //     )
    // }
}

  return ( 
    <ParentContainer>
        <LoginContainer>
            <Title>Enter your medication info<span>.</span></Title>
            <Lead><u>This will be verified by your doctor.</u></Lead>
            <Input onChange={e=>onChange(e)} value={numMeds} placeholder="How many medications do you have?" name="numMeds" type="number" id="password"/>

        </LoginContainer>
    </ParentContainer>

  )
}

export default Dosage

const ParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
background-color: #2c2f33;
color: #fff;
  max-width: 420px;
  margin: 30px auto;
  overflow: auto;
  min-height: 600px;
  border: .2px solid white;
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 25px;
  background-color: #2c2f33;
`

const LoginContainer = styled.div`
width:95%;
`

const Title = styled.h1`
  font-size: 2.7rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  >span {
      color:#7289da;
  }
`

const Lead = styled.p`
  font-size: 1.15rem;
  margin-bottom: 1rem;
  margin-top: 10px;

  >u {
      text-decoration-color: #7289da !important;
  }
`
const Input = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 10px;
`

const MedInput = styled.input`
width: 45%;
`

const DosageInput = styled.input`
width: 25%;
`

const UsageInput = styled.input`
width: 20%;
`