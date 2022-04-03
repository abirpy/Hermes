import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'

function Dosage() {

    const [formData, setFormData] = useState({
        meds: '',
        dosage: '',
        usage: ''
    })
    const {meds,dosage,usage} = formData

    const onChange = e => setFormData({...formData,[e.target.name]:[e.target.value]})
    const onSubmit = async e => {
      e.preventDefault()
      console.log(meds)
      console.log(dosage)
      console.log(usage)
      // Express funtion to update med info here
  }
  return ( 
    <ParentContainer>
        <LoginContainer>
            <Title>Enter your medication info<span>.</span></Title>
           
            <Lead>Enter all information as comma-separated values. <u>This will be verified by your doctor before delivery.</u></Lead> 
            <form onSubmit={e => onSubmit(e)}>
            <Input onChange={e=>onChange(e)} value={meds} placeholder="Medicine (e.g Atorvastatin, Levothyroxine) "name="meds" type="text" id="meds"/>
            <Input onChange={e=>onChange(e)} value={dosage} placeholder="Dosage (mg)" name="dosage" type="text" id="dosage"/>
            <Input onChange={e=>onChange(e)} value={usage} placeholder="How many doses per day?"name="usage" type="text" id="usage"/>
            <SubmitButton type="submit" placeholder="Submit"/>
            </form>
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
const SubmitButton = styled.input`
margin-top:10px;
padding: 5px 35px;
border: 1px solid white;


:hover{
    background-color: #7289da;
    transition: .3s;
    color: white;
    border: 1px solid #7289da;
}

:active{
  transform: translateY(3px);
  transition: 0.1s;  
}
`