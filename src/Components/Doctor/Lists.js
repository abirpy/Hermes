import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const patientList = [{
    'name' : 'A',
    'medicine' : {'x' : 5, 'y' : 10},
    'id' : 1
},
{
    'name' : 'B',
    'medicine' : {'z' : 2, 'l' : 6},
    'id' : 2
},
{
    'name' : 'C',
    'medicine' : {'m' : 3, 'n' : 7},
    'id' : 3
},
]

const Tracker = () => {
    const [patients, setPatients] = useState(
        patientList
    )

    const handleChange = () => {
        patientList.forEach((patient) => {
            patient.medicine.m
        })
        setMedications([...medicineList])
    }
    
  return (
    <>
    <table>
    <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Dosage</th>
    </tr>
    {medications.map((medicine) =>
        <tr>
            <td>{medicine.name}</td>
            <td>{medicine.amount}</td>
            <td>{medicine.dosage}</td>
        </tr>
    )}
    </table>
    <br/>
    <Button variant="warning" size="lg" onClick = {handleChange}>
            Doctor
    </Button>
    </>

)}

export default Tracker