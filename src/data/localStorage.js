/* employee mock  */
import defaultEmployeeMock from './employee_mock.json'

/*  storage local  */
const getEmployeeStorage = () => {
  const data = localStorage.getItem('employee-hrnet')
  console.log({ data })
  const mock = data === null ? defaultEmployeeMock : JSON.parse(data)
  return mock
}
/* for add employee in storage local  */
const setEmployeeStorage = employeeList => {
  localStorage.setItem('employee-hrnet', JSON.stringify(employeeList))
}

const StorageLocal = { getEmployeeStorage, setEmployeeStorage }
export default StorageLocal
