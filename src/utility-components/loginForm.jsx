import React, { useRef, useState } from 'react'
import '../component-css/login.css'
import { UseForm } from '../customeHooks/useForm'
import eye from '../assets/eye.svg'
import msg from '../assets/msg.svg'
import { useNavigate } from 'react-router-dom'
export const LoginForm = () => {


let navigateTo=useNavigate(null);






let usernameref=useRef(null);
let passwordref=useRef(null);
  const[validate,val,makeCall]=UseForm()
const[validation,setvalidation]=useState()

const[username_,setUserName]=useState();
const[password_,setPassword]=useState();
  const  validateCrendential=()=>{
    let c=usernameref.current.value;
    setUserName(c)
    let v=passwordref.current.value;
    setPassword(v)
    let x=validate(c,v)
    setvalidation(x);
  
   
  



  }

 
  return (
    <div id='login-main-container'>
<div className='login-input-wrapper' >

<input ref={usernameref} onChange={validateCrendential} placeholder='username@gmail.com' /> 
<img src={msg} style={{height:'70%'}} />

</div>

<div className='login-input-wrapper' >
<input  ref={passwordref} onChange={validateCrendential} placeholder='**********' /> <img src={eye} style={{height:'70%'}} />
</div>
<button   disabled={ val=='Valid'? false:true} onClick={()=>{navigateTo('/variantSelection')}} >login</button>

{/* <button   disabled={ val=='Valid'? false:true} onClick={makeCall(username_,password_)} >login</button> */}
{/* <span  >
{val}
</span> */}
    </div>
  )
}
