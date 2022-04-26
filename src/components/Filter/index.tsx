import React, { useEffect, useMemo, useState } from 'react'
import Rockets from "./graphql"

const rockets = [
  'Falcon9',
  'Falcon Heavy',
  'Starship',
  'Fast Rocket'
]

export default function Filter() {
  const [busca, setBusca] = useState('')


  const filteredRockets = useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return rockets
      .filter((rocket) => rocket.includes(lowerBusca));

  }, [busca])

  return (
    <div className='container'>
      <h1>Filteres Rockets</h1>
      <div className="input-group input-group-sm mb-3">
        <input className="form-control"
          type="text"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        />
      </div>
      <ul>
        {filteredRockets.map((rocket) => (
          <li key={rocket}>{rocket}</li>
        ))}
      </ul>
    </div>
  )
}
