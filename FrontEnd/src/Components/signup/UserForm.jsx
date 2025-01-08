import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function UserForm() {
    
    const [User, setUser] = useState('');
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const navigate = useNavigate();

    const SubmitHandler = async (e)=>{
        e.preventDefault();
        
        const UserData = {
            Username:{
                first_name : FirstName,
                last_name : LastName,
            },
            Email : Email,
            Password : Password
        }

        const response = await axios.post(`${import.meta.env.VITE_url}/user/registeration`,UserData)
        if(response.status == 200){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home')
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        console.log(UserData);
    }

  return (
        <>
            <div>
              <div className="font-semibold underline text-4xl text-center">Signup User Account</div>
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

                  <button type='submit' onClick={(e)=>{SubmitEvent}} className='bg-emerald-500 w-[95%] px-5 mx-2 py-2 rounded-xl text-center font-semibold text-black text-xl mt-10 '>   SIGN UP</button>

                  <Link to='/user/login' className='text-rose-400 text-lg mt-2'>Already have user account ?</Link>
                  </div>
              </form>
            </div>
            <div className="cross flex justify-center w-[100%]">
               <Link to='/captain/signup' className='bg-sky-500 w-[95%] px-5 mx-2 py-2 rounded-xl text-center font-semibold text-black text-xl mt-10 '> Register as Captain </Link>
            </div>   
        </>
  )
}

export default UserForm