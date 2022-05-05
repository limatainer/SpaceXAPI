import React, { useEffect, useMemo, useState } from 'react'
import Rockets from "./graphql"

const rockets = [
  'Falcon9',
  'Falcon Heavy',
  'Starship',
  'Fast Rocket'
]

export default function Filter() {
  const [busca, setBusca] = useState('');
  const [rocketList, setRocketList] = useState(['']);

  useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    const filteredRocket = rockets.filter((rocket) => rocket.toLowerCase().includes(lowerBusca));
    console.log(filteredRocket)
    setRocketList(filteredRocket);

  }, [busca]);

  return (
    <div className='container'>
      <h1>Filteres Rockets</h1>
      <div className="input-group input-group-sm mb-3">
        <input className="form-control"
          style={{ color: "#fff" }}
          type="text"
          value={busca}
          onChange={(ev) => setBusca(ev.target.value)}
        />
      </div>
      <ul>
        {rocketList.map((rocket) => (
          <li key={rocket}>{rocket}</li>
        ))}
      </ul>
    </div>
  )
}