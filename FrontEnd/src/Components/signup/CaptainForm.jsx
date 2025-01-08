import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function CaptainForm() {

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [Color, setColor] = useState('')
    const [Plate, setPlate] = useState('')
    const [Capacity, setCapacity] = useState('')
    const [VehicleType, setVehicleType] = useState('')
    const navigate = useNavigate();

    const SubmitHandler = async (e)=>{
        e.preventDefault();
        
        const CaptainData = {
            Captainname : {
                first_name : FirstName,
                last_name : LastName
            },
            Email : Email,
            Password : Password,
            Vehicle : {
                Color : Color,
                Plate : Plate,
                Capacity : Capacity,
                VehicleType : VehicleType
            }
        } 
                                                              // /captain/register
        const response = await axios.post(`${import.meta.env.VITE_url}/captain/register`,CaptainData);
        if(response.status == 200){
            const data = response.data;
            localStorage.setItem("token",data.token)
            navigate('/home');
        } else{
            console.log("Some error occupied");
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setCapacity('');
        setColor('');
        setVehicleType('');
        setPlate('');
    }

  return (
        <>
            <div>
              <div className="font-semibold underline text-4xl text-center">Signup Captain Account</div>
              <form onSubmit={(e)=>{ SubmitHandler(e) }}>
                  <div className=" w-full mt-12 flex justify-center items-center flex-col">
                    <div className="flex name w-fit justify-between">
                        <div className="flex-col flex w-[48%] px-2">
                            <label className='mt-4 px-5 py-2 font-semibold' >First Name</label>
                            <input value={FirstName} onChange={(e)=>{setFirstName(e.target.value)}} className=' py-2 px-5  rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="text" name="first_name" placeholder='Enter First Name'/>
                        </div>
                        <div className=" flex flex-col px-2 w-[48%]">
                            <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Last Name</label>
                            <input value={LastName} onChange={(e)=>{setLastName(e.target.value)}} className=' py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="text" name="last_name" placeholder='Enter Last Name'/>
                        </div>
                    </div>
                    <div className="email px-2 flex flex-col w-full">
                        <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Email</label>
                        <input value={Email} onChange={(e)=>{ setEmail(e.target.value) }} className='py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="email" name="Email" placeholder='Enter Email'/>
                    </div>
                    <div className="password flex flex-col w-full px-2">
                        <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Password</label>
                        <input value={Password} onChange={(e)=>{ setPassword(e.target.value) }} className='py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="password" name="Password" placeholder='Enter Password'/>
                    </div>
                    <div className="flex name w-fit justify-between">
                        <div className="flex-col flex w-[48%] px-2">
                            <label className='mt-4 px-5 py-2 font-semibold' >Color</label>
                            <input value={Color} onChange={(e)=>{setColor(e.target.value)}} className=' py-2 px-5  rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="text" name="Color" placeholder='Enter Vehicle Color'/>
                        </div>
                        <div className=" flex flex-col px-2 w-[48%]">
                            <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Plate number</label>
                            <input value={Plate} onChange={(e)=>{setPlate(e.target.value)}} className=' py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="text" name="Plate" placeholder='Enter Plate Number'/>
                        </div>
                    </div>
                    <div className="flex name w-fit justify-between">
                        <div className="flex-col flex w-[48%] px-2">
                            <label className='mt-4 px-5 py-2 font-semibold' >Capacity</label>
                            <input value={Capacity} onChange={(e)=>{setCapacity(e.target.value)}} className=' py-2 px-5  rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="number" name="Capacity" placeholder='Enter Vehicle Color'/>
                        </div>
                        <div className=" flex flex-col px-2 w-[48%]">
                            <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Vehicle Type</label>
                            <select value={VehicleType} onChange={(e)=>{setVehicleType(e.target.value)}} className=' py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="text" name="VehicleType" placeholder='Enter Plate Number'>
                                <option className='text-black font-semibold' value="" disabled>Select Vehicle Type</option>
                                <option className='text-black font-semibold' value="Bike">Bike</option>
                                <option className='text-black font-semibold' value="Car">Car</option>
                                <option className='text-black font-semibold' value="Auto">Auto</option>
                            </select>
                        </div>
                    </div>

                    <button type='submit' onClick={(e)=>{SubmitEvent}} className='bg-sky-500 w-[95%] px-5 mx-2 py-2 rounded-xl text-center font-semibold text-black text-xl mt-10 '>   SIGN UP</button>

                    <Link to='/captain/login' className='text-rose-400 text-lg mt-2'>Already have Captain account ?</Link>
                  </div>
              </form>
            </div>
            <div className="cross flex justify-center w-[100%]">
               <Link to='/user/signup' className='bg-emerald-500 w-[95%] px-5 mx-2 py-2 rounded-xl text-center font-semibold text-black text-xl mt-10 '> Register as User </Link>
            </div>
        </>
  )
}

export default CaptainForm