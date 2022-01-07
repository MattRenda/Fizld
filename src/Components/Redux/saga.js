import {
    all, takeEvery,put,select} from 'redux-saga/effects';
import * as C from './constants';
import withAsync from '../ReduxUtility/withAsync';
import * as actions from './actions';
import * as selectors from './selectors';

export function* Init(){
function getCookie(name) {
  var cookieArr = document.cookie.split(";");
  for(var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if(name == cookiePair[0].trim()) {
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}
  try {
    const user = getCookie("ms_id")
    if(user){
      yield put(actions.setUserSuccess(JSON.parse(user)));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* setUser(input){
    const response = yield fetch("https://freelance.azurewebsites.net/api/Get?code=No8rC6GOux4kWdnEZ5cxDOna3dbHbsk4gKpqU6x1ZLeIAlplg3lGqQ==",{
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
    })
    try {
      document.cookie = `ms_id=${JSON.stringify(response)};`
      console.log(response)
    } catch (error) {
      console.log(error)
    }
    yield put(actions.setUserSuccess(response));
}

export function* CreateUser(input){
  try {
    yield fetch("https://freelance.azurewebsites.net/api/Create?code=TGyfjkyQYpmbJ6DaJqOA8XDwig3WA8wjnNQ6CaiahgMbPoK/5REDDQ==",{
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
      takeEvery(C.CREATE_USER,withAsync(CreateUser)),
    ]);
  }
  