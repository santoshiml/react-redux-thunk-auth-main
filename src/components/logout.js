import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { getLogout } from  '../redux/actions/login'


function Logout() {

	const navigate = useNavigate();
	const dispatch = useDispatch()


  useEffect(() => {
    console.log(333)
    fetchData()
   
   
  },[])

   const fetchData = async() => {
      await dispatch(getLogout())
      await localStorage.removeItem('user-info')
      await navigate("/login")
    }

  return (
     <div>....</div>
    )
}

export default Logout;