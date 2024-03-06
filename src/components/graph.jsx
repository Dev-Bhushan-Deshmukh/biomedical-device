
import axios from "axios";

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label, ResponsiveContainer } from "recharts";

import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import '../component-css/BothReports.css'
import '../component-css/graph-repor.css'
import sampleTubeEmpty from '../assets/Group 1500.svg'
import sampleTubeFilled from '../assets/Group 1499.svg'
import { Header } from "../utility-components/header";
const buttonStyle = {
  backgroundColor: '#F3811F',
  color: '#fff',
  padding: '8px 16px',
  borderRadius: '25px',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  width: "12%",
  fontWeight: 'bold'
};

const buttonStyle_Outlined = {
  backgroundColor: 'white',
  color: '#F3811F',
  padding: '8px 16px',
  borderRadius: '25px',
  border: '1px solid #F3811F',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  width: "12%",
  fontWeight: 'bold'
}



const buttonStyle_Outlined_submit_Close = {
  backgroundColor: 'white',
  color: '#F3811F',
  padding: '8px 16px',
  borderRadius: '25px',
  border: '1px solid #F3811F',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  width: "20%",
  fontWeight: 'bold'
}

const buttonStyle_Outlined_submit = {
  backgroundColor: 'white',
  color: '#F3811F',
  padding: '8px 16px',
  borderRadius: '25px',
  border: '1px solid #F3811F',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  width: "15%",
  fontWeight: 'bold'
}
const rotatingBorderStyle = {
  width: '200px',
  height: '200px',
  margin: 'auto auto',
  marginTop: '30vh',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  border: '5px dotted orange', // Dotted border style
  animation: 'rotate 3s linear infinite', // Adjust the duration as needed
};


