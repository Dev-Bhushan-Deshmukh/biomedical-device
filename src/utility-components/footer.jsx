import React from 'react'
import '../component-css/footer.css'
export const Footer = (prop) => {
    console.log(prop.data,prop.btn1,prop.btn2)
  return (
    <div className='footer-container' >


<button className='footer-btn' style={{visibility:prop.data}}>{prop.btn1}</button>


<button className='footer-btn'>{prop.btn2}</button>

    </div>
  )
}
