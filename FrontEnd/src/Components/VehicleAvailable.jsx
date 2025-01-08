import React from 'react'
import Car from '../assets/Car.png'
import Bike from '../assets/Bike.png'
import Auto from '../assets/Auto.png'
import { GiPlagueDoctorProfile } from "react-icons/gi";


function VehicleAvailable(props) {
  return (
    <div ref={props.VehiclePanelRef} className="flex gap-2 translate-y-full bg-slate-500 flex-col w-full absolute bottom-0 h-[40%] px-4 py-5">
        <div onClick={()=>{  props.setConfirmRidebtn(true)  }}  className='relative gap-3 hover:border-black border-2 border-transparent rounded-2xl px-3 py-1 flex w-full items-center justify-start'>
            <img src={Car} alt="" className='h-16'/>
            <div className="">
                <h2>UberGo<span className='font-semibold'>< GiPlagueDoctorProfile size={20} className='mb-2 inline-block' color='black'/>4</span></h2>
                <h3>2 min away</h3>
                <h4>affordable, compact rides</h4>
            </div>
            <h1 className='font-bold absolute right-1'>$ 256</h1>
        </div>
        <div onClick={()=>{  props.setConfirmRidebtn(true)  }} className='relative gap-3 hover:border-black hover:border-2 rounded-2xl px-3 py-1 flex w-full items-center justify-start'>
            <img src={Bike} alt="" className='h-16'/>
            <div className="">
                <h2>Moto <span className='font-semibold'>< GiPlagueDoctorProfile size={20} className='mb-2 inline-block' color='black'/>1</span></h2>
                <h3>16 min away</h3>
                <h4>affordable rides</h4>
            </div>
            <h1 className='font-bold absolute right-1'>$ 152</h1>
        </div>
        <div onClick={()=>{  props.setConfirmRidebtn(true)  }} className='relative gap-3 hover:border-black hover:border-2 rounded-2xl px-3 py-1 flex w-full items-center justify-start'>
            <img src={Auto} alt="" className='h-16'/>
            <div className="">
                <h2>Auto <span className='font-semibold'>< GiPlagueDoctorProfile size={20} className='mb-2 inline-block' color='black'/>3</span></h2>
                <h3>10 min away</h3>
                <h4>compact rides</h4>
            </div>
            <h1 className='font-bold absolute right-1'>$ 200</h1>
        </div>
    </div>
  )
}

export default VehicleAvailable