import React, { useState } from 'react'
import 'animate.css';

import '../component-css/splash_1.css'
import compactDX from '../assets/cmpt.svg'
import rect1 from '../assets/Rectangle 50.svg'
import rect2 from '../assets/Rectangle 51.svg'
import rect3 from '../assets/Rectangle 52.svg'

import rect4 from '../assets/Rectangle 53.svg'
import compactPortallogo from '../assets/Group 1438.svg'
import go from '../assets/Group 51.svg'
export const Splash_1 = () => {

const[slideCount,setSlideCount]=useState(0);
const[renderState,setRender]=useState(true)

const[anime,setanime]=useState('animate__animated animate__fadeInRight')
let sliderData=[

{varientImg:compactDX,
info:'Info1',
anime:'animate__animated animate__fadeInRight'
},
{varientImg:rect1,
    info:'Info2',
    anime:'animate__animated animate__fadeInRight'
    },
    {varientImg:rect2,
        info:'Info3',
        anime:'animate__animated animate__fadeInRight'
        },

        {varientImg:rect3,
            info:'Info4',
            anime:'animate__animated animate__fadeInRight'
            },
            {varientImg:rect4,
                info:'Info5',
                anime:'animate__animated animate__fadeInRight'
                }

]

const[slideImg,setSlideImg]=useState(compactDX);



  return (
    <div className='splashScreen'>

<div className='glass-container' >

<div className='container-1' >  
<div className='container-1-inner' >
    <img src={compactPortallogo} style={{height:'16%',width:'62%',background:'',marginTop:'1.2%'}} />
    
    <div className='portal-info-title'>

    Lorem Ipsum has been the industry'swe


    </div>
    <div className='portal-info'>

    orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
<br/>
<br/>
<label style={{fontSize:'1.3vw',fontWeight:'bold'}}>Spyder </label>
<br/>

orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 



</div>

<div className='btn-container'>
<button id='login-btn'>Login <img src={go} alt=""style={{height:'80%'}} /> </button>

</div>




      </div>
<img data-state={renderState} src={compactDX} className={anime} style={{height:"93%"}} />



</div>

<div className='container-2' >
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
<div className='portal-feature'>
    <label>Compare</label> <br /><br />
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem 


</div>
    





</div>


</div>




    </div>
  )
}
