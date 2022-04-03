import React from 'react'
import styled from 'styled-components'

function Pharmacy() {
  return (
    <ParentContainer>
      <PharmacyContainer>
          <Form>
            <Title>Almost done!</Title>
            <Lead><u>Enter address information so we know how to deliver to you.</u></Lead> 
            <Input placeholder="Home Address" name="homeaddress" type="text" id="homeaddress"/>
            <Input placeholder="Address of nearest pharmacy" name="pharmacy" type="text" id="pharmacy"/>
            <SubmitButton type="submit" placeholder="Submit"/>
          </Form>
      </PharmacyContainer>
    </ParentContainer>
  )
}

export default Pharmacy


const ParentContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const PharmacyContainer = styled.div`
width:40%;
`
const Form = styled.form``

const Input = styled.input`
width: 100%;
padding: 10px;
margin-bottom: 10px;
`

const SubmitButton = styled.input`
margin-top:10px;
padding: 5px 35px;
`

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`

const Lead = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 10px;
`