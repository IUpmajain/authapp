import React, { useEffect } from 'react'
import {useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import Image from '../assets/images.jfif'

const Home = () => {

    const navigate = useNavigate();
    const {user, isLoading,  isError, isSuccess,  message} = useSelector(state=>state.auth);

    useEffect(()=>{
        if(!user || isError){
            navigate("/register");
        }
    }, [user, isLoading, isError, isSuccess, message]);

  return (
    <div>
      <h1>Home Page</h1>
      <img src={Image} alt="" width={600} height={300} />
    </div>
  )
}

export default Home;