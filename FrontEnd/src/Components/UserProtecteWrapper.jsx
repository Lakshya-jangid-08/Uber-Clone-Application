import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function UserProtecteWrapper({children}) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    
    useEffect(() => {
      if(!token){
          navigate('/user/login')
      }
    }, [token])

    return (
        <>
            {children}
        </>
    )
}

export default UserProtecteWrapper