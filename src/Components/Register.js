import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState} from 'react'


function Register() {

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
      })
      const {fname,lname,email,password} = formData
      const onChange = e => setFormData({...formData,[e.target.name]:[e.target.value]})
      const onSubmit = async e => {
        e.preventDefault()
        console.log("user registered")
        fetch('http://localhost:5000/api/')
        // Express funtion to register user goes here
    }


  return (
    <div className='background'>
    <ParentContainer>
      <LoginContainer>
          <LoginForm onSubmit={e => onSubmit(e)}>
            <Title>Welcome<span>!</span></Title>
            <Lead><u>Register below to get started.</u></Lead> 
            <Input value={fname} onChange={e=>onChange(e)} placeholder="First Name" name="fname" type="text" id="fname"/>
            <Input value={lname} onChange={e=>onChange(e)} placeholder="Last Name" name="lname" type="text" id="fname"/>
            <Input value={email} onChange={e=>onChange(e)} placeholder="Email" name="email" type="email" id="email"/>
            <Input value={password} onChange={e=>onChange(e)} placeholder="Password "name="password" type="password" id="password"/>
            <SubmitButton type="submit" placeholder="Submit"/>
            <Lead> Already have an account? <Link className='hyperlink' to='/login'>Login here</Link></Lead>
          </LoginForm>
      </LoginContainer>
    </ParentContainer>
    </div>
  )
}

export default Register


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
const LoginForm = styled.form``

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

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  >span {
      color:#7289da;
  }
`

const Lead = styled.p`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  margin-top: 10px;

  >u {
      text-decoration-color: #7289da !important;
  }
`