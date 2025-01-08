import { useGSAP } from '@gsap/react'
import React, { useEffect, useRef, useState } from 'react'

function LocationSearchPanel(props) {
  const Location = [
    "24B, Gujaro ka mahola, Bikharniya Kallan, Nagaur, Rajasthan",
    "15/2, House no.13, Baroi Road, Mundra, Kutch",
    "Gali no.34, Ajmer-Jaipur Road, Ajmer, Rajasthan",
    "Mithal Choraha, Madaar,Ajmer"
  ]

  return (
    <div className='w-full h-full px-5 py-2 flex-col flex gap-3'>
      {
        Location.map(function(element,idx){
          return <div key={idx} onClick={(e)=>{ props.setVehiclePanel(true) }} className="border-2 border-slate-700 active:border-black rounded-xl py-3 flex gap-4 px-4 justify-start items-center">
                   <div className="location">O</div>
                   <div className="Address text-xl">{element}</div>
                 </div>
          })
      }
    </div>
  )
}

export default LocationSearchPanel