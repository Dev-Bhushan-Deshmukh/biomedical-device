import React, { useState } from 'react'
import { Header } from '../utility-components/header'
import '../component-css/functionalcontainer.css'
import '../component-css/home.css'
import Iicon from '../assets/information-variant-circle-outline.svg'
import eye from '../assets/eye-outline(2).svg'
import drop from '../assets/drop.svg'
import search from '../assets/Search.svg'
import arrow from '../assets/import_export_black_24dp 2.svg'
import latestImg from '../assets/movie-star-outline.svg'
import calender from '../assets/calendar-range.svg'
import sand from '../assets//timer-sand.svg'
import closePopup from '../assets//Vector 79.svg'
import Modal from 'react-modal';
import 'animate.css';

export const Home = () => {


  const[anime,setanime]=useState('animate__animated animate__fadeIn animate__delay-1s')
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex:'4',
      width:'100%',
      height:'100%'

    },
  };
  
  //trial area 
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7,8,9,10]);
const[popUp,setpopUp]=useState(false)
  // 






  const [selectedOption, setSelectedOption] = useState('Sort By')
  const [selectedPage, setSelectedPage] = useState('Select')
  const[selectVarient,setSelectVarient]=useState('Select Variant');
const[Varientvisibility,setVarientvisibility]=useState(false)
const[selectDevice,setSelectDevice]=useState('Select Device');
const[devicevisibility,setDevicevisibility]=useState(false)

  const [show, setshow] = useState(false)
  const [showOpt, setOpt] = useState()
  function setVisible() {
    setshow(!show)
  }

  function setVisibleOpt() {
    setOpt(!showOpt)
  }


  const selectOption = (e) => {
    setshow(false);
    setSelectedOption(e.target.getAttribute('data-option'));


  }


  const selectPage = (e) => {
    setOpt(false);
    console.log(e.target.getAttribute('data-option'))
    console.log(e.target.getAttribute(' data-div'))
   
    setSelectedPage(e.target.getAttribute('data-option'))



    let ele = document.getElementById(e.target.getAttribute('data-div'))

    ele.innerHTML = e.target.getAttribute('data-option')


  }

  function openDropdown(e) {
    console.log(e.target.getAttribute('data-info'))
    setOpt(e.target.getAttribute('data-info'));


  }
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setpopUp(true);
  }


  function closeModal() {
    setpopUp(false);
  }

  const[selectedOption_,setSelectOption]=useState()

  const selectReportType=(e)=>{
    console.log(e.target.getAttribute('data-reportType'));
    setSelectOption(e.target.getAttribute('data-reportType'));
    }
    
    function hidevarientOption(e){
setVarientvisibility(false)
setSelectVarient(e.target.getAttribute('data-varients'))
    }
function showVarientoption(){

  setVarientvisibility(!Varientvisibility)

}

