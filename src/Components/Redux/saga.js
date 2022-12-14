import {
    all, takeEvery,put} from 'redux-saga/effects';
import * as C from './constants';
import withAsync from '../ReduxUtility/withAsync';
import * as actions from './actions';

export function* Init(){
  try {
    let user = sessionStorage.getItem('ms_id');    
    if(user){
      yield put(actions.setUserSuccess(JSON.parse(user)));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* updateUser(input){
  yield fetch("https://6lpj0zzd1j.execute-api.us-east-1.amazonaws.com/default/Fizld-update",{
    method:"POST",
    body:JSON.stringify({
      Email:input.payload.email,
      Password:input.payload.password,
      product:input.payload.product
    })
  })
  .then(res=>res.json())
  .then(data=>console.log(data.modifiedCount));
}

export function* setUser(input){
  console.log(input)

    const response = yield fetch("https://b1jfi6brah.execute-api.us-east-1.amazonaws.com/default/Fizld-Get",{
      method:"POST",
      body:JSON.stringify({
        Email:input.payload.email,
        Password:input.payload.password
      })
    }).then(res=>{ 
      if(res.status === 200){
        return res.json();
      }
      else if(res.status === 404){
        return {error:"You have entered an invalid email / password combination."};
      }
      else
        return {error:"server Error"}
    })
    sessionStorage.setItem('ms_id',JSON.stringify(response));
  
    yield put(actions.setUserSuccess(response));
}

export function* createUser(input){
  try {
    yield fetch(" https://vknlufsno3.execute-api.us-east-1.amazonaws.com/default/Fizld-create",{
      method:"POST",
      body:JSON.stringify({
        Email:input.payload.email,
        Password:input.payload.password,
        FirstName:input.payload.firstName,
        LastName:input.payload.lastName
      })
    }).then(res=>res.json())  
  } catch (error) {
    console.log(error);
  }
}

export default function* saga() {
    yield all([
      takeEvery(C.SET_USER,withAsync(setUser)),
      takeEvery(C.INIT,withAsync(Init)),
      takeEvery(C.CREATE_USER,withAsync(createUser)),
      takeEvery(C.UPDATE_USER,withAsync(updateUser)),
    ]);
  }
  