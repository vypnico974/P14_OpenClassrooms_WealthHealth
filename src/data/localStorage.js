/* employee mock  */
import defaultEmployeeMock from './employee_mock.json'
// prop types
import PropTypes from 'prop-types'



/**
  * @function getEmployeeStorage
  * @description  get employee storage local
*/
const getEmployeeStorage = () => {
  const data = localStorage.getItem('employee-hrnet')
  console.log({ data })
  const mock = data === null ? defaultEmployeeMock : JSON.parse(data)
  return mock
}


/**
  * @function setEmployeeStorage
  * @description  add employee in storage local
  * @param {object} employeeList - employee list
*/
const setEmployeeStorage = employeeList => {
  localStorage.setItem('employee-hrnet', JSON.stringify(employeeList))
}
setEmployeeStorage.prototype = {
  employeeList: PropTypes.object,
}

const StorageLocal = { getEmployeeStorage, setEmployeeStorage }
export default StorageLocal
