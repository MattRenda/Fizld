import { createAction } from 'redux-actions';

import * as C from './constants';
export const Init = createAction(C.INIT); 

export const createUser = createAction(C.CREATE_USER); 

export const setUser = createAction(C.SET_USER); 
export const setUserSuccess = createAction(C.SET_USER_SUCCESS); 


