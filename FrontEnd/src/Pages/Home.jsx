import React, { useEffect, useRef, useState } from 'react'
import GogleMap from '../assets/Map.jpg'
import { useGSAP } from '@gsap/react'
import './Home.css'
import gsap from 'gsap';
import VehicleAvailable from '../Components/VehicleAvailable';
import LocationSearchPanel from '../Components/LocationSearchPanel';
import ConfirmRide from '../Components/ConfirmRide';
function Home() {

    const [Pickup, setPickup] = useState('');
    const [Destination, setDestination] = useState('');
    const [PanelOpen, setPanelOpen] = useState(false);
    const [VehiclePanel, setVehiclePanel] = useState(false)
    const [ConfirmRidebtn, setConfirmRidebtn] = useState(false)
    const ConfirmRef = useRef(null);
    const VehiclePanelRef = useRef(null)
    const Panel = useRef(null)
    const Backbtn = useRef(null)

    const SubmitHandler = (e) => {
        console.log("submited");
        e.preventDefault();
    }

    console.log(ConfirmRef.current);

    useGSAP(() => {
      if(PanelOpen){
        gsap.to(Panel.current,{
            height: '72%',
            padding: '10px', 
            visibility:'visible'
        })
        gsap.to(Backbtn.current,{
            opacity:'1',
        })
        console.log("6465");
      } else {
        gsap.to(Panel.current,{
            height: '0px',
            padding: '0px',
            visibility:'hidden'
        })
        gsap.to(Backbtn.current,{
            opacity:'0',
        })
        console.log("64646546");
      }
    }, [PanelOpen,Backbtn])
    
    useGSAP(function(){
      if(VehiclePanel){
        gsap.to(VehiclePanelRef.current,{
            transform:'translateY(0)',
            visibility:'visible'
          })
          setPanelOpen(false)
      } else {
        gsap.to(VehiclePanelRef.current,{
          transform:'translateY(100%)',
          visibility:'hidden'
        })
      }
    },[VehiclePanel])

    useGSAP(()=>{
      if(ConfirmRidebtn){
        gsap.to(ConfirmRef.current,{
          transform:'translateY(0)',
          visibility:'visible'
        })
        setPanelOpen(false);
        setVehiclePanel(false);
      }else{
        gsap.to(ConfirmRef.current,{
          transform:'translateY(100%)',
          visibility:'hidden',
          zIndex:'-100',
        })
      }
      console.log(ConfirmRidebtn);
      console.log(ConfirmRef.current);
    },[ConfirmRidebtn])

  return (
    <div className='relative h-screen w-screen'>
      <div className="">
        <img src={GogleMap}  className='h-screen w-screen -z-10' alt="img" />
      </div>
      <div className="ParentDiv absolute bottom-0 flex flex-col h-screen justify-end w-full">
          <div className="bg-slate-800 h-[27%]">
            <div ref={Backbtn} onClick={(e)=>{   setPanelOpen(false)   }} className="z-10 absolute top-2 right-2 font-semibold text-xl ">Back</div>
            <form onSubmit={(e)=>{    SubmitHandler(e)    }} className='firstDiv relative flex flex-col gap-2 w-full px-4 py-5 justify-center items-center '>
              <div className="w-full font-semibold text-2xl ">Find Your Trip :</div>
              <input type="text" onClick={(e)=>{   setPanelOpen(true)     }} value={Pickup} onChange={(e)=>{    setPickup(e.target.value)   }}  className='w-[80%] py-2 px-5 rounded-2xl text-black font-semibold placeholder:text-black placeholder:font-semibold' placeholder='Enter Your Location' name="Initial Location"/>
              <input type="text" onClick={(e)=>{   setPanelOpen(true)     }} value={Destination} onChange={(e)=>{   setDestination(e.target.value)  }} className='w-[80%] py-2 px-5 rounded-2xl text-black font-semibold placeholder:text-black placeholder:font-semibold' placeholder='Enter Your Destination' name="Final Destination"/>
              {/* <button type='submit' className='bg-sky-500 px-5 rounded-xl text-center font-semibold text-black text-xl '>   SIGN UP</button> */}
            </form>
          </div>
          <div ref={Panel} className="secondDiv bg-slate-800 px-16">
            <LocationSearchPanel VehiclePanel={VehiclePanel} setVehiclePanel={setVehiclePanel}/>
          </div>
      </div>
      <VehicleAvailable VehiclePanelRef={VehiclePanelRef} setConfirmRidebtn={setConfirmRidebtn} />
       <ConfirmRide ConfirmRef={ConfirmRef}/>
    </div>
  )
}

export default Home