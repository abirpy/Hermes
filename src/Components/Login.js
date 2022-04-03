import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState} from 'react'


function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const {email,password} = formData
  const onChange = e => setFormData({...formData,[e.target.name]:[e.target.value]})
  const onSubmit = async e => {
    e.preventDefault()
    console.log("user logged in ")
    console.log(email,password)
    // Express funtion to log user in goes here
}

  return (
    <div className="background">
    <ParentContainer>
      <LoginContainer>
          <LoginForm onSubmit={e => onSubmit(e)}>
            <Title>Welcome Back<span>!</span></Title>
            <Lead><u>Please sign in here</u></Lead>
            <Input onChange={e=>onChange(e)} value={password} placeholder="Password "name="password" type="password" id="password"/>
            <SubmitButton type="submit" placeholder="Submit"/>
            <Lead> Don't have an account? <Link className="hyperlink" to='/register'>Register here</Link></Lead>
          </LoginForm>
      </LoginContainer>
    </ParentContainer>
    </div>
  )
}

export default Login

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
  font-size: 1.25rem;
  margin-bottom: 1rem;
  margin-top: 10px;

  >u {
      text-decoration-color: #7289da !important;
  }
`