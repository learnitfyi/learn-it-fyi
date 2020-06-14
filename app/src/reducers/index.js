import { combineReducers } from 'redux'
import careersReducer from './careers-reducer'
import skillsReducer from './skills-reducer'
import userReducer from './user-reducer'


const rootReducer = combineReducers({
  careers: careersReducer,
  skills: skillsReducer,
  user: userReducer
})

export default rootReducer
