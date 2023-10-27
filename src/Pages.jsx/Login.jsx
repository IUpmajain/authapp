import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

  const dispatch = useDispatch();
    const navigate = useNavigate();

const {user, isLoading, isSuccess, isError, message}=useSelector (state=>state.auth);

    

    const[formData, setFormData]=useState({
      email:"",
      password:"",
    })

const {email, password}=formData;

const handleChange = (e)=>{
  setFormData({
    ...formData,
    [e.target.name]:e.target.value,
  });
};


const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(loginUser(formData));
  // setFormData("");
}


useEffect(()=>{
  if(user || isSuccess){
    navigate("/");
  }
  if(isError || message){
    toast.error(message);
  }
  dispatch(reset());
},[user, isError, isSuccess, isLoading, message]);

  return (
    <>
   <h1>Login page</h1>

       <form onSubmit={handleSubmit}>
        <input className='form-control rounded-0 mt-2' required type='text' placeholder='email' name='email' value={email} onChange={handleChange}/>
        <input className='form-control rounded-0 mt-2' required type='password' placeholder='password' name='password' value={password} onChange={handleChange}/>
        <button type='submit' className='btn btn-success rounded-0 mt-2 w-100'>Save</button>
       </form>
     </>
   )
}

export default Login;




//     // const handlelogin=(e)=>{
//         // e.preventDefault();
//         // if(validate()){
//             // console.log("proceed")
//             // fetch("register page address"+useremail).then((res)=>{
//             //     return res.json();
//             // }).then((resp)=>{
//             //     console.log(resp)
//             //     if(Object.keys(resp).length===0){
//             //         toast.error("user not milin")
//             //     }
//             //     else{
//             //         if(resp.passwords===password){
//             //             useNavigate("/")
//             //         }
//             //         else{
//             //             toast.error("not found")
//             //         }
//             //     }
//             // }).catch((err)=>{
//             //     toast.error("not login:"+err.message);
//             // })
//         // }
//     // }

//     // const validate=()=>{
//     //     let result = true;
//     //     if(useremail===""|| useremail===null){
//     //         result=false;
//     //         toast.warning("enter name");
//     //     }
//     //     return result;
//     // }
// // const dispatch = useDispatch();

//     // const handleChange = (e)=>{
//         // setUseremail({
// //             ...formData,
//             // [e.target.name]: e.target.value,
//         // });
//     // };

// //     const handleSubmit = (e)=>{
// //         e.preventDefault();

// //         if((password3 !== password2) && (email2 !==email)){
// //             toast.error("Password not matched");
// //         }
// //         else{
// //             toast.success("Users successfully logined");
// //         }

// //         dispatch(loginUser(formData));
// //     }