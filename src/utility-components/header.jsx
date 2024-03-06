import React from 'react'
import spyderlogo from '../assets/Frame 1509.svg'
import logOutLogo from '../assets/hisrory.svg'
import '../component-css/header.css'


export const Header = () => {
  return (
    <div  className='header-container'>
      <div className='header-flex-container' >








      <div  className='logo-container'>

<img src={spyderlogo}  />

</div>
<div className='menu-container'>

<div className='logout-label'>

<img  src={logOutLogo}/>

<label>Logout</label>
</div>


</div>









      </div>



    </div>
  )
}