function hideDeviceOption(e){
  setDevicevisibility(false)
  setSelectDevice(e.target.getAttribute('data-device'))
      }
  function showDeviceOption(){
  
    setDevicevisibility(!devicevisibility)
  
  }

  let animes=`Individual-preview-container_ ${anime}`
  console.log(animes)
  return (
    <div className='home-container' style={{position:'relative',background:''}}>

      <Header />

      <div className='functional-container'>

{/* selct -searchbar-filter area*/}

        <div className='search-container' >
        
          <div className='search-select-container' style={{ justifyContent: 'space-between',background: 'white',position:'relative' }} onClick={showVarientoption} >
            <div style={{ height: '100%', width: '30%', background: '', display: 'grid', placeItems: 'center', color: '#7D7D7D' }}>

            {selectVarient}

            </div>
            <div style={{ height: '100%', width: '10%', background: '', display: 'grid', placeItems: 'center' }}>


              <img src={drop} alt="" />

            </div>
            <div style={{position:'absolute',background:'',width:'100%',height:'800%',top:'0',borderRadius:'5px',zIndex:'3',display:Varientvisibility?'':'none'
}} >
<div style={{background:'',width:'100%',height:'100%',top:'0',borderRadius:'5px',zIndex:'3',display:'flex',flexDirection:'column',
justifyContent:'end',alignItems:'center'}} >

<div className='var-container' style={{height:'85%',width:'100%',background:'',borderRadius:'12px',overflowX:'scroll',display:'flex',alignItems:'center',flexDirection:'column',    border: 'solid 1px rgb(213, 213, 213)'}}>

<div className='varients' data-varients='compact1x' onClick={hidevarientOption}> compact1x </div>


<div className='varients' data-varients='compact4x' onClick={hidevarientOption}> compact4x </div>

<div className='varients' data-varients='compactUltra' onClick={hidevarientOption}> compactUltra </div>

<div className='varients'data-varients='compactDelta' onClick={hidevarientOption}> compactDelta </div>

<div className='varients' data-varients='Spyder' onClick={hidevarientOption}> Spyder </div>




</div>










</div>
</div>

          </div>
          <div className='search-select-container' style={{ justifyContent: 'space-between',background: 'white',position:'relative' }} onClick={showDeviceOption} >
            <div style={{ height: '100%', width: '30%', background: '', display: 'grid', placeItems: 'center', color: '#7D7D7D' }}>

            {selectDevice}

            </div>
            <div style={{ height: '100%', width: '10%', background: '', display: 'grid', placeItems: 'center' }}>


              <img src={drop} alt="" />

            </div>
            <div style={{position:'absolute',background:'',width:'100%',height:'800%',top:'0',borderRadius:'5px',zIndex:'3',display:devicevisibility?'':'none'
}} >
<div style={{background:'',width:'100%',height:'100%',top:'0',borderRadius:'0px',zIndex:'3',display:'flex',flexDirection:'column',
justifyContent:'end',alignItems:'center'}} >

<div className='var-container' style={{height:'85%',width:'100%',background:'',borderRadius:'12px',overflowX:'scroll',display:'flex',alignItems:'center',flexDirection:'column',    border: 'solid 1px rgb(213, 213, 213)'}}>

<div className='varients' data-device='dev-1' onClick={hideDeviceOption}> dev-1 </div>


<div className='varients' data-device='dev-2' onClick={hideDeviceOption}> dev-2 </div>

<div className='varients' data-device='dev-3' onClick={hideDeviceOption}> dev-3 </div>

<div className='varients'data-device='dev-4' onClick={hideDeviceOption}> dev-4 </div>

<div className='varients' data-device='dev-5' onClick={hideDeviceOption}> dev-5 </div>




</div>










</div>
</div>

          </div>
          <div className='search-select-container' >




<input />
<div style={{ height: '100%', width: '10%', background: '', display: 'grid', placeItems: 'center' }}>
  <img src={search} alt="" onClick={openModal} />

</div>

</div>
          <div className='filter-container' onClick={setVisible} >

            <div style={{ height: '100%', width: '10%', background: '', display: 'grid', placeItems: 'center' }}>


              <img src={arrow} alt="" />

            </div>


            <div style={{ height: '100%', width: '30%', background: '', display: 'grid', placeItems: 'center', color: '#7D7D7D' }}>

              {selectedOption}

            </div>

            <div style={{ height: '100%', width: '10%', background: '', display: 'grid', placeItems: 'center' }}>


              <img src={drop} alt="" />

            </div>

            <div id='sort-by-div'  style={{ display: show ? '' : 'none' }} >

              <div id='sort-by-inner-container' className='var-container' style={{zIndex:'1'}}>
                <div className='sort-item' data-option="Latest" onClick={selectOption}>
                  <div data-option="Latest" onClick={selectOption} style={{ width: '35%', height: '100%', display: 'grid', placeItems: 'center', background: '' }}>
                    <img src={latestImg} data-option="Latest" onClick={selectOption} />
                  </div>

                  <label data-option="Latest" onClick={selectOption} >Latest</label>

                </div>


                <div className='sort-item' data-option="Date" onClick={selectOption}>


                  <div data-option="Date" onClick={selectOption} style={{ width: '35%', height: '100%', display: 'grid', placeItems: 'center', background: '' }}>
                    <img data-option="Date" onClick={selectOption} src={calender} />
                  </div>


                  <label data-option="Date" onClick={selectOption}   >Date</label>

                </div>




                <div className='sort-item' data-option="Time" onClick={selectOption} >


                  <div data-option="Time" onClick={selectOption} style={{ width: '35%', height: '100%', display: 'grid', placeItems: 'center', background: '' }}>
                    <img src={sand} onClick={selectOption} data-option="Time" />
                  </div>


                  <label data-option="Time" onClick={selectOption}>Time</label>

                </div>

              </div>



            </div>




          </div>



        </div>


{/* main file list container */}

        <div className='experimentFile-container' >

          <div id='home-experiment-list'>


            <div id='exp-title'>
              <div id='title-exp' >Experiments</div>


            </div>

            <div className='experiments-container'>

              {arr.map((item) => (
                <div className='experiment-block'  >
                  <div className='experiment-name'>
                    <div className='exper'>
                      Experiment ID

                    </div>
                    <img src={Iicon} />

                  </div>
                  <div className='experiment-option' >



                    <div  className='op-con' style={{ display: showOpt == item ? '' : 'none', position: 'absolute',top:'-1',left:'-1', width: '100%', height: '230%', background: 'white', border: 'solid 0px grey', borderRadius: '10px',zIndex:'2' }}>

                      <div className='page-item' data-option="Analysis" data-div={item} onClick={selectPage}>
                        <div data-option="Analysis" data-div={item} onClick={selectPage} style={{ width: '35%', height: '100%', display: 'grid', placeItems: 'center', background: '' }}>
                          <img src={latestImg} data-option="Analysis" data-div={item} onClick={selectPage} />
                        </div>

                        {/* <label data-option="Analysis" data-div={item} onClick={selectPage} > */}
                          
                          Analysis
                          
                          {/* </label> */}

                      </div>
                      <div className='page-item' data-option="Report" data-div={item} onClick={selectPage}>
                        <div data-option="Report" onClick={selectPage} data-div={item} style={{ width: '35%', height: '100%', display: 'grid', placeItems: 'center', background: '' }}>
                          <img src={latestImg} data-option="Report" data-div={item} onClick={selectPage} />
                        </div>
Report

                      </div>


                    </div>
                    <div className='experiment-option-flex' data-info={item} onClick={openDropdown}>

                      <div className='exper' id={item} >
                   Select

                      </div>
                      <img src={drop} />


                    </div>

                  </div>
                  <div className='experiment-show'>

                  
                    <img src={eye} />


                  </div>

                </div>

              ))}











            </div>






          </div>



          <div id='experiment-details'>
<h3>Experiment Details</h3>


            <div className='experiment-details-header' style={{ width: '90%', height: '15%', background: '', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
<div style={{width:'100%',display:'flex',justifyContent:'space-evenly',alignItems:'center',height:'50%',borderBottom:'solid 0px grey'}} > 

              <div className='detail'>
                <label>Time:</label>
                <label>16:15:04</label>
              </div>



              <div className='detail'>
                <label>Experiment ID:</label>
                <label>TDIPPE-KKKD1</label>
              </div>
              </div>


              <div style={{width:'100%',display:'flex',alignItems:'center',height:'50%',justifyContent:'space-evenly',borderBottom:'solid 0px grey'}} > 

              <div className='detail'>
                <label>Test:</label>
                <label>MTB-NAT</label>
              </div>


              <div className='detail'>
                <label>Time:</label>
                <label>16:15:04</label>
              </div>
</div>


              

            </div>






            <div className='experiment-details-tbl'>


<div id='tbl'>
<div id='tbl-head' >

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>col1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>col2</div>

</div>

<div id='tbl-body' >

<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>
<div className='tbl-item'>
<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>

<div style={{flex:'1',background:'',display:'grid',placeContent:'center'}}>1</div>
</div>

</div>





<div>

</div>

</div>










              

            </div>










          </div>







        </div>

 



      </div>

{/* history  pop up area */}


      <div className='history-popup' style={{display:popUp?'':'none'}}>
        <img src={closePopup} style={{height:'2.5%',position:'absolute',top:20,right:20,cursor:'pointer'}} onClick={closeModal} />




        <div className='report-type-container' >

<div className='data-type-container' >

<div className='data-report-option' data-reportType='Consolidated' style={{borderBottom:selectedOption_=='Consolidated'?'solid 3px #ff00a7':'',color:selectedOption_=='Consolidated'?'black':''}} onClick={selectReportType} >History</div>

<div className='data-report-option' data-reportType='Individual' style={{borderBottom:selectedOption_=='Individual'?'solid 3px #ff00a7':'',color:selectedOption_=='Individual'?'black':''}}  onClick={selectReportType}>Meta</div>

<div className='data-report-option' data-reportType='Details'  style={{borderBottom:selectedOption_=='Details'?'solid 3px #ff00a7':'',color:selectedOption_=='Details'?'black':''}}  onClick={selectReportType}>Other</div>




</div>



</div>


<div className='popup-content-container'>


      <table id='history-table'  className={anime} style={{display:selectedOption_!='Consolidated'?'none':''}}> 
    <tr id='table-header' >
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
        <th>Header 4</th>
        <th>Header 5</th>
    </tr>

    <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
        <td>Row 1, Cell 4</td>
        <td>Row 1, Cell 5</td>
    </tr>
 
    <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
        <td>Row 2, Cell 4</td>
        <td>Row 2, Cell 5</td>
    </tr>
  
    <tr>
        <td>Row 3, Cell 1</td>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
        <td>Row 3, Cell 4</td>
        <td>Row 3, Cell 5</td>
    </tr>

    <tr>
        <td>Row 4, Cell 1</td>
        <td>Row 4, Cell 2</td>
        <td>Row 4, Cell 3</td>
        <td>Row 4, Cell 4</td>
        <td>Row 4, Cell 5</td>
    </tr>

    <tr>
        <td>Row 5, Cell 1</td>
        <td>Row 5, Cell 2</td>
        <td>Row 5, Cell 3</td>
        <td>Row 5, Cell 4</td>
        <td>Row 5, Cell 5</td>
    </tr>

    <tr>
        <td>Row 6, Cell 1</td>
        <td>Row 6, Cell 2</td>
        <td>Row 6, Cell 3</td>
        <td>Row 6, Cell 4</td>
        <td>Row 6, Cell 5</td>
    </tr>
</table>



<div className={animes}  style={{display:selectedOption_!='Individual'?'none':''}}>

<div className='exp-details-container'>
<div id='exp-detail-title' className='exp-detail-1'>Meta Details</div>


</div>
<div className='exp-details-container'>
<div className='exp-detail-1'>Experiment ID:<label>1235</label></div>

<div className='exp-detail-1'>Experiment ID:<label>1235</label></div>


</div>
<div className='exp-details-container'>
<div className='exp-detail-1'>Experiment ID:<label>1235</label></div>

<div className='exp-detail-1'>Experiment ID:<label>1235</label></div>


</div>
<div className='exp-details-container'>
<div className='exp-detail-1'>Experiment ID:<label>1235</label></div>

<div className='exp-detail-1'>Experiment ID:<label>1235</label></div>


</div>




</div>



</div>





      </div>
    </div>
  )
}
