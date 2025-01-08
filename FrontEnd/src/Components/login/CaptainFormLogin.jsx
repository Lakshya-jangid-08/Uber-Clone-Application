import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CaptainFormLogin() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const navigate = useNavigate();

    const SubmitHandler = async(e)=>{
        e.preventDefault();
        const CaptainData = {
            Email : Email,
            Password : Password
        }

        const response = await axios.post(`${import.meta.env.VITE_url}/captain/login`,CaptainData);
        if(response.status == 200){
            const data = response.data;
            localStorage.setItem("token",data.token)
            navigate('/home');
        } else{
            console.log("Some error occupied");
        }

        setEmail('');
        setPassword('');
    }

  return (
        <>
            <div>
              <div className="font-semibold underline text-4xl text-center">Login Captain Account</div>
              <form onSubmit={(e)=>{ SubmitHandler(e) }}>
                  <div className=" w-full mt-12 flex justify-center items-center flex-col">
                    <div className="email px-2 flex flex-col w-full">
                        <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Email</label>
                        <input value={Email} onChange={(e)=>{ setEmail(e.target.value) }} className='py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="email" name="Email" placeholder='Enter Email'/>
                    </div>
                    <div className="password flex flex-col w-full px-2">
                        <label className='mt-4 px-5 py-2 font-semibold ' htmlFor="">Password</label>
                        <input  value={Password} onChange={(e)=>{ setPassword(e.target.value) }} className='py-2 px-5 rounded-2xl w-full text-black font-semibold placeholder:text-black placeholder:font-semibold' type="password" name="Password" placeholder='Enter Password'/>
                    </div>

                    <button type='submit' onClick={(e)=>{SubmitEvent}} className='bg-sky-500 w-[95%] px-5 mx-2 py-2 rounded-xl text-center font-semibold text-black text-xl mt-10 '>LOG IN</button>

                    <Link to='/captain/signup' className='text-rose-400 text-lg mt-2'>Create a new Captain account ?</Link>
                  </div>
              </form>
            </div>
            <div className="cross flex justify-center w-[100%]">
               <Link to='/user/login' className='bg-emerald-500 w-[95%] px-5 mx-2 py-2 rounded-xl text-center font-semibold text-black text-xl mt-10 '> Login as User </Link>
            </div>
        </>
  )
}

export default CaptainFormLogin