export const  BothReports = () => {
  let navigate = useNavigate();
  let [showLoader, setShowLoader] = useState(false)
  let [selectedSampleId, setSelectedSampleId] = useState(null)
  let [myAdvanceShow, setMyAdvanceShow] = useState(false);
  let [myMode, setMyMode] = useState(null)

  let [mySample1, setMySample1] = useState(null)
  let [mySample2, setMySample2] = useState(null)
  let [mySample3, setMySample3] = useState(null)
  let [mySample4, setMySample4] = useState(null)
  let [mySample5, setMySample5] = useState(null)
  let [mySample6, setMySample6] = useState(null)
  let [mySample7, setMySample7] = useState(null)
  let [mySample8, setMySample8] = useState(null)

  let [myCTsettin1, setMyCTsetting1] = useState(null)
  let [myCTsettin1Target, setMyCTsetting1Target] = useState(null)

  let [myCTsettin2, setMyCTsetting2] = useState(null)
  let [myCTsettin2Target, setMyCTsetting2Target] = useState(null)

  let [myCTsettin3, setMyCTsetting3] = useState(null)
  let [myCTsettin3Target, setMyCTsetting3Target] = useState(null)

  let [myCTsettin4, setMyCTsetting4] = useState(null)
  let [myCTsettin4Target, setMyCTsetting4Target] = useState(null)

  let [myCTsettin5, setMyCTsetting5] = useState(null)
  let [myCTsettin5Target, setMyCTsetting5Target] = useState(null)

  let [myCTsettin6, setMyCTsetting6] = useState(null)
  let [myCTsettin6Target, setMyCTsetting6Target] = useState(null)

  let [myCTsettin7, setMyCTsetting7] = useState(null)
  let [myCTsettin7Target, setMyCTsetting7Target] = useState(null)

  let [myCTsettin8, setMyCTsetting8] = useState(null)
  let [myCTsettin8Target, setMyCTsetting8Target] = useState(null)

  let [myActive, setMyActive] = useState(null)
  let [MyAllSampleData, setMyAllSampleData] = useState([])
  let [mySorted, setMySorted] = useState([])
  let [protocolType, setProtocolType] = useState(null)
  let mySelectedProtocolOf = localStorage.getItem("selected_my_protocol");
  let myexpid = localStorage.getItem("myexp");
  let [isMTBProtocolType, setMTBProtocolTypeSuraj] = useState(false);
  let [myTargetsSu, setMyTargetsSu] = useState({ target1: "", target2: "", target3: "", target4: "", target5: "", target6: "", target7: "", target8: "", })

  let [myAdvanceSettingOption, setMyAdvaanceSettingOption] = useState("graph_setting")
  let [isAutoAnalysis, setMyAutoAnalysis] = useState(false)
  let [myAllPartA_PartB, setMyAllPartA_PartB] = useState([])
  let [myAllPartA_PartB_All, setMyAllPartA_PartB_All] = useState([]);
  let [myAllPartA_PartB_All_Stable, setMyAllPartA_PartB_All_Stable] = useState([]);
  const [sharedata, setShareData] = useState({ email_id: "", experiment_id: '' })
  let [myAdvancedGraphSetting, setMyAdvancedGraphSetting] = useState({


    ct: [0, 0],
    fvalues: [0, 0],

  })



  let [myTarget1, setMyTarget1] = useState(true)
  let [myTarget2, setMyTarget2] = useState(true)
  let [myTarget3, setMyTarget3] = useState(true)
  let [myTarget4, setMyTarget4] = useState(true)
  let [myTarget5, setMyTarget5] = useState(true)
  let [myTarget6, setMyTarget6] = useState(true)
  let [myTarget7, setMyTarget7] = useState(true)
  let [myTarget8, setMyTarget8] = useState(true)

  let [myPartA, setMyPartA] = useState(false)
  let [myPartB, setMyPartB] = useState(false)
  let [myPartBoth, setMyPartBoth] = useState(false)


  let [isDoneAutoAnalysis, setDoneAutoAnalysis] = useState(false)
  let [isDoneManualAnalysis, setDoneManualAnalysis] = useState(false)

  let [myTypeOfGraph, setTypeOfMyGraph] = useState("all")
  let [ForAllGraph, setForAllGraph] = useState([])
  let [showMyGraphSettingPopUp, setshowMyGraphSettingPopUp] = useState(false)
  let [showThresholdPopPup, setshowThresholdPopPup] = useState(false)
  let [isMyCurrentSampleAvtive, setisMyCurrentSampleAvtive] = useState(false);
  let [MyCurrentSelectedSampleFiltred, setMyCurrentSelectedSample] = useState([])
  let [showCloseEmailPopUp, setshowCloseEmailPopUp] = useState(false)
  let [showMyCoordinate,setMyCoordinat]=useState(false)
  let [showCloseWarningSelectData,setshowCloseWarningSelectData]=useState(false)
  const apiUrlReport = "http://127.0.0.1:5000/readReport";

  const apiUrlAutoResult = "http://127.0.0.1:5000/doAutoResults";

  const apiUrlManualAnalysis = "http://127.0.0.1:5000/manualAnalysis";

  const apiUrlAdvaceGrapgSettings = "http://127.0.0.1:5000/advanceAnalysis";



  const graphsettingsArr = ["Below", "Above"]

  // const requestData = {
  //   experiment_id: 'MTB_MY_LAB240115'
  // }





  useEffect(() => {

    findResult();



  }, [])





  useEffect(() => {


    if (isDoneAutoAnalysis) {

      findResult();
      setDoneAutoAnalysis(false)
    }




  }, [isDoneAutoAnalysis])


  // useEffect(() => {


  //   if(isDoneManualAnalysis){

  //     findResult();
  //     setMTBProtocolTypeSuraj(false)
  //     setDoneManualAnalysis(false)
  //   }




  // }, [isDoneManualAnalysis])


  useEffect(() => {

    if (MyAllSampleData.length > 0) {
      SortingMyData();
    }

  }, [MyAllSampleData])


  useEffect(() => {

    if (MyAllSampleData.length > 0) {
      SortingMyGraphData()
    }



  }, [MyAllSampleData])


  let SortingMyData = () => {

    let MyAllSampleDataSorted = [];

    for (let i = 0; i < MyAllSampleData.length; i++) {


      if (myMode == "manual" || myMode == "advanced") {

        if (MyAllSampleData[i] && MyAllSampleData[i].parts) {


          let dyeObjA = MyAllSampleData[i].parts.partA;

          let dyeObjB = MyAllSampleData[i].parts.partB;

          console.log("__________________manualdyeObjA", dyeObjA)
          console.log("__________________dyeObjB", dyeObjB)




          let targetArr1 = [dyeObjA.dye1.target_name, dyeObjA.dye2.target_name, dyeObjA.dye3.target_name, dyeObjA.dye4.target_name]
          let ctArr1 = [dyeObjA.dye1.manual.ct_value, dyeObjA.dye2.manual.ct_value, dyeObjA.dye3.manual.ct_value, dyeObjA.dye4.manual.ct_value]

          let targetArr2 = [dyeObjB.dye1.target_name, dyeObjB.dye2.target_name, dyeObjB.dye3.target_name]
          let ctArr2 = [dyeObjB.dye1.manual.ct_value, dyeObjB.dye2.manual.ct_value, dyeObjB.dye3.manual.ct_value]



          let myObj = {
            sample_My_id: MyAllSampleData[i].sample_id,
            sample_My_Postion: MyAllSampleData[i].sample_position,
            part1: { myTarget: targetArr1, myCtvalues: ctArr1 },
            part2: { myTarget: targetArr2, myCtvalues: ctArr2 }
          }
          console.log("******", myObj)
          MyAllSampleDataSorted.push(myObj)



          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 1) {

            setMyCTsetting1({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting1Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 2) {



            setMyCTsetting2({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting2Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )




          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 3) {
            setMyCTsetting3({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting3Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 4) {

            setMyCTsetting4({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting4Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 5) {

            setMyCTsetting5({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting5Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 6) {

            setMyCTsetting6({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting6Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 7) {
            setMyCTsetting7({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting7Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i] && MyAllSampleData[i].sample_position == 8) {

            setMyCTsetting8({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting8Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }



          setMySorted(MyAllSampleDataSorted)
        }
      }


      if (myMode == "auto") {
        if (MyAllSampleData[i] && MyAllSampleData[i].parts) {


          let dyeObjA = MyAllSampleData[i].parts.partA;

          let dyeObjB = MyAllSampleData[i].parts.partB;

          console.log("__________________dyeObjA", dyeObjA)
          console.log("__________________dyeObjB", dyeObjB)





          let targetArr1 = [dyeObjA.dye1.target_name, dyeObjA.dye2.target_name, dyeObjA.dye3.target_name, dyeObjA.dye4.target_name]
          let ctArr1 = [dyeObjA.dye1.auto.ct_value, dyeObjA.dye2.auto.ct_value, dyeObjA.dye3.auto.ct_value, dyeObjA.dye4.auto.ct_value]

          let targetArr2 = [dyeObjB.dye1.target_name, dyeObjB.dye2.target_name, dyeObjB.dye3.target_name]
          let ctArr2 = [dyeObjB.dye1.auto.ct_value, dyeObjB.dye2.auto.ct_value, dyeObjB.dye3.auto.ct_value]



          let myObj = {
            sample_My_id: MyAllSampleData[i].sample_id,
            sample_My_Postion: MyAllSampleData[i].sample_position,
            part1: { myTarget: targetArr1, myCtvalues: ctArr1 },
            part2: { myTarget: targetArr2, myCtvalues: ctArr2 }
          }
          console.log("******", myObj)
          MyAllSampleDataSorted.push(myObj)


          if (MyAllSampleData[i].sample_position == 1) {

            setMyCTsetting1({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting1Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )


          }
          if (MyAllSampleData[i].sample_position == 2) {

            setMyCTsetting2({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting2Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i].sample_position == 3) {
            setMyCTsetting3({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting3Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i].sample_position == 4) {

            setMyCTsetting4({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting4Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i].sample_position == 5) {

            setMyCTsetting5({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting5Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i].sample_position == 6) {

            setMyCTsetting6({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting6Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i].sample_position == 7) {

            setMyCTsetting7({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting7Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }
          if (MyAllSampleData[i].sample_position == 8) {

            setMyCTsetting8({ mySampleIdSu: MyAllSampleData[i].sample_id, mySamplePositionSu: MyAllSampleData[i].sample_position })



            setMyCTsetting8Target(
              {
                [targetArr1[0]]: ctArr1[0],
                [targetArr1[1]]: ctArr1[1],
                [targetArr1[2]]: ctArr1[2],
                [targetArr1[3]]: ctArr1[3],
                [targetArr2[0]]: ctArr2[0],
                [targetArr2[1]]: ctArr2[1],
                [targetArr2[2]]: ctArr2[2],

              }
            )

          }


          setMySorted(MyAllSampleDataSorted)

        }

      }











    }
    console.log("........sorted................", MyAllSampleDataSorted)


  }


  let SortingMyGraphData = () => {
    if (myMode == "auto") {
      let Part_A_B_All = []
      if (myTypeOfGraph == "all") {

        const newArrayLength = 8;
        const newArray = Array.from({ length: newArrayLength }, (_, index) => {
          // If the index is within the bounds of the existing array, use the existing object; otherwise, use an empty object
          return index < ForAllGraph.length ? ForAllGraph[index] : {
            parts: {
              partA: {
                dye1: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye2: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye3: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye4: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },

              },
              partB: {
                dye1: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye2: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye3: {
                  auto: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },


              },

            }
          };
        });



        for (let i = 0; i < newArray[0].parts.partA.dye1.auto.fit_data.length; i++) {
          console.log("inside one more nested root", i)
          let oneCycle = {
            cycle_no: i + 1,
            [newArray[0].parts.partA.dye1.target_name.concat("_1")]: newArray[0].parts.partA.dye1.auto.fit_data[i],
            [newArray[0].parts.partA.dye2.target_name.concat("_1")]: newArray[0].parts.partA.dye2.auto.fit_data[i],
            [newArray[0].parts.partA.dye3.target_name.concat("_1")]: newArray[0].parts.partA.dye3.auto.fit_data[i],
            [newArray[0].parts.partA.dye4.target_name.concat("_1")]: newArray[0].parts.partA.dye4.auto.fit_data[i],
            [newArray[0].parts.partB.dye1.target_name.concat("_1")]: newArray[0].parts.partB.dye1.auto.fit_data[i],
            [newArray[0].parts.partB.dye2.target_name.concat("_1")]: newArray[0].parts.partB.dye2.auto.fit_data[i],
            [newArray[0].parts.partB.dye3.target_name.concat("_1")]: newArray[0].parts.partB.dye3.auto.fit_data[i],
            [newArray[1].parts.partA.dye1.target_name.concat("_2")]: newArray[1].parts.partA.dye1.auto.fit_data[i],
            [newArray[1].parts.partA.dye2.target_name.concat("_2")]: newArray[1].parts.partA.dye2.auto.fit_data[i],
            [newArray[1].parts.partA.dye3.target_name.concat("_2")]: newArray[1].parts.partA.dye3.auto.fit_data[i],
            [newArray[1].parts.partA.dye4.target_name.concat("_2")]: newArray[1].parts.partA.dye4.auto.fit_data[i],
            [newArray[1].parts.partB.dye1.target_name.concat("_2")]: newArray[1].parts.partB.dye1.auto.fit_data[i],
            [newArray[1].parts.partB.dye2.target_name.concat("_2")]: newArray[1].parts.partB.dye2.auto.fit_data[i],
            [newArray[1].parts.partB.dye3.target_name.concat("_2")]: newArray[1].parts.partB.dye3.auto.fit_data[i],
            [newArray[2].parts.partA.dye1.target_name.concat("_3")]: newArray[2].parts.partA.dye1.auto.fit_data[i],
            [newArray[2].parts.partA.dye2.target_name.concat("_3")]: newArray[2].parts.partA.dye2.auto.fit_data[i],
            [newArray[2].parts.partA.dye3.target_name.concat("_3")]: newArray[2].parts.partA.dye3.auto.fit_data[i],
            [newArray[2].parts.partA.dye4.target_name.concat("_3")]: newArray[2].parts.partA.dye4.auto.fit_data[i],
            [newArray[2].parts.partB.dye1.target_name.concat("_3")]: newArray[2].parts.partB.dye1.auto.fit_data[i],
            [newArray[2].parts.partB.dye2.target_name.concat("_3")]: newArray[2].parts.partB.dye2.auto.fit_data[i],
            [newArray[2].parts.partB.dye3.target_name.concat("_3")]: newArray[2].parts.partB.dye3.auto.fit_data[i],
            [newArray[3].parts.partA.dye1.target_name.concat("_4")]: newArray[3].parts.partA.dye1.auto.fit_data[i],
            [newArray[3].parts.partA.dye2.target_name.concat("_4")]: newArray[3].parts.partA.dye2.auto.fit_data[i],
            [newArray[3].parts.partA.dye3.target_name.concat("_4")]: newArray[3].parts.partA.dye3.auto.fit_data[i],
            [newArray[3].parts.partA.dye4.target_name.concat("_4")]: newArray[3].parts.partA.dye4.auto.fit_data[i],
            [newArray[3].parts.partB.dye1.target_name.concat("_4")]: newArray[3].parts.partB.dye1.auto.fit_data[i],
            [newArray[3].parts.partB.dye2.target_name.concat("_4")]: newArray[3].parts.partB.dye2.auto.fit_data[i],
            [newArray[3].parts.partB.dye3.target_name.concat("_4")]: newArray[3].parts.partB.dye3.auto.fit_data[i],
            [newArray[4].parts.partA.dye1.target_name.concat("_5")]: newArray[4].parts.partA.dye1.auto.fit_data[i],
            [newArray[4].parts.partA.dye2.target_name.concat("_5")]: newArray[4].parts.partA.dye2.auto.fit_data[i],
            [newArray[4].parts.partA.dye3.target_name.concat("_5")]: newArray[4].parts.partA.dye3.auto.fit_data[i],
            [newArray[4].parts.partA.dye4.target_name.concat("_5")]: newArray[4].parts.partA.dye4.auto.fit_data[i],
            [newArray[4].parts.partB.dye1.target_name.concat("_5")]: newArray[4].parts.partB.dye1.auto.fit_data[i],
            [newArray[4].parts.partB.dye2.target_name.concat("_5")]: newArray[4].parts.partB.dye2.auto.fit_data[i],
            [newArray[4].parts.partB.dye3.target_name.concat("_5")]: newArray[4].parts.partB.dye3.auto.fit_data[i],
            [newArray[5].parts.partA.dye1.target_name.concat("_6")]: newArray[5].parts.partA.dye1.auto.fit_data[i],
            [newArray[5].parts.partA.dye2.target_name.concat("_6")]: newArray[5].parts.partA.dye2.auto.fit_data[i],
            [newArray[5].parts.partA.dye3.target_name.concat("_6")]: newArray[5].parts.partA.dye3.auto.fit_data[i],
            [newArray[5].parts.partA.dye4.target_name.concat("_6")]: newArray[5].parts.partA.dye4.auto.fit_data[i],
            [newArray[5].parts.partB.dye1.target_name.concat("_6")]: newArray[5].parts.partB.dye1.auto.fit_data[i],
            [newArray[5].parts.partB.dye2.target_name.concat("_6")]: newArray[5].parts.partB.dye2.auto.fit_data[i],
            [newArray[5].parts.partB.dye3.target_name.concat("_6")]: newArray[5].parts.partB.dye3.auto.fit_data[i],
            [newArray[6].parts.partA.dye1.target_name.concat("_7")]: newArray[6].parts.partA.dye1.auto.fit_data[i],
            [newArray[6].parts.partA.dye2.target_name.concat("_7")]: newArray[6].parts.partA.dye2.auto.fit_data[i],
            [newArray[6].parts.partA.dye3.target_name.concat("_7")]: newArray[6].parts.partA.dye3.auto.fit_data[i],
            [newArray[6].parts.partA.dye4.target_name.concat("_7")]: newArray[6].parts.partA.dye4.auto.fit_data[i],
            [newArray[6].parts.partB.dye1.target_name.concat("_7")]: newArray[6].parts.partB.dye1.auto.fit_data[i],
            [newArray[6].parts.partB.dye2.target_name.concat("_7")]: newArray[6].parts.partB.dye2.auto.fit_data[i],
            [newArray[6].parts.partB.dye3.target_name.concat("_7")]: newArray[6].parts.partB.dye3.auto.fit_data[i],
            [newArray[7].parts.partA.dye1.target_name.concat("_8")]: newArray[7].parts.partA.dye1.auto.fit_data[i],
            [newArray[7].parts.partA.dye2.target_name.concat("_8")]: newArray[7].parts.partA.dye2.auto.fit_data[i],
            [newArray[7].parts.partA.dye3.target_name.concat("_8")]: newArray[7].parts.partA.dye3.auto.fit_data[i],
            [newArray[7].parts.partA.dye4.target_name.concat("_8")]: newArray[7].parts.partA.dye4.auto.fit_data[i],
            [newArray[7].parts.partB.dye1.target_name.concat("_8")]: newArray[7].parts.partB.dye1.auto.fit_data[i],
            [newArray[7].parts.partB.dye2.target_name.concat("_8")]: newArray[7].parts.partB.dye2.auto.fit_data[i],
            [newArray[7].parts.partB.dye3.target_name.concat("_8")]: newArray[7].parts.partB.dye3.auto.fit_data[i],

          }





          Part_A_B_All.push(oneCycle)


          console.log("inside one more nested root", i)

        }



        console.log("My all graph array....", Part_A_B_All)
        setMyAllPartA_PartB_All_Stable(Part_A_B_All)
        setMyAllPartA_PartB_All(Part_A_B_All)
      }

    }
    if (myMode == "manual" || myMode == "advanced") {

      let Part_A_B_All = []



      if (myTypeOfGraph == "all") {


        const newArrayLength = 8;
        const newArray = Array.from({ length: newArrayLength }, (_, index) => {
          // If the index is within the bounds of the existing array, use the existing object; otherwise, use an empty object
          return index < ForAllGraph.length ? ForAllGraph[index] : {
            parts: {
              partA: {
                dye1: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye2: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye3: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye4: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },

              },
              partB: {
                dye1: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye2: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },
                dye3: {
                  manual: {
                    fit_data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  },
                  target_name: "na"
                },


              },

            }
          };
        });

        for (let i = 0; i < newArray[0].parts.partA.dye1.manual.fit_data.length; i++) {
          console.log("inside one more nested root", i)






          let oneCycle = {
            cycle_no: i + 1,

            [newArray[0].parts.partA.dye1.target_name.concat("_1")]: newArray[0].parts.partA.dye1.manual.fit_data[i],
            [newArray[0].parts.partA.dye2.target_name.concat("_1")]: newArray[0].parts.partA.dye2.manual.fit_data[i],
            [newArray[0].parts.partA.dye3.target_name.concat("_1")]: newArray[0].parts.partA.dye3.manual.fit_data[i],
            [newArray[0].parts.partA.dye4.target_name.concat("_1")]: newArray[0].parts.partA.dye4.manual.fit_data[i],
            [newArray[0].parts.partB.dye1.target_name.concat("_1")]: newArray[0].parts.partB.dye1.manual.fit_data[i],
            [newArray[0].parts.partB.dye2.target_name.concat("_1")]: newArray[0].parts.partB.dye2.manual.fit_data[i],
            [newArray[0].parts.partB.dye3.target_name.concat("_1")]: newArray[0].parts.partB.dye3.manual.fit_data[i],
            [newArray[1].parts.partA.dye1.target_name.concat("_2")]: newArray[1].parts.partA.dye1.manual.fit_data[i],
            [newArray[1].parts.partA.dye2.target_name.concat("_2")]: newArray[1].parts.partA.dye2.manual.fit_data[i],
            [newArray[1].parts.partA.dye3.target_name.concat("_2")]: newArray[1].parts.partA.dye3.manual.fit_data[i],
            [newArray[1].parts.partA.dye4.target_name.concat("_2")]: newArray[1].parts.partA.dye4.manual.fit_data[i],
            [newArray[1].parts.partB.dye1.target_name.concat("_2")]: newArray[1].parts.partB.dye1.manual.fit_data[i],
            [newArray[1].parts.partB.dye2.target_name.concat("_2")]: newArray[1].parts.partB.dye2.manual.fit_data[i],
            [newArray[1].parts.partB.dye3.target_name.concat("_2")]: newArray[1].parts.partB.dye3.manual.fit_data[i],
            [newArray[2].parts.partA.dye1.target_name.concat("_3")]: newArray[2].parts.partA.dye1.manual.fit_data[i],
            [newArray[2].parts.partA.dye2.target_name.concat("_3")]: newArray[2].parts.partA.dye2.manual.fit_data[i],
            [newArray[2].parts.partA.dye3.target_name.concat("_3")]: newArray[2].parts.partA.dye3.manual.fit_data[i],
            [newArray[2].parts.partA.dye4.target_name.concat("_3")]: newArray[2].parts.partA.dye4.manual.fit_data[i],
            [newArray[2].parts.partB.dye1.target_name.concat("_3")]: newArray[2].parts.partB.dye1.manual.fit_data[i],
            [newArray[2].parts.partB.dye2.target_name.concat("_3")]: newArray[2].parts.partB.dye2.manual.fit_data[i],
            [newArray[2].parts.partB.dye3.target_name.concat("_3")]: newArray[2].parts.partB.dye3.manual.fit_data[i],
            [newArray[3].parts.partA.dye1.target_name.concat("_4")]: newArray[3].parts.partA.dye1.manual.fit_data[i],
            [newArray[3].parts.partA.dye2.target_name.concat("_4")]: newArray[3].parts.partA.dye2.manual.fit_data[i],
            [newArray[3].parts.partA.dye3.target_name.concat("_4")]: newArray[3].parts.partA.dye3.manual.fit_data[i],
            [newArray[3].parts.partA.dye4.target_name.concat("_4")]: newArray[3].parts.partA.dye4.manual.fit_data[i],
            [newArray[3].parts.partB.dye1.target_name.concat("_4")]: newArray[3].parts.partB.dye1.manual.fit_data[i],
            [newArray[3].parts.partB.dye2.target_name.concat("_4")]: newArray[3].parts.partB.dye2.manual.fit_data[i],
            [newArray[3].parts.partB.dye3.target_name.concat("_4")]: newArray[3].parts.partB.dye3.manual.fit_data[i],
            [newArray[4].parts.partA.dye1.target_name.concat("_5")]: newArray[4].parts.partA.dye1.manual.fit_data[i],
            [newArray[4].parts.partA.dye2.target_name.concat("_5")]: newArray[4].parts.partA.dye2.manual.fit_data[i],
            [newArray[4].parts.partA.dye3.target_name.concat("_5")]: newArray[4].parts.partA.dye3.manual.fit_data[i],
            [newArray[4].parts.partA.dye4.target_name.concat("_5")]: newArray[4].parts.partA.dye4.manual.fit_data[i],
            [newArray[4].parts.partB.dye1.target_name.concat("_5")]: newArray[4].parts.partB.dye1.manual.fit_data[i],
            [newArray[4].parts.partB.dye2.target_name.concat("_5")]: newArray[4].parts.partB.dye2.manual.fit_data[i],
            [newArray[4].parts.partB.dye3.target_name.concat("_5")]: newArray[4].parts.partB.dye3.manual.fit_data[i],
            [newArray[5].parts.partA.dye1.target_name.concat("_6")]: newArray[5].parts.partA.dye1.manual.fit_data[i],
            [newArray[5].parts.partA.dye2.target_name.concat("_6")]: newArray[5].parts.partA.dye2.manual.fit_data[i],
            [newArray[5].parts.partA.dye3.target_name.concat("_6")]: newArray[5].parts.partA.dye3.manual.fit_data[i],
            [newArray[5].parts.partA.dye4.target_name.concat("_6")]: newArray[5].parts.partA.dye4.manual.fit_data[i],
            [newArray[5].parts.partB.dye1.target_name.concat("_6")]: newArray[5].parts.partB.dye1.manual.fit_data[i],
            [newArray[5].parts.partB.dye2.target_name.concat("_6")]: newArray[5].parts.partB.dye2.manual.fit_data[i],
            [newArray[5].parts.partB.dye3.target_name.concat("_6")]: newArray[5].parts.partB.dye3.manual.fit_data[i],
            [newArray[6].parts.partA.dye1.target_name.concat("_7")]: newArray[6].parts.partA.dye1.manual.fit_data[i],
            [newArray[6].parts.partA.dye2.target_name.concat("_7")]: newArray[6].parts.partA.dye2.manual.fit_data[i],
            [newArray[6].parts.partA.dye3.target_name.concat("_7")]: newArray[6].parts.partA.dye3.manual.fit_data[i],
            [newArray[6].parts.partA.dye4.target_name.concat("_7")]: newArray[6].parts.partA.dye4.manual.fit_data[i],
            [newArray[6].parts.partB.dye1.target_name.concat("_7")]: newArray[6].parts.partB.dye1.manual.fit_data[i],
            [newArray[6].parts.partB.dye2.target_name.concat("_7")]: newArray[6].parts.partB.dye2.manual.fit_data[i],
            [newArray[6].parts.partB.dye3.target_name.concat("_7")]: newArray[6].parts.partB.dye3.manual.fit_data[i],
            [newArray[7].parts.partA.dye1.target_name.concat("_8")]: newArray[7].parts.partA.dye1.manual.fit_data[i],
            [newArray[7].parts.partA.dye2.target_name.concat("_8")]: newArray[7].parts.partA.dye2.manual.fit_data[i],
            [newArray[7].parts.partA.dye3.target_name.concat("_8")]: newArray[7].parts.partA.dye3.manual.fit_data[i],
            [newArray[7].parts.partA.dye4.target_name.concat("_8")]: newArray[7].parts.partA.dye4.manual.fit_data[i],
            [newArray[7].parts.partB.dye1.target_name.concat("_8")]: newArray[7].parts.partB.dye1.manual.fit_data[i],
            [newArray[7].parts.partB.dye2.target_name.concat("_8")]: newArray[7].parts.partB.dye2.manual.fit_data[i],
            [newArray[7].parts.partB.dye3.target_name.concat("_8")]: newArray[7].parts.partB.dye3.manual.fit_data[i],

          }





          Part_A_B_All.push(oneCycle)


          console.log("inside one more nested root", i)

        }





        console.log("My all graph array....", Part_A_B_All)
        setMyAllPartA_PartB_All_Stable(Part_A_B_All)
        setMyAllPartA_PartB_All(Part_A_B_All)
      }

    }


  }

  console.log("sample1_______", mySample1)
  console.log("sample2_______", mySample2)
  console.log("sample3_______", mySample3)
  console.log("sample4_______", mySample4)
  console.log("sample5_______", mySample5)
  console.log("sample6_______", mySample6)
  console.log("sample7_______", mySample7)
  console.log("sample8_______", mySample8)
  console.log("All Sample Data_______", MyAllSampleData)
  console.log("my selected mode..........", myMode)
  console.log("my selected Protocol..........", protocolType)
  console.log("my selected Sorted..........", mySorted)
  console.log("my all graph value part-A and part-B", myAllPartA_PartB)
  console.log("my advancedGraph settings", myAdvancedGraphSetting)
  console.log("myctavalues-->", myCTsettin1)
  console.log("myctavalues taregt-->", myCTsettin1Target)
  console.log("myctavalues-->", myCTsettin2, typeof myCTsettin2)
  console.log("myctavalues taregt-->", myCTsettin2Target)
  console.log("myctavalues-->", myCTsettin3)
  console.log("myctavalues taregt-->", myCTsettin3Target)
  console.log("myctavalues-->", myCTsettin4)
  console.log("myctavalues taregt-->", myCTsettin4Target)
  console.log("myctavalues-->", myCTsettin5)
  console.log("myctavalues taregt-->", myCTsettin5Target)
  console.log("myctavalues-->", myCTsettin6)
  console.log("myctavalues taregt-->", myCTsettin6Target)
  console.log("myctavalues-->", myCTsettin7)
  console.log("myctavalues taregt-->", myCTsettin7Target)
  console.log("myctavalues-->", myCTsettin8)
  console.log("myctavalues taregt-->", myCTsettin8Target)
  console.log("for all graph Samples", myAllPartA_PartB_All)
  console.log("grap type", myTypeOfGraph)
  console.log("all values for", ForAllGraph)
  console.log("all values for Treshold", myTargetsSu)
  console.log("stable graph", myAllPartA_PartB_All_Stable)

  const findResult = () => {

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers if needed
      },
      body: JSON.stringify(  {experiment_id: 'MTB_MY_LAB240115'}),
    };


    fetch(apiUrlReport, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("---------------------", response)
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log("Response data----------------------:", data);
        setMyTargetsSu(data.response.manual_settings)
        setForAllGraph(data.response.sampledata)
        setMyAdvancedGraphSetting(data.response.advanced_settings.graph_settings)
        setMyMode(data.response.analysis_mode);
        setProtocolType(data.response.protocol);


        let MyAllSampleDatasu = [];
        let s1 = data.response.sampledata.filter((item) => {
          return item.sample_position == 1
        })
        MyAllSampleDatasu.push(s1[0])
        setMySample1(s1[0])
        let s2 = data.response.sampledata.filter((item) => {

          return item.sample_position == 2
        })
        MyAllSampleDatasu.push(s2[0])

        setMySample2(s2[0])
        let s3 = data.response.sampledata.filter((item) => {

          return item.sample_position == 3
        })
        MyAllSampleDatasu.push(s3[0])

        setMySample3(s3[0])
        let s4 = data.response.sampledata.filter((item) => {

          return item.sample_position == 4
        })
        MyAllSampleDatasu.push(s4[0])

        setMySample4(s4[0])
        let s5 = data.response.sampledata.filter((item) => {

          return item.sample_position == 5
        })
        MyAllSampleDatasu.push(s5[0])

        setMySample5(s5[0])
        let s6 = data.response.sampledata.filter((item) => {

          return item.sample_position == 6
        })
        MyAllSampleDatasu.push(s6[0])

        setMySample6(s6[0])
        let s7 = data.response.sampledata.filter((item) => {

          return item.sample_position == 7
        })
        MyAllSampleDatasu.push(s7[0])

        setMySample7(s7[0])
        let s8 = data.response.sampledata.filter((item) => {

          return item.sample_position == 8
        })
        MyAllSampleDatasu.push(s8[0])

        setMySample8(s8[0])


        console.log("88888888888888888888888", MyAllSampleDatasu)


        setMyAllSampleData(MyAllSampleDatasu)

      })
      .catch(error => {
        // Handle errors during the fetch request
        console.error("Fetch error:", error);
      });




  }

  function hideModal(id) {
    const modal_el = document.querySelector('#' + id);
    const modal_obj = bootstrap.Modal.getInstance(modal_el);

    if (modal_obj == null) {
      return;
    }

    modal_obj.hide();
  }
  const shareDataSubmit = () => {
    hideModal("exampleModal");
    setShowLoader(true)
    var obj = { ...sharedata }

    console.log("send data test:", obj)

    console.log("data test share data", obj)
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
    }
    console.log("laaaaa.......", obj, config)
    axios.post('http://127.0.0.1:5000/send_email', obj, config)
      .then((response) => {
        console.log("Success", response.data.status);
        setShareData({ email_id: "", experiment_id: '' })

        setShowLoader(false)
        setshowCloseEmailPopUp(true)

      })
      .catch((err) => {
        setShareData({ email_id: "", experiment_id: '' })
        alert("Error in sending an Email", err);
        hideModal("exampleModal");
      })
  }




  const selectMySample = (sid, sposition) => {

    console.log("this is my sorted sample", mySorted)
    setisMyCurrentSampleAvtive(true)
    setTypeOfMyGraph("final")
    setMyPartBoth(true)
    setSelectedSampleId(sid)
    setMyActive(sposition)
    setMyAllPartA_PartB_All(myAllPartA_PartB_All)


    let myFilteredCurrentSample = mySorted.filter((item) => {
      return item.sample_My_Postion == sposition
    })
    setMyCurrentSelectedSample(myFilteredCurrentSample);

    let mySelectedSample = MyAllSampleData.filter((item) => {
      console.log("tttttttttttttt", item)
      console.log("yyyyyyyyyyyyyy", sposition)


      if (item) {
        return (

          item.sample_position == sposition
        )
      }

    })

    console.log("rrrrrrrrrrrrrrrrrrrr", mySelectedSample)


    let Part_A_B = []
    if (myMode == "auto") {

      for (let i = 0; i < mySelectedSample[0].parts.partA.dye1.auto.fit_data.length; i++) {

        let oneCycle = {
          cycle_no: i + 1,
          [mySelectedSample[0].parts.partA.dye1.target_name]: mySelectedSample[0].parts.partA.dye1.auto.fit_data[i],
          [mySelectedSample[0].parts.partA.dye2.target_name]: mySelectedSample[0].parts.partA.dye2.auto.fit_data[i],
          [mySelectedSample[0].parts.partA.dye3.target_name]: mySelectedSample[0].parts.partA.dye3.auto.fit_data[i],
          [mySelectedSample[0].parts.partA.dye4.target_name]: mySelectedSample[0].parts.partA.dye4.auto.fit_data[i],
          [mySelectedSample[0].parts.partB.dye1.target_name]: mySelectedSample[0].parts.partB.dye1.auto.fit_data[i],
          [mySelectedSample[0].parts.partB.dye2.target_name]: mySelectedSample[0].parts.partB.dye2.auto.fit_data[i],
          [mySelectedSample[0].parts.partB.dye3.target_name]: mySelectedSample[0].parts.partB.dye3.auto.fit_data[i],
        }
        Part_A_B.push(oneCycle)

      }
      console.log("My all graph array....", Part_A_B)
      setMyAllPartA_PartB(Part_A_B)



    }
    if (myMode == "manual" || myMode == "advanced") {

      for (let i = 0; i < mySelectedSample[0].parts.partA.dye1.auto.fit_data.length; i++) {

        let oneCycle = {
          cycle_no: i + 1,
          [mySelectedSample[0].parts.partA.dye1.target_name]: mySelectedSample[0].parts.partA.dye1.manual.fit_data[i],
          [mySelectedSample[0].parts.partA.dye2.target_name]: mySelectedSample[0].parts.partA.dye2.manual.fit_data[i],
          [mySelectedSample[0].parts.partA.dye3.target_name]: mySelectedSample[0].parts.partA.dye3.manual.fit_data[i],
          [mySelectedSample[0].parts.partA.dye4.target_name]: mySelectedSample[0].parts.partA.dye4.manual.fit_data[i],
          [mySelectedSample[0].parts.partB.dye1.target_name]: mySelectedSample[0].parts.partB.dye1.manual.fit_data[i],
          [mySelectedSample[0].parts.partB.dye2.target_name]: mySelectedSample[0].parts.partB.dye2.manual.fit_data[i],
          [mySelectedSample[0].parts.partB.dye3.target_name]: mySelectedSample[0].parts.partB.dye3.manual.fit_data[i],
        }
        Part_A_B.push(oneCycle)

      }
      console.log("My all graph array....", Part_A_B)
      setMyAllPartA_PartB(Part_A_B)



    }


  }

  const handleMTBChange = (e) => {

    setMyTargetsSu({ ...myTargetsSu, [e.target.name]: e.target.value })
  }
  const submitMTBCtValue = () => {


    if (myTargetsSu.target1 || myTargetsSu.target2 || myTargetsSu.target3 || myTargetsSu.target4 || myTargetsSu.target5 || myTargetsSu.target6 || myTargetsSu.target7 || myTargetsSu.target8) {
      setShowLoader(true)
      const requestDataManualresult = {
        experiment_id: myexpid,
        thresholds: myTargetsSu,
        protocol: protocolType,
      }
      const fetchOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You can add more headers if needed
        },
        body: JSON.stringify(requestDataManualresult),
      };


      fetch(apiUrlManualAnalysis, fetchOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          console.log("---------------------", response)
          return response.json();
        })
        .then(data => {
          // Handle the response data
          console.log("Response data----------------------:", data);
          localStorage.removeItem("myexp")
          setShowLoader(false)
          // setDoneManualAnalysis(true)
          navigate("/History")
          //  navigate(" /Both_Reports")





        })
        .catch(error => {
          // Handle errors during the fetch request
          console.error("Fetch error:", error);
        });





    } else {
      setshowThresholdPopPup(true)
    }







  }


  let showBoth = () => {
    setMyPartA(false)
    setMyPartB(false)
    setMyPartBoth(true)
    setMyTarget1(true)
    setMyTarget2(true)
    setMyTarget3(true)
    setMyTarget4(true)
    setMyTarget5(true)
    setMyTarget6(true)
    setMyTarget7(true)

  }
  let showA = () => {
    setMyPartA(true)
    setMyPartB(false)
    setMyPartBoth(false)
    setMyTarget1(true)
    setMyTarget2(false)
    setMyTarget3(true)
    setMyTarget4(false)
    setMyTarget5(true)
    setMyTarget6(false)
    setMyTarget7(true)


  }
  let showB = () => {
    setMyPartA(false)
    setMyPartB(true)
    setMyPartBoth(false)
    setMyTarget1(false)
    setMyTarget2(true)
    setMyTarget3(false)
    setMyTarget4(true)
    setMyTarget5(false)
    setMyTarget6(true)
    setMyTarget7(false)

  }
  const StartAutoAnalysis = (selectedExp, condition) => {
    setShowLoader(true)


    const requestDataAutoresult = {
      experiment_id: selectedExp,
      do_analysis: condition
    }
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers if needed
      },
      body: JSON.stringify(requestDataAutoresult),
    };


    fetch(apiUrlAutoResult, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("---------------------", response)
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log("Response data----------------------:", data);
        setMyAutoAnalysis(false)

        setDoneAutoAnalysis(true)
        setShowLoader(false)




      })
      .catch(error => {
        setShowLoader(false)

        // Handle errors during the fetch request
        console.error("Fetch error:", error);
      });

  }


  const HandleMyGraphSetting = (key, index, event) => {
    const { value } = event.target;

    // Create a copy of the current state
    const newState = { ...myAdvancedGraphSetting };

    // Update the specific value in the array
    newState[key][index] = value;

    // Set the updated state
    setMyAdvancedGraphSetting(newState);
  };

  const GoToHistoryPage = () => {
    setshowMyGraphSettingPopUp(false)
    navigate("/History")
  }
  const subMitingGrapSettings = () => {
    const requestDataGrapSetting = {
      experiment_id: myexpid,
      settings_type: "graph_settings",
      settings: myAdvancedGraphSetting
    }
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers if needed
      },
      body: JSON.stringify(requestDataGrapSetting),
    };


    fetch(apiUrlAdvaceGrapgSettings, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("---------------------", response)
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log("Response data----------------------:", data);
        setshowMyGraphSettingPopUp(true)
        // setMyAdvanceShow(false)
        // navigate("/History")

        //  alert("Results are updated successfully!")




      })
      .catch(error => {
        // Handle errors during the fetch request
        console.error("Fetch error:", error);
      });


  }


  const handle1 = (e) => {

    setMyCTsetting1Target({ ...myCTsettin1Target, [e.target.name]: e.target.value })


  }
  const handle2 = (e) => {
    setMyCTsetting2Target({ ...myCTsettin2Target, [e.target.name]: e.target.value })
  }
  const handle3 = (e) => {
    setMyCTsetting3Target({ ...myCTsettin3Target, [e.target.name]: e.target.value })
  }
  const handle4 = (e) => {
    setMyCTsetting4Target({ ...myCTsettin4Target, [e.target.name]: e.target.value })
  }
  const handle5 = (e) => {
    setMyCTsetting5Target({ ...myCTsettin5Target, [e.target.name]: e.target.value })
  }
  const handle6 = (e) => {
    setMyCTsetting6Target({ ...myCTsettin6Target, [e.target.name]: e.target.value })
  }
  const handle7 = (e) => {
    setMyCTsetting7Target({ ...myCTsettin7Target, [e.target.name]: e.target.value })
  }
  const handle8 = (e) => {
    setMyCTsetting8Target({ ...myCTsettin8Target, [e.target.name]: e.target.value })
  }



  const submitingMyCtValues = () => {

    let FinaleArr = [];

    if (myCTsettin1) {
      let ctObj1 = {

        [myCTsettin1.mySampleIdSu]: myCTsettin1Target

      }
      FinaleArr.push(ctObj1)

    }


    if (myCTsettin2) {

      let ctObj2 = {

        [myCTsettin2.mySampleIdSu]: myCTsettin2Target




      }
      FinaleArr.push(ctObj2)
    }


    if (myCTsettin3) {

      let ctObj3 = {
        [myCTsettin3.mySampleIdSu]: myCTsettin3Target
      }
      FinaleArr.push(ctObj3)
    }


    if (myCTsettin4) {

      let ctObj4 = {
        [myCTsettin4.mySampleIdSu]: myCTsettin4Target
      }
      FinaleArr.push(ctObj4)
    }

    if (myCTsettin5) {

      let ctObj5 = {
        [myCTsettin5.mySampleIdSu]: myCTsettin5Target
      }
      FinaleArr.push(ctObj5)
    }
    if (myCTsettin6) {

      let ctObj6 = {
        [myCTsettin6.mySampleIdSu]: myCTsettin6Target
      }
      FinaleArr.push(ctObj6)
    }

    if (myCTsettin7) {

      let ctObj7 = {
        [myCTsettin7.mySampleIdSu]: myCTsettin7Target
      }
      FinaleArr.push(ctObj7)
    }

    if (myCTsettin8) {

      let ctObj8 = {
        [myCTsettin8.mySampleIdSu]: myCTsettin8Target
      }
      FinaleArr.push(ctObj8)
    }





    const requestCTSuSetting = {
      experiment_id: myexpid,
      settings_type: "ct_settings",
      settings: FinaleArr
    }
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // You can add more headers if needed
      },
      body: JSON.stringify(requestCTSuSetting),
    };


    fetch(apiUrlAdvaceGrapgSettings, fetchOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log("---------------------", response)
        return response.json();
      })
      .then(data => {
        // Handle the response data
        console.log("Response data----------------------:", data);
        setshowMyGraphSettingPopUp(true)



      })
      .catch(error => {
        // Handle errors during the fetch request
        console.error("Fetch error:", error);
      });





  }


  const filterForSeparateTarget = (match) => {

    setMyCoordinat(true)

    console.log("my all graph values", myAllPartA_PartB_All)
    const filteredArraySu = myAllPartA_PartB_All_Stable.map(obj => {
      const newObj = {};
      Object.keys(obj).forEach(key => {
        newObj[key.includes(match) ? key : 0] = obj[key];
      });
      return newObj;
    });
    console.log("my all filtered", filteredArraySu)
    setMyAllPartA_PartB_All(filteredArraySu)

  }

  let handelingMyAllGraph = () => {
    setTypeOfMyGraph("all");
    setMyCoordinat(false)
    setMyAllPartA_PartB_All(myAllPartA_PartB_All_Stable)
  }
  let handleMyGraphCheck=()=>{
    setMyCoordinat(false)
    setTypeOfMyGraph("final")
   

  }
  return (

    <div className="graph-report-container">
<Header/>
      {showLoader == true ? <div className="analysis_popup">
        <div style={rotatingBorderStyle}><Spinner /></div><p style={{ textAlign: "center", marginTop: "3px" }}>Please Wait</p>
      </div> : <>
       
        <div className="Both_Report_Wrapper">
          <div className="Both_Report_Main_Container">

            <div className="Both_Report_Main_Container_Left_Side">
              <div className="Both_Report_Main_Container_Left_Side_Header">
           

                {/* {myTypeOfGraph == "all" ? <div style={{ display: "flex", width: "50px", alignItems: "center", marginRight: "30px" }}>
                  <input onChange={(e) => handleMyGraphCheck()} type="checkbox" checked={true} />All
                </div> : <div style={{ display: "flex", width: "50px", alignItems: "center", marginRight: "30px" }}>
      

                  <input onChange={(e) => handelingMyAllGraph()} type="checkbox" value={false} checked={false} />All
                </div>}
 */}




                {protocolType == "MTB" ? <div style={{ flexBasis: "70%", height: "50%", borderRadius: "20px", background: "green", display: "flex", cursor: "pointer" }}>
                  <div onClick={() => setMyAutoAnalysis(true)} style={{ background: myMode == "auto" ? "orange" : "", width: "50%", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", borderRight: "1px solid black" }}>
                    Auto
                  </div>
                  <div onClick={() => setMTBProtocolTypeSuraj(true)} style={{ background: myMode == "manual" ? "orange" : "", display: "flex", cursor: "pointer", justifyContent: "center", alignItems: "center", Header: "100%", width: "50%" }}>
                    Manual
                  </div>
                  <div onClick={() => setMyAdvanceShow(true)} style={{ background: myMode == "advanced" ? "orange" : "", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", display: "flex", cursor: "pointer", justifyContent: "center", alignItems: "center", Header: "100%", width: "50%", borderLeft: "1px solid black" }}>
                    Advanced
                  </div>



                </div> : ""}




              </div>
              {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Share  Result</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <label>Enter email:</label>
                      <input className="form-control" type="email" onChange={(e) => {
                        setShareData((prev) => ({
                          ...prev,
                          email_id: e.target.value

                        })
                        )


                      }} value={sharedata.email_id}>

                      </input>

                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" onClick={shareDataSubmit} class="btn btn-primary">Send</button>
                    </div>
                  </div>
                </div>
              </div> */}
              {myTypeOfGraph == "final" ? <div className="Both_Report_Main_Container_Left_Side_Graph" style={{position:'relative'}}>
                <ResponsiveContainer width="95%" height='80%'>
                  <LineChart
                    // width={600}
                    // height={350}

                    data={myAllPartA_PartB}
                  // margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                  >

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="cycle_no" >
                      <Label value="Cycles" offset={-2 - 3} position="insideBottomRight" />
                    </XAxis>

                    <YAxis label={{ value: 'Fluorescence Value', angle: -90, position: 'insideLeft', dx: 1, dy: 50 }} >

                    </YAxis>
                    <Tooltip />
                    <Legend />
                    {/* */}
                    {/* dataKey={target.target_1} */}

                    {myTarget1 == true ? <Line dot={false} dataKey="MTB" stroke="#00FFFF" type="monotone" style={{ background: "red" }} /> : ""}


                    {myTarget2 == true ? <Line dot={false} type="linear" dataKey="rifE" stroke="#FFA500" /> : ""}



                    {myTarget3 == true ? <Line dot={false} type="linear" dataKey="inhA" stroke="#000000" /> : ""}

                    {myTarget4 == true ? <Line dot={false} type="linear" dataKey="rifC" stroke="#1AA260" /> : ""}

                    {myTarget5 == true ? <Line dot={false} type="linear" dataKey="IC" stroke="#0080ff" /> : ""}



                    {myTarget6 == true ? <Line dot={false} type="linear" dataKey="rifA" stroke="#808000" /> : ""}



                    {myTarget7 == true ? <Line dot={false} type="linear" dataKey="katG" stroke="#A0522D" /> : ""}




                    {/* {myTarget8==true? <Line dot={false} type="linear" dataKey="MTB"  stroke="#F87431" />:""} */}







                  </LineChart>

                </ResponsiveContainer>







                {myTypeOfGraph == "final" ? <div style={{ position: "absolute", left: "", bottom: "1%", width: "100%", height: "60px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget1}
                    checked={myTarget1}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget1(true)
                        console.log(myTarget1)


                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget1(false)


                        console.log(myTarget1)
                      }

                    }}
                    id="target"
                    name="target" />MTB
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget2}
                    checked={myTarget2}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget2(true)
                        console.log(myTarget2)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget2(false)
                        console.log(myTarget2)
                      }
                    }}
                    id="target1"
                    name="target1" />rifE
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget3}
                    checked={myTarget3}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget3(true)
                        console.log(myTarget3)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget3(false)
                        console.log(myTarget3)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />inhA
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget4}
                    checked={myTarget4}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget4(true)
                        console.log(myTarget4)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget4(false)
                        console.log(myTarget4)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />rifC
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget5}
                    checked={myTarget5}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget5(true)
                        console.log(myTarget5)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget5(false)
                        console.log(myTarget5)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />IC
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget6}
                    checked={myTarget6}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget6(true)
                        console.log(myTarget6)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget6(false)
                        console.log(myTarget6)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />rifA
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget7}
                    checked={myTarget7}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget7(true)
                        console.log(myTarget7)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget7(false)
                        console.log(myTarget7)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />katG
                </div>






              </div> : ""}
              {myTypeOfGraph == "all" ? <div style={{ position: "absolute", left: "", bottom: "1%", width: "100%", height: "4vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("MTB")} style={{ color: "#00FFFF", border: "1px solid #00FFFF", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>MTB</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("rifE")} style={{ color: "#FFA500", border: "1px solid #FFA500", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>rifE</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("inhA")} style={{ color: "#000000", border: "1px solid #000000", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>inhA</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("rifC")} style={{ color: "#1AA260", border: "1px solid #1AA260", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>rifC</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("IC")} style={{ color: "#0080ff", border: "1px solid #0080ff", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>IC</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("rifA")} style={{ color: "#808000", border: "1px solid #808000", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>rifA</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("katG")} style={{ color: "#A0522D", border: "1px solid #A0522D", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>katG</div>
                </div>







              </div> : ""}

                {/* {selectedSampleId ? <h1>{selectedSampleId}</h1> : ""} */}
              </div> : ""}
              {myTypeOfGraph == "all" ? <div className="Both_Report_Main_Container_Left_Side_Graph" >
                <ResponsiveContainer width="95%" height='80%'>
                  <LineChart
                    // width={600}
                    // height={350}

                    data={myAllPartA_PartB_All}
                  // margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                  >

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="cycle_no" >
                      <Label value="Cycles" offset={-1.5 - 1.5} position="insideBottomRight" style={{ background: "red" }} />
                    </XAxis>

                    <YAxis label={{ value: 'Fluorescence Value', angle: -90, position: 'insideLeft', dx: 1, dy: 50 }} >

                    </YAxis>
                    {showMyCoordinate?<Tooltip content={false}/>:""}
                    {/* <Tooltip content={false}/> */}
                    {/* <Legend /> */}

                    <Line dot={false} dataKey="MTB_1" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_2" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_3" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_4" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_5" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_6" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_7" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="MTB_8" stroke="#00FFFF" type="monotone" style={{ background: "red" }} />


                    <Line dot={false} dataKey="inhA_1" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_2" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_3" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_4" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_5" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_6" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_7" stroke="#000000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="inhA_8" stroke="#000000" type="monotone" style={{ background: "red" }} />


                    <Line dot={false} dataKey="IC_1" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_2" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_3" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_4" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_5" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_6" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_7" stroke="#0080ff" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="IC_8" stroke="#0080ff" type="monotone" style={{ background: "red" }} />

                    <Line dot={false} dataKey="katG_1" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_2" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_3" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_4" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_5" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_6" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_7" stroke="#A0522D" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="katG_8" stroke="#A0522D" type="monotone" style={{ background: "red" }} />

                    <Line dot={false} dataKey="rifE_1" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_2" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_3" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_4" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_5" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_6" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_7" stroke="#FFA500" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifE_8" stroke="#FFA500" type="monotone" style={{ background: "red" }} />


                    <Line dot={false} dataKey="rifC_1" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_2" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_3" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_4" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_5" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_6" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_7" stroke="#1AA260" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifC_8" stroke="#1AA260" type="monotone" style={{ background: "red" }} />





                    <Line dot={false} dataKey="rifA_1" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_2" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_3" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_4" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_5" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_6" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_7" stroke="#808000" type="monotone" style={{ background: "red" }} />
                    <Line dot={false} dataKey="rifA_8" stroke="#808000" type="monotone" style={{ background: "red" }} />




                  </LineChart>

                </ResponsiveContainer>










                {myTypeOfGraph == "final" ? <div style={{ position: "absolute", left: "", bottom: "1%", width: "100%", height: "60px", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget1}
                    checked={myTarget1}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget1(true)
                        console.log(myTarget1)


                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget1(false)


                        console.log(myTarget1)
                      }

                    }}
                    id="target"
                    name="target" />MTB
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget2}
                    checked={myTarget2}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget2(true)
                        console.log(myTarget2)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget2(false)
                        console.log(myTarget2)
                      }
                    }}
                    id="target1"
                    name="target1" />rifE
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget3}
                    checked={myTarget3}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget3(true)
                        console.log(myTarget3)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget3(false)
                        console.log(myTarget3)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />inhA
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget4}
                    checked={myTarget4}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget4(true)
                        console.log(myTarget4)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget4(false)
                        console.log(myTarget4)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />rifC
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget5}
                    checked={myTarget5}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget5(true)
                        console.log(myTarget5)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget5(false)
                        console.log(myTarget5)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />IC
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget6}
                    checked={myTarget6}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget6(true)
                        console.log(myTarget6)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget6(false)
                        console.log(myTarget6)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />rifA
                </div>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center", height: "30px" }}>
                  <input style={{ width: "25px" }} type="checkbox"
                    value={myTarget7}
                    checked={myTarget7}
                    onChange={event => {
                      if (event.target.checked) {
                        console.log('✅ Checkbox is checked');
                        setMyTarget7(true)
                        console.log(myTarget7)
                      } else {
                        console.log('⛔️ Checkbox is NOT checked');
                        setMyTarget7(false)
                        console.log(myTarget7)
                      }
                    }}
                    id="temprature1_status"
                    name="temprature1_status" />katG
                </div>






              </div> : ""}
              {myTypeOfGraph == "all" ? <div style={{ position: "absolute", left: "", bottom: "1%", width: "100%", height: "4vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("MTB")} style={{ color: "#00FFFF", border: "1px solid #00FFFF", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>MTB</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("rifE")} style={{ color: "#FFA500", border: "1px solid #FFA500", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>rifE</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("inhA")} style={{ color: "#000000", border: "1px solid #000000", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>inhA</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("rifC")} style={{ color: "#1AA260", border: "1px solid #1AA260", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>rifC</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("IC")} style={{ color: "#0080ff", border: "1px solid #0080ff", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>IC</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("rifA")} style={{ color: "#808000", border: "1px solid #808000", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>rifA</div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30px" }}>
                  <div onClick={() => filterForSeparateTarget("katG")} style={{ color: "#A0522D", border: "1px solid #A0522D", borderRadius: "5px", paddingLeft: "5px", paddingRight: "5px", cursor: "pointer" }}>katG</div>
                </div>







              </div> : ""}




                {/* {selectedSampleId ? <h1>{selectedSampleId}</h1> : ""} */}
              </div> : ""}








            </div>



            <div className="Both_Report_Main_Container_Right_Side" style={{background:""}}>

              <div className="Both_Report_Main_Container_Right_Side_Share_Print" style={{ display: "flex", justifyContent: "end", marginTop: "10px", marginBottom: "10px",background:'red' }}>
                {/* <img style={{marginRight:"10px"}} src={PrintIcon}/> */}
                {/* <img style={{marginRight:"3px"}} src={AdvancedSettings} /> */}
                {/* <button>Consolidated</button> */}
              </div>
              {protocolType == "MTB" && myTypeOfGraph == "final" ? <div className="Both_Report_Main_Container_Right_Side_First_Row">
                <div onClick={() => showA()} style={{ cursor: "pointer", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", background: myPartA && myTarget1 && myTarget3 && myTarget5 && myTarget7 && !myTarget2 && !myTarget4 && !myTarget6 ? "#F38220" : "#E6E6E6", flexBasis: "33%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Only A
                </div>
                <div onClick={() => showB()} style={{ cursor: "pointer", background: myPartB && myTarget2 && myTarget4 && myTarget6 && !myTarget1 && !myTarget3 && !myTarget5 && !myTarget7 ? "#F38220" : "#E6E6E6", flexBasis: "33%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Only B
                </div>
                <div onClick={() => showBoth()} style={{ cursor: "pointer", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", background: myPartBoth && myTarget1 && myTarget2 && myTarget3 && myTarget4 && myTarget5 && myTarget6 && myTarget7 ? "#F38220" : "#E6E6E6", flexBasis: "33%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Both
                </div>
              </div> :  <div className="Both_Report_Main_Container_Right_Side_First_Row">
                <div onClick={()=>setshowCloseWarningSelectData(true)}  style={{ cursor: "pointer", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", background: "#E6E6E6", flexBasis: "33%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Only A
                </div>
                <div onClick={()=>setshowCloseWarningSelectData(true)}   style={{ cursor: "pointer", background:"#E6E6E6", flexBasis: "33%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Only B
                </div>
                <div onClick={()=>setshowCloseWarningSelectData(true)}   style={{ cursor: "pointer", borderTopRightRadius: "20px", borderBottomRightRadius: "20px", background: "#E6E6E6", flexBasis: "33%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Both
                </div>
              </div>}




              <div className="Both_Report_Main_Container_Right_Side_Second_Row">
                <div id="sample-holder" style={{ display: "flex", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", backgroundColor: "", color: "white", height: "", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>01</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>02</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>03</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>04</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>05</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>06</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>07</div>
                  <div style={{ flex: 1, justifyContent: "center", display: "flex" }}>08</div>

                </div>


                <div id="sample-row" style={{ display: "flex", backgroundColor: "", color: "white", height: "", justifyContent: "space-around", alignItems: "center", width: "100%" }}>



                  {mySample1 ? <div onClick={() => selectMySample(mySample1.sample_id, mySample1.sample_position)} style={{ background: myActive == 1 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white", }}>

                    <img style={{ cursor: "pointer",height:'75%' }}  src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img  style={{ cursor: "default" ,height:'75%' }} src={sampleTubeEmpty} />

                    </div>}
                  {mySample2 ? <div onClick={() => selectMySample(mySample2.sample_id, mySample2.sample_position)} style={{ background: myActive == 2 ? "#a7bcb9" : "", height:'100%',flex: 1,display: "grid",placeItems:'center',borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer" ,height:'75%',background:''}}  src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img  style={{ cursor: "default" ,height:'75%'}} src={sampleTubeEmpty} />

                    </div>}
                  {mySample3 ? <div onClick={() => selectMySample(mySample3.sample_id, mySample3.sample_position)} style={{ background: myActive == 3 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer" ,height:'100%'}}  src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img style={{ cursor: "default",height:'75%' }} src={sampleTubeEmpty} />

                    </div>}
                  {mySample4 ? <div onClick={() => selectMySample(mySample4.sample_id, mySample4.sample_position)} style={{ background: myActive == 4 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer",height:'75%' }} src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img style={{ cursor: "default",height:'75%' }} src={sampleTubeEmpty} />

                    </div>}
                  {mySample5 ? <div onClick={() => selectMySample(mySample5.sample_id, mySample5.sample_position)} style={{ background: myActive == 5 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer" ,height:'75%' }}src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img  style={{ cursor: "default",height:'75%' }} src={sampleTubeEmpty} />

                    </div>}
                  {mySample6 ? <div onClick={() => selectMySample(mySample6.sample_id, mySample6.sample_position)} style={{ background: myActive == 6 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer",height:'75%' }}  src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img  style={{ cursor: "default",height:'75%' }} src={sampleTubeEmpty} />

                    </div>}
                  {mySample7 ? <div onClick={() => selectMySample(mySample7.sample_id, mySample7.sample_position)} style={{ background: myActive == 7 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer" ,height:'75%'}}  src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img  style={{height:'75%', cursor: "default" }} src={sampleTubeEmpty} />

                    </div>}
                  {mySample8 ? <div onClick={() => selectMySample(mySample8.sample_id, mySample8.sample_position)} style={{ background: myActive == 8 ? "#a7bcb9" : "", flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>

                    <img style={{ cursor: "pointer",height:'75%' }}  src={sampleTubeFilled} />

                  </div>
                    : <div style={{ flex: 1, justifyContent: "center", display: "flex", borderRight: "1px solid white" }}>


                      <img  style={{ cursor: "default",height:'75%' }} src={sampleTubeEmpty} />

                    </div>}





                </div>

              </div>



              <div style={{ marginTop: "10px" }}>
                <div id="sample-table-header" style={{ display: "flex", height: "", borderRadius: "10px", justifyContent: "space-around", alignItems: "center" }}>
                  <div style={{ flex: "1", textAlign: "center" }}>Well No</div>
                  <div style={{ flex: "1", textAlign: "center" }}>Sample ID</div>
                  <div style={{ flex: "1", textAlign: "center" }}>Target</div>
                  <div style={{ flex: "1", textAlign: "center" }}>CT value</div>
                </div>



                <div style={{ marginTop: "10px", overflowY: "scroll", height: "36vh" }}>

                  <div style={{ display: "flex", flexDirection: "column" }}>



                    {isMyCurrentSampleAvtive ? <>

                      {MyCurrentSelectedSampleFiltred.map((item) => {

                        return (
                          <>
   {/* part----A */}
   <div className="sample-detail-items" style={{ display: "flex", marginBottom: "10px", height: "15vh", justifyContent: "space-around", borderRadius: "15px", background: "" }}>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_Postion}</div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_id}</div>




<div style={{ height: "20vh", display: "flex", flexDirection: "column", flex: 1 }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {item.part1.myTarget.map((value) => {

      return (
        <p style={{ margin: 0.5 }}>{value}</p>
      )
    })}

  </div>

</div >


<div style={{ height: "20vh", display: "flex", flexDirection: "column", flex: 1 }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    {item.part1.myCtvalues.map((value) => {

      return (
        value==-1?<p style={{ margin: 0.5 }}>UND</p>:<p style={{ margin: 0.5 }}>{value}</p>
      )
    })}
  </div>

</div >
</div>

{/* part-----B */}
<div className="sample-detail-items" style={{ display: "flex", marginBottom: "10px", height: "15vh", justifyContent: "space-around", borderRadius: "15px", background: "" }}>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_Postion+8}</div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_id}</div>




<div style={{ height: "20vh", display: "flex", flexDirection: "column", flex: 1 }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  {item.part2.myTarget.map((value) => {

return (
<p style={{ margin: 0.5 }}>{value}</p>
)
})}
  </div>

</div >


<div style={{ height: "20vh", display: "flex", flexDirection: "column", flex: 1 }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  {item.part2.myCtvalues.map((value) => {

return (
value==-1?<p style={{ margin: 0.5 }}>UND</p>:<p style={{ margin: 0.5 }}>{value}</p>
)
})}
  </div>

</div >
</div>

                          </>
                        )

                      })

                      }

                    </> : ""}

                    {mySorted.map((item) => {

                      return (
                        <>
                          <div className="sample-detail-items" style={{ display: "flex", marginBottom: "10px", height: "15vh", justifyContent: "center", borderRadius: "15px", background: "" }}>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_Postion}</div>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_id}</div>




                            <div style={{ height: "100%", display: "flex", flexDirection: "column", flex: 1 ,background:''}}>
                              <div style={{ display: "flex", flexDirection: "column",justifyContent:'space-evenly',background:'',height:'100%', alignItems: "center" }}>
                                {item.part1.myTarget.map((value) => {

                                  return (
                                    <p style={{ margin: 0.5 }}>{value}</p>
                                  )
                                })}

                              </div>

                            </div >


                            <div style={{ height: "20vh", display: "flex", flexDirection: "column", flex: 1 }}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                {item.part1.myCtvalues.map((value) => {

                                  return (
                                    value == -1 ? <p style={{ margin: 0.5 }}>UND</p> : <p style={{ margin: 0.5 }}>{value}</p>
                                  )
                                })}
                              </div>

                            </div >
                          </div>
                          <div className="sample-detail-items"  style={{ display: "flex", marginBottom: "10px", height: "15vh", justifyContent: "space-around", borderRadius: "15px", background: "" }}>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_Postion + 8}</div>

                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }} className="text-center" >{item.sample_My_id}</div>




                            <div style={{ height: "100%", display: "flex", flexDirection: "column", flex: 1 }}>
                              <div style={{ display: "flex", flexDirection: "column",background:'',height:'100%',justifyContent:'space-evenly', alignItems: "center" }}>
                                {item.part2.myTarget.map((value) => {

                                  return (
                                    <p style={{ margin: 0.5 }}>{value}</p>
                                  )
                                })}
                              </div>

                            </div >


                            <div style={{ height: "20vh", display: "flex", flexDirection: "column", flex: 1 }}>
                              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                {item.part2.myCtvalues.map((value) => {

                                  return (
                                    value == -1 ? <p style={{ margin: 0.5 }}>UND</p> : <p style={{ margin: 0.5 }}>{value}</p>
                                  )
                                })}
                              </div>

                            </div >
                          </div>
                        </>
                      )

                    })}



                  </div>




                </div>



              </div>




            </div>

          </div>
          {/* <div style={{ margin: "20px auto", width: "100%", width: "92vw", display: "flex", justifyContent: "space-between" }}>
            <button onClick={() => navigate("/History")} style={buttonStyle_Outlined}>Back</button>
            <button style={buttonStyle} onClick={() => {
              setShareData((prev) => ({
                ...prev,
                experiment_id: myexpid

              })

              )
              console.log("mail data....", sharedata)
            }} data-bs-toggle="modal" data-bs-target="#exampleModal">Share</button>
          </div> */}


          {isAutoAnalysis ? <div className="initialization_pop_up_4">
            <div onClick={() => setMyAutoAnalysis(false)} style={{ width: "93%", height: "2.5vh", position: "absolute", top: "23px", display: "flex", justifyContent: "end" }} >
              <img src={sampleTubeFilled} />
            </div>
            <div style={{ marginTop: "7vh", display: "flex", flexDirection: "column", alignItems: "center", width: "80%" }}>
              <h5>Do you want to do AUTO analysis again?</h5>

            </div>
            <div style={{ marginTop: "5vh", width: "100%", display: "flex", justifyContent: "space-around" }}>
              <button style={buttonStyle_Outlined_submit} onClick={() => StartAutoAnalysis(myexpid, false)}>No</button>

              <button style={buttonStyle_Outlined_submit} onClick={() => StartAutoAnalysis(myexpid, true)}>Yes</button>
            </div>



          </div>

            : ""}


          {isMTBProtocolType ? <div className="initialization_pop_up_1">

            {showThresholdPopPup ? <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", height: "30vh", background: "red", top: "14.4vh", width: "80%", boxShadow: "0px 0px 8px 15px rgba(0, 0, 0, 0.1)", background: "#f0f0f0", borderRadius: "10px", }}>

              <p>Please Provide atleast one threshold value the value</p>
              <button onClick={() => setshowThresholdPopPup(false)} style={buttonStyle_Outlined_submit_Close}>Close</button>
            </div> : ""}
            <div onClick={() => setMTBProtocolTypeSuraj(false)} style={{ width: "93%", height: "2.5vh", position: "absolute", top: "23px", display: "flex", justifyContent: "end" }} >
              <img src={sampleTubeFilled} />
            </div>
            <div style={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", width: "80%" }}>
              <h3>Manual Analysis</h3>
              <p>Enter Threshold value against each target</p>
              <table>
                <thead>
                  <tr>
                    <th style={{ borderTopLeftRadius: 10 }}>Target</th>
                    <th style={{ borderTopRightRadius: 10 }}>Threshold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>MTB</td>
                    <td style={{ textAlign: "center" }}><input name="target1" value={myTargetsSu.target1} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>rifE</td>
                    <td style={{ textAlign: "center" }}><input name="target2" value={myTargetsSu.target2} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>inhA</td>
                    <td style={{ textAlign: "center" }}><input name="target3" value={myTargetsSu.target3} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>rifC</td>
                    <td style={{ textAlign: "center" }}><input name="target4" value={myTargetsSu.target4} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>IC</td>
                    <td style={{ textAlign: "center" }}><input name="target5" value={myTargetsSu.target5} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>rifA</td>
                    <td style={{ textAlign: "center" }}><input name="target6" value={myTargetsSu.target6} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "center" }}>katG</td>
                    <td style={{ textAlign: "center" }}><input name="target7" value={myTargetsSu.target7} onChange={(e) => handleMTBChange(e)} style={{ textAlign: "center" }} placeholder="Threshold Value" /></td>
                  </tr>

                </tbody>

              </table>
            </div>
            <div style={{ marginTop: "4vh", marginBottom: "2vh", width: "100%", textAlign: "center" }}>
              <button style={buttonStyle_Outlined_submit} onClick={() => submitMTBCtValue()}>Submit</button>
            </div>



          </div>

            : ""}


          {showCloseEmailPopUp ? <div style={{ marginLeft: "30vw", top: "10vh", position: "absolute", zIndex: 10, background: "#f0f0f0", height: "35vh", borderRadius: "10px", width: "40vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", boxShadow: "0px 0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
            <p>Data shared successfully</p>
            <button style={buttonStyle_Outlined_submit_Close} onClick={() => setshowCloseEmailPopUp(false)} >Close</button>
          </div>

            : ""}

{showCloseWarningSelectData ? <div style={{ marginLeft: "30vw", top: "10vh", position: "absolute", zIndex: 10, background: "#f0f0f0", height: "35vh", borderRadius: "10px", width: "40vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", boxShadow: "0px 0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
            <p>Please Select Sample</p>
            <button style={buttonStyle_Outlined_submit_Close} onClick={() => setshowCloseWarningSelectData(false)} >Close</button>
          </div>

            : ""}

          {myAdvanceShow ? <div className="initialization_pop_up_1_advance">
            <div onClick={() => setMyAdvanceShow(false)} style={{ width: "93%", height: "2.5vh", position: "absolute", top: "23px", display: "flex", justifyContent: "end" }} >
              <img src={sampleTubeFilled} />
            </div>
            <div style={{ marginTop: "6vh", display: "flex", flexDirection: "column", alignItems: "center", width: "80%" }}>


              <div style={{ width: "80%", display: "flex", justifyContent: "space-around", height: "5vh" }}>
                <div style={{ borderBottom: myAdvanceSettingOption == "graph_setting" ? "3px solid orange" : "3px solid white", cursor: "pointer" }} onClick={() => setMyAdvaanceSettingOption("graph_setting")}><h5>Graph Settings</h5></div>
                <div style={{ borderBottom: myAdvanceSettingOption == "ct_setting" ? "3px solid orange" : "3px solid white", cursor: "pointer" }} onClick={() => setMyAdvaanceSettingOption("ct_setting")}><h5>CT Settings</h5></div>
                {/* <div style={{ borderBottom: myAdvanceSettingOption == "report_setting" ? "3px solid orange" : "3px solid white", cursor: "pointer" }} onClick={() => setMyAdvaanceSettingOption("report_setting")}>Report Setting</div> */}
              </div>

              {myAdvanceSettingOption == "graph_setting" ? <div style={{ marginTop: "2vh" }}>

                <div style={{ border: "1px solid black", borderRadius: "10px", height: "53vh", width: "65vw", background: "white", marginBottom: "3vh" }}>
                  <h5 style={{ marginLeft: "5%", marginTop: "5%", marginBottom: "2%" }}>Baseline Corrections</h5>



                  <div >

                    {showMyGraphSettingPopUp ? <div style={{ marginLeft: "12vw", position: "absolute", zIndex: 10, background: "red", height: "35vh", borderRadius: "10px", width: "40vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", boxShadow: "0px 0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
                      <p>Results are updated successfully!</p>
                      <button onClick={() => GoToHistoryPage()} style={buttonStyle_Outlined_submit_Close}>Close</button>
                    </div> : ""}
                    {Object.keys(myAdvancedGraphSetting).map((key) => (
                      <div key={key} style={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
                        <div style={{ marginLeft: '100px', marginRight: '100px', padding: '5px', marginBottom: '1vh', width: "90px" }}>
                          <p>{key === 'ct' ? 'Cycle Threshold Baseline' : 'Fluorescence Baseline'}</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', flexBasis: "1%" }}>
                          {myAdvancedGraphSetting[key].map((value, index) => (
                            <div key={index} style={{ marginRight: '2vw' }}>
                              <label style={{ marginRight: '5px', fontWeight: "bold" }}>{graphsettingsArr[index]}:</label>
                             {value=="MAX"?<input
                                style={{ padding: '5px' }}
                                placeholder={value}
                                type="number"
                                value={value}
                                disabled
                                onChange={(event) => HandleMyGraphSetting(key, index, event)}
                              />:<input
                                style={{ padding: '5px' }}
                                placeholder={graphsettingsArr[index]}
                                type="number"
                                value={value}
                                onChange={(event) => HandleMyGraphSetting(key, index, event)}
                              />} 
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10vh' }}>
                      <div style={{ marginLeft: '100px', padding: '5px' }}>
                        <p>Curve Smooth</p>
                      </div>
                      <div style={{ marginLeft: '5.3vw', padding: '5px' }}>
                        <label className="checkbox-container">
                          <input type="checkbox" checked={true} disabled={true} />
                          <span className="checkmark">&#10003;</span>
                        </label>
                      </div>
                    </div>
                  </div>


                </div>
                <div style={{ marginTop: 10, width: "100%", textAlign: "center", marginBottom: '4vh' }}>
                  <button style={buttonStyle_Outlined_submit} onClick={() => subMitingGrapSettings()} >Save</button>
                </div>


              </div> : ""}

              {myAdvanceSettingOption == "ct_setting" && protocolType == "MTB" ? <div style={{ marginTop: "5vh" }}>
                <div style={{ border: "1px solid black", borderRadius: "10px", height: "53vh", width: "65vw", background: "white", overflowY: "scroll", marginBottom: "3vh" }}>
                  {/* <div style={{ border: "1px solid black", borderRadius: "10px", height: "48vh", width: "50vw", overflowY: "scroll" }}> */}


                  {showMyGraphSettingPopUp ? <div style={{ marginLeft: "12vw", position: "absolute", zIndex: 10, background: "red", height: "35vh", borderRadius: "10px", width: "40vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", boxShadow: "0px 0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
                    <p>Results are updated successfully!</p>
                    <button onClick={() => GoToHistoryPage()} style={buttonStyle_Outlined_submit_Close}>Close</button>
                  </div> : ""}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin1 === null ? "" : <><div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin1.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin1.mySampleIdSu}</p>
                    </div>

                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.MTB} onChange={(e) => handle1(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.IC} onChange={(e) => handle1(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.inhA} onChange={(e) => handle1(e)} name="inhA" />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.katG} onChange={(e) => handle1(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.rifA} onChange={(e) => handle1(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.rifC} onChange={(e) => handle1(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin1Target.rifE} onChange={(e) => handle1(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}

                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin2 === null ? "" : <><div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin2.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin2.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.MTB} onChange={(e) => handle2(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.IC} onChange={(e) => handle2(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.inhA} onChange={(e) => handle2(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.katG} onChange={(e) => handle2(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.rifA} onChange={(e) => handle2(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.rifC} onChange={(e) => handle2(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin2Target.rifE} onChange={(e) => handle2(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin3 === null ? "" : <><div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin3.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin3.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.MTB} onChange={(e) => handle3(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.IC} onChange={(e) => handle3(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.inhA} onChange={(e) => handle3(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.katG} onChange={(e) => handle3(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.rifA} onChange={(e) => handle3(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.rifC} onChange={(e) => handle3(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin3Target.rifE} onChange={(e) => handle3(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin4 === null ? "" : <>
                  <div style={{background:'red', height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>

                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin4.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin4.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.MTB} onChange={(e) => handle4(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.IC} onChange={(e) => handle4(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.inhA} onChange={(e) => handle4(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.katG} onChange={(e) => handle4(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.rifA} onChange={(e) => handle4(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.rifC} onChange={(e) => handle4(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin4Target.rifE} onChange={(e) => handle4(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin5 === null ? "" : <>
                  <div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin5.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin5.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.MTB} onChange={(e) => handle5(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.IC} onChange={(e) => handle5(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.inhA} onChange={(e) => handle5(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.katG} onChange={(e) => handle5(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.rifA} onChange={(e) => handle5(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.rifC} onChange={(e) => handle5(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin5Target.rifE} onChange={(e) => handle5(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin6 === null ? "" : <>
                  <div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin6.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin6.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.MTB} onChange={(e) => handle6(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.IC} onChange={(e) => handle6(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.inhA} onChange={(e) => handle6(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.katG} onChange={(e) => handle6(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.rifA} onChange={(e) => handle6(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.rifC} onChange={(e) => handle6(e)} name="rifC" />
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin6Target.rifE} onChange={(e) => handle6(e)} name="rifE" />
                      </div>







                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin7 === null ? "" : <><div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin7.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin7.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.MTB} onChange={(e) => handle7(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.IC} onChange={(e) => handle7(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.inhA} onChange={(e) => handle7(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.katG} onChange={(e) => handle7(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.rifA} onChange={(e) => handle7(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.rifC} onChange={(e) => handle7(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin7Target.rifE} onChange={(e) => handle7(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}
                  {/* ----------------------------------------------------------------------- */}

                  {myCTsettin8 === null ? "" : <><div style={{ height: "8vh", marginTop: "25px", display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Well No</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin8.mySamplePositionSu}</p>
                    </div>
                    <div style={{ flex: 0.5, marginLeft: "20px", height: "100%" }}>
                      <p>Sample Id</p>
                      <p style={{ marginTop: "-5px" }}>{myCTsettin8.mySampleIdSu}</p>
                    </div>
                    <div style={{ display: "flex", flex: "3", justifyContent: "space-evenly", height: "100%", alignItems: "center" }}>


                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>MTB</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.MTB} onChange={(e) => handle8(e)} name="MTB" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>IC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.IC} onChange={(e) => handle8(e)} name="IC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>inhA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.inhA} onChange={(e) => handle8(e)} name="inhA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>katG</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.katG} onChange={(e) => handle8(e)} name="katG" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifA</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.rifA} onChange={(e) => handle8(e)} name="rifA" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifC</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.rifC} onChange={(e) => handle8(e)} name="rifC" />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }} >
                        <p style={{ margin: "0px" }}>rifE</p>
                        <input style={{ width: "60px", margin: "0px" }} value={myCTsettin8Target.rifE} onChange={(e) => handle8(e)} name="rifE" />
                      </div>








                    </div>
                  </div>
                    <hr style={{ margin: "10px auto", width: "96.5%" }}></hr></>}

                  {/* ------------------------------------------------------------------------------------ */}



                </div>
                <div style={{ marginTop: 10, width: "100%", textAlign: "center", marginBottom: "4vh" }}>
                  <button style={buttonStyle_Outlined_submit} onClick={() => submitingMyCtValues()}>Submit</button>
                </div>

              </div> : ""}

              {myAdvanceSettingOption == "report_setting" ? <div style={{ marginTop: "5vh" }}>
                <div style={{ border: "1px solid black", borderRadius: "10px", height: "40vh", width: "50vw", background: "white" }}>
                  <p style={{ marginLeft: "5%", marginTop: "5%" }}>Interpretation</p>




                </div>


                <div style={{ marginTop: 10, width: "100%", textAlign: "center" }}>
                  <button style={buttonStyle_Outlined_submit} onClick={() => subMitingCTSettings()}>Submit</button>
                </div>
              </div> : ""}






            </div>




          </div>

            : ""}



        </div>
      </>}

    </div>


  )

}



// let myArray=[{surajmane:40,akshay:50},{suraj:67,shubham:56,uvraj:8},{suraj:67,shubham:56,uvraj:8,yuvi:6}]