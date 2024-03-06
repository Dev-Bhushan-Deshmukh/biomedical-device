import React, { useState } from 'react'
import { Header } from '../utility-components/header'
import '../component-css/functionalcontainer.css'
import '../component-css/report.css'

import drop from '../assets/drop.svg'
import eye from '../assets/eye-outline.svg'
import download from '../assets/tray-arrow-down.svg'




export const Report = () => {

const[anime,setanime]=useState('animate__animated animate__fadeIn animate__delay-1s')
let report_1Class=`preview-container ${anime}`
let report_2Class=`Individual-preview-container ${anime}`
let report_3Class=`custome-table-details ${anime}`
const[selectedOption,setSelectOption]=useState()
const selectReportType=(e)=>{
console.log(e.target.getAttribute('data-reportType'));
setSelectOption(e.target.getAttribute('data-reportType'));
}

  return (
    <div className='home-container'>

<Header/>

<div className='functional-container'>
<div className='report-type-container' >

<div className='type-container' >

<div className='report-option' data-reportType='Consolidated' style={{borderBottom:selectedOption=='Consolidated'?'solid 3px rgb(255, 0, 167)':'',color:selectedOption=='Consolidated'?'black':''}} onClick={selectReportType} >Consolidated</div>

<div className='report-option' data-reportType='Individual' style={{borderBottom:selectedOption=='Individual'?'solid 3px rgb(255, 0, 167)':'',color:selectedOption=='Individual'?'black':''}}  onClick={selectReportType}>Individual</div>

<div className='report-option' data-reportType='Details'  style={{borderBottom:selectedOption=='Details'?'solid 3px rgb(255, 0, 167)':'',color:selectedOption=='Details'?'black':''}}  onClick={selectReportType}>Details</div>




</div>



</div>
<div className='reports-container' >
<div className={report_1Class} style={{display:selectedOption!='Consolidated'?'none':''}}>
<label>Preview
</label>

</div>
<div className={report_2Class} style={{display:selectedOption!='Individual'?'none':''}}>
<div className='sample-select-container' style={{justifyContent:'space-between'}} >
<div style={{height:'100%',width:'30%',background:'',display:'grid',placeItems:'center',  color: '#7D7D7D'}}>
 
Select Device

  </div>
<div style={{height:'100%',width:'10%',background:'',display:'grid',placeItems:'center'}}>
 

  <img src={drop} alt="" />

  </div>




</div>

<div className='Individual-preview' >
<label>Preview
</label>

</div>






</div>
<div className={report_3Class} style={{display:selectedOption!='Details'?'none':''}}>

<div className='table-header' >

<div className='header-columns'>Sr. No.</div>

<div className='header-columns'>Title</div>

<div className='header-columns'>Actions</div>

</div>

<div className='details-list'>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >

<img src={download} /> Download

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>

<div className='details-list-item'>
<div className='table-first-row-column'>Sr. 1.</div>


<div className='table-row'>Sr. No.</div>

<div className='table-row-action'>

<div className='action-btn' >
<img src={download} /> <label>Download</label>

  
</div>


</div>
</div>






</div>







</div>









</div>





</div>
    </div>
  )
}
