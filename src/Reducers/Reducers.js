
import {
	REQUEST_PERSONS_PENDING,
	REQUEST_PERSONS_SUCCESS,
	REQUEST_PERSONS_FAILED
}from'../Constants/Constants';

const initialState = {
	persons:[],
	isPending:false,
	error:''
}


export const searchPersons = (state=initialState, action={})=>{
	const newState = {...state}
    switch(action.type){
    	case REQUEST_PERSONS_PENDING:
    	return{
    		...newState,
    		isPending:true
    	}
    	case REQUEST_PERSONS_SUCCESS:
    	return{
    		...newState,
    		persons:action.payload,
    		isPending:false
    	}
    	case REQUEST_PERSONS_FAILED:
    	return{
    		...newState,
    		error:action.payload,
    		isPending:false
    	}
      default:
      return newState;
    }
}