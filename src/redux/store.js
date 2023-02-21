import { configureStore } from '@reduxjs/toolkit'
import { employeeReducer } from './employee'


/* configureStore :  create the Redux store 
store : assemble state, action and reducer */
export const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
})
