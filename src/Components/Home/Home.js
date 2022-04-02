import Alert from 'react-bootstrap/Alert'
import HomeButtons from './HomeButtons'
import Header from './Header'

import React from 'react';
const Home = () => {
  return (
    <div >
        <Header/>
        <div className="header-buttons">
          <p1> Are you a doctor or a patient?</p1>
          <br/>
          <br/>
          {/* <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice
              and tidy.
          </p> */}
          <HomeButtons/>
        </div>
    </div>
  )
}

export default Home