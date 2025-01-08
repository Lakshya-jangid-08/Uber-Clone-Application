import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import UserForm from '../../Components/signup/UserForm'
// import './Signup.css'

function UserSignup() {

  return (
    <>
      <div className="bg-slate-800 min-h-screen max-h-fit w-screen px-7 py-5 flex justify-between flex-col">
            < UserForm />
      </div>
    </>
  )
}

export default UserSignup