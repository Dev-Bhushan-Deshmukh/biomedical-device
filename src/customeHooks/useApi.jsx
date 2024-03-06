import React from 'react'

export const useApi = (data_,method_) => {
  requestBody=data_
let body__={
method:method_,
Headers:{
    'Content-Type':'application/json'

},
body:JSON.stringify(requestBody)  




}

try{
    fetch(url__,body__).then(data=>{

        data.json()
    })

}
catch{

throw
}



  return (

  )
}
