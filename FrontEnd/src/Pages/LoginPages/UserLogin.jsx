import React from 'react'
import UserFormLogin from '../../Components/login/UserFormLogin'

function UserLogin() {
  return (
  <>
    <div className="bg-slate-800 min-h-screen max-h-fit w-screen px-7 py-5 flex justify-between flex-col">
      < UserFormLogin />
    </div>
  </>
  )
}

export default UserLogin