import {
    all, takeEvery,put,select} from 'redux-saga/effects';
import * as C from './constants';
import withAsync from '../ReduxUtility/withAsync';
import * as actions from './actions';
import * as selectors from './selectors';

export function* Init(){
  try {
    const user = yield select(selectors.getUser());
    yield setUser(user);
  } catch (error) {
    console.log(error);
  }
}

export function* setUser(input){
    const user = yield fetch("https://portfoliocontact.azurewebsites.net/api/DB?code=AzG0nKQ149jo9gnaRpp10XWYbZdahfJLja5n45GX8xhdDAmdOzEcEw==",{
      method:"POST",
      body:JSON.stringify({
        Email:input.payload.email,
        Password:input.payload.password
      })
    }).then(res=>res.json())
    console.log(user)
    if(user.status === 404){
      yield put(actions.setUserSuccess({error:"You have entered an invalid email / password combination."}));
    }
    else if(user.status === 200){
      yield put(actions.setUserSuccess(user));
    }
 
}

export function* CreateUser(input){
  try {
    yield fetch("https://portfoliocontact.azurewebsites.net/api/DB-Create?code=w05TKorbZ2ZxivVakKPDhgmgv/iFrwKMzeZQynMjevuz5PFmTwvgpg==",{
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
  