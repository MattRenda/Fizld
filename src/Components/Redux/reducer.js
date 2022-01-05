import { handleActions } from 'redux-actions';

import * as C from './constants';

export const initialState = {
  user:{}
};
const setUserSuccess = (state, action)=>({
  ...state,
  user: action.payload,
})

export default handleActions({
    [C.SET_USER_SUCCESS]: setUserSuccess,
  }, initialState);
  