import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'

const medicineList = [{
    'name' : 'A',
    'amount' : 20,
    'dosage' : 2,
    'id' : 1
},
{
    'name' : 'B',
    'amount' : 30,
    'dosage' : 3,
    'id' : 2
},
{
    'name' : 'C',
    'amount' : 50,
    'dosage' : 5,
    'id' : 3
},
{
    'name' : 'D',
    'amount' : 100,
    'dosage' : 5,
    'id' : 4
},
{
    'name' : 'E',
    'amount' : 70,
    'dosage' : 5,
    'id' : 5
}
]

const Tracker = () => {
    const [medications, setMedications] = useState(
        medicineList
    )

    const handleChange = () => {
        medicineList.forEach((medicine) => {
            medicine.amount = medicine.amount - medicine.dosage
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
            Current Amount
    </Button>
    </>

)}

export default Tracker