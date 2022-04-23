import Past from 'components/Cards'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'

import { ReactComponent as LaunchDayX } from '../../assets/img/launch_day.svg'

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <h1>Let's get started</h1>
        <p>Bellow are the Space X past Launches listed</p>
      </div>
      <br />
      <div className="container card mb-3 mw-540 bg-dark text-light border border-primary">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="container">
              <LaunchDayX />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><h1>Displaying the best Launches</h1></h5>
              <p className="card-text">
                follow the best rockets from SpaceX
              </p>
              <p className="card-text"><small className="text-muted">built with graphql and typescript</small></p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr className='w-50 align-self-center ' />
      <Past />
      <br />

      <Footer />
    </>
  )
}
