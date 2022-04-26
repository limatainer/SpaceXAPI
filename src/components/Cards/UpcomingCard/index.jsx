import SpaceUpcomingMission from "./graphql"
import React, { useState, useEffect } from 'react';

import './styles.css'

export default function Future() {
  const [data, setData] = useState([])
  const loadUpcomingMission = async () => {
    const spaceMissions = await SpaceUpcomingMission.getUpMission(4);
    setData(spaceMissions);
  }

  useEffect(() => {
    loadUpcomingMission();
  }, [])

  console.log("data", data)
  return (
    <>
      <div className='container'>
        <h1>Future Launches</h1>
        <br />
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {data.map((item, id) => (
            <>
              < div className="col" >
                <div className="card ship-card" key={id}>
                  <img className="ship-image" src={item && item.ships[0] && item.ships[0].image
                    ? item.ships[0].image : "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png"} alt="Just a Ship" />
                </div>

                <div className='card-body'>
                  <p>{item.id}</p>
                  <h5>{item.rocket.rocket_name}</h5>
                  <h6>{item.mission_name}</h6>

                </div>
              </div>
            </>
          ))}
        </div>
      </div >
    </>
  )
}
