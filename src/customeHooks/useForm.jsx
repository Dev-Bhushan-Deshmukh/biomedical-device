import React, { useState } from 'react'

export const UseForm = (fn,ps) => {


const[val,setVal]=useState('xxx');


function validate(firstName,password){
console.log(firstName,password)
if(firstName===''|| password==="")
{ 
    setVal('InValid')
    console.log("trial",val)
    return 
}
else{

    setVal('Valid')
}


}
function makeCall(u,p){

console.log("CCC",u,p)

}




  return [validate,val,makeCall]
}
