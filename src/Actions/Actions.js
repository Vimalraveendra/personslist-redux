import {REQUEST_PERSONS_PENDING,
	REQUEST_PERSONS_SUCCESS,
	REQUEST_PERSONS_FAILED}
   from'../Constants/Constants';


   export const searchPersons = ()=>(dispatch)=>{
   	dispatch({type:REQUEST_PERSONS_PENDING})
   	fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>dispatch({type:REQUEST_PERSONS_SUCCESS, payload:data}))
    .catch(error=>dispatch({type:REQUEST_PERSONS_FAILED,payload:error}))
   }