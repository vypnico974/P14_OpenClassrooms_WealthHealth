import { createSlice } from '@reduxjs/toolkit'
import localStorge from '../data/localStorage'


// employee initial state
const  initialState = {
  employeeList: localStorge.getEmployeeStorage(),
}

 /**
 * creating a slice of the store : allows to define
 * action and reducer for employee
 */
const employeeSlice = createSlice({
  // Slice name
  name: 'add',
  // initial state
  initialState,
  // action and reducer
  reducers: {
    addEmployee: (state, action) => {
      state.employeeList.unshift(action.payload)
      localStorge.setEmployeeStorage(state.employeeList)
    },
  },
})

/* export action and reducer   */
const employeeReducer = employeeSlice.reducer
const {addEmployee} = employeeSlice.actions
export { employeeReducer, addEmployee }

