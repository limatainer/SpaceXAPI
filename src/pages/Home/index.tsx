import Past from 'components/Cards/PastCard'
import Future from 'components/Cards/UpcomingCard'
import Filter from 'components/Filter'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import React from 'react'

import { ReactComponent as LaunchDayX } from '../../assets/img/launch_day.svg'

import './styles.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <h1 className='hola'>Let's get started</h1>
      </div>
      <br />
      <div className="container card mb-3 mw-540 bg-dark text-light">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="container animacao">
              <LaunchDayX />
            </div>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <br />
                <h1 className='neons'>Displaying the best Launches</h1>
                <br />
                <p>Bellow are the Space X past Launches listed</p>
              </h5>
              <p className="card-text">
                follow the best rockets from SpaceX
              </p>
              <p className="card-text"><small className="text-muted">Developed with graphql, apollo and typescript</small></p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Filter />
      <br />
      <Past />
      <br />

      <Footer />
    </>
  )
}
