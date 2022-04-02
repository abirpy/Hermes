import { Link } from 'react-router-dom'
import React from 'react';
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const HomeButtons = () => {
  return (
        <>
        <ButtonGroup size="lg" className="mb-2">
        <div className="mb-2">
        <Link to = {'/patient'}>
            <Button variant="primary" size="lg">
            Doctor
            </Button>{' '}
        </Link>
        <Link to = {'/doctor'}>
            <Button variant="primary" size="lg">
            Patient
            </Button>
        </Link>
        </div>
            </ButtonGroup>
        </>
  )
}

export default HomeButtons