import React from 'react'
import { ReactComponent as LogoX } from '../../assets/img/astronaut.svg'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light shadow p-3rounded">
        <div className="container-fluid">
          <form className="d-flex">
            <input className="form-control me-5" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <LogoX />
        </div>
      </nav>
    </>
  )
}
