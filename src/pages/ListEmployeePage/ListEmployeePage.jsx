/* react */
import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectEmployees } from "../../redux/selector"
/* employee table   */
import Table from "../../components/Table/Table"
/* employee columns     */
import { employeeColumns } from '../../components/Table/employeeColumns'
/* css  */
import styles from './listEmployeePage.module.css'



/**
 * @function ListEmployeePage
 * @export
 * @description List employee page 
 * @return {HTMLElement} component generated HTML
 */
export default function ListEmployeePage() {

  //// Use Selector for extract: employee (state)
  const employeState = useSelector(selectEmployees)
  //console.log(employeState.employeeList)
    
  const columns = React.useMemo(
    () => employeeColumns, []
  )

  const data = 
    React.useMemo(() => employeState.employeeList, [employeState.employeeList])


  return (
    <main>
      <div className={styles.tableContainer}>
        <Table columns={columns} data={data} />
      </div>

      <div className={styles.btnContainer}>
        <Link to="/"><button>Home</button></Link>
      </div> 
      
    </main>
  )
}
