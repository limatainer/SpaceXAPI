import React from 'react'
import { ReactComponent as LogoX } from '../../assets/img/astronaut.svg'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light shadow p-3 rounded">
        <div className="container-fluid">
          <LogoX />
          <a className="link-primary flex-sm-fill text-sm-center nav-link active" aria-current="page" href="#">Home</a>
          <a className="link-primary flex-sm-fill text-sm-center nav-link" href="#">Past Launches</a>
          <a className="link-primary flex-sm-fill text-sm-center nav-link" href="#">Upcoming Launches</a>
        </div>
      </nav>
    </>
  )
}
