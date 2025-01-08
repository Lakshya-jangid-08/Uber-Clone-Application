import React from 'react'
import Car from '../assets/Car.png'

function ConfirmRide(props) {
  return (
    <div ref={props.ConfirmRef} className='absolute bottom-0 z-15 w-full py-2 px-5 bg-slate-950' >
        <h2 className='text-3xl text-center' >Confirm Ride</h2>
        <img src={Car} alt="" />
        <div className="flex flex-col w-full py-4 gap-3">
            <div className="flex justify-center items-center gap-2 border-b-2 border-b-green-400 py-3">
                <div className='font-bold'>O</div>
                <div className="text-xl">24B, Gujaro ka mahola, Bikharniya Kallan, Nagaur, Rajasthan</div>
            </div>
            <div className="flex justify-center items-center gap-2 border-b-2 border-b-green-400 pb-3">
                <div className='font-bold'>D</div>
                <div className="text-xl">15/2, House no.13, Baroi Road, Mundra, Kutch</div>
            </div>
            <div className='flex justify-center items-center pb-4'>
                <h3 className='font-semibold text-2xl'>195$  </h3>
                <p className='font-semibold text-2xl ml-2'>Case</p>
            </div>
        </div>
        <button className='w-full bg-emerald-600 rounded-md text-2xl font-semibold'>Confirm Ride</button>
    </div>
  )
}

export default ConfirmRide