import { combineReducers } from 'redux'
import Increment_blog from './increment_blog'
import Increment_user from './increment_user'
import getReducer from '../reducers/counterReducer'
export default combineReducers({
    Ib:  Increment_blog,
    Iu :Increment_user,
    Rg: getReducer
  })
  