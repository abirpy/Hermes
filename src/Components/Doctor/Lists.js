import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const patientList = [{
    'name' : 'A',
    'drug name' :  'E',
    'amount' :  5,
    'id' : 1
},
{
    'name' : 'B',
    'drug name' :  'F',
    'amount' :  9,
    'id' : 2
},
{
    'name' : 'C',
    'drug name' :  'G',
    'amount' :  15,
    'id' : 3
},
{
    'name' : 'O',
    'drug name' :  'R',
    'amount' :  12,
    'id' : 4
},
{
    'name' : 'P',
    'drug name' :  'S',
    'amount' :  8,
    'id' : 5
},
]

const Lists = () => {
    const [patients, setPatients] = useState(
        patientList
    )
    console.log(patients)

    const handleChange = (name, newP) => {
        patients.forEach((patient) => {
            if(patient.name === name){
                patient.amount = newP
            }
        })
        setPatients([...patientList])
    }
    
  return (
    <>
    <table>
    <tr>
        <th>Name</th>
        <th>Medicine</th>
        <th>Dosage</th>
        <th>Change</th>
    </tr>
    {patients.map((patient) =>
        <tr>
            <td>{patient.name}</td>
            <td>{patient['drug name']}</td>
            <td>{patient.amount}</td>
            <td>
            <Button variant="warning" size="sm"
        onClick = {() => handleChange(
            patient.name, 13)
            }>
                    Change Prescription
            </Button>
            </td>
        </tr>
    )}
    </table>
    <br/>
    {/* <Button variant="warning" size="lg" 
        onClick = {() => handleChange(
            'B', 14)
    }>
            Change Prescription
    </Button> */}
    </>

)}

export default Lists