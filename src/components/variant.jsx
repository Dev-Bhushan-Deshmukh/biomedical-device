import React, { useState } from 'react'
import '../component-css/varient.css'
import { Footer } from '../utility-components/footer'
import compactDX from '../assets/Compact DXS 3 (1) 1.svg'
export const Varient = () => {
const[border_,setBorder]=useState();
let visibility='hidden'
let btn1='ok'
let btn2='Next'

const selectVarient=(e)=>{

setBorder(e.target.getAttribute('data-border'))



}
  return (
    <div  id='varient-container'>
<div className='splash-container-1-varient' >

<div id='varient-tag'>

Select a variation

</div>


<div class="scroll-container">
    <div className="child-div" data-border='compactDX' style={{border:border_=='compactDX'?'solid 3px #f29841':''}} onClick={selectVarient}> 
<img src={compactDX}/>
    
    
    </div>
    <div className="child-div" data-border='compact-4DX'style={{border:border_=='compact-4DX'?'solid 3px #f29841':''}} onClick={selectVarient}> 
<img src={compactDX}/>
    
    
    </div>
    <div className="child-div" data-border='compact-Ultra' style={{border:border_=='compact-Ultra'?'solid 3px #f29841':''}} onClick={selectVarient}> 
<img src={compactDX}/>
    
    
    </div>
    <div className="child-div" data-border='compact-Delta'style={{border:border_=='compact-Delta'?'solid 3px #f29841':''}} onClick={selectVarient}> 
<img src={compactDX}/>
    
    
    </div>
    <div className="child-div" data-border='compact-Spyder'style={{border:border_=='compact-Spyder'?'solid 3px #f29841':''}} onClick={selectVarient}> 
<img src={compactDX}/>
    
    
    </div>
    <div className="child-div" data-border=''style={{border:border_==''?'solid 3px #f29841':''}} onClick={selectVarient}> 
<img src={compactDX}/>
     
    
    </div>
   

</div>


</div>

<div  style={{width:"100%",height:'22%',background:'',display:'flex',flexDirection:'column',justifyContent:"end"}} >


<Footer  data={visibility}btn1={btn1} btn2={btn2}  />

</div>
    </div>
  )
}
