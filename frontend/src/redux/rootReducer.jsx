import { combineReducers } from 'redux'
import { login_registerReducer } from './login_register/login_registerReducer'

export const rootReducer = combineReducers({
    select: login_registerReducer
})