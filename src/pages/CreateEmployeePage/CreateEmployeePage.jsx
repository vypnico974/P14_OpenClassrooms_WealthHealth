/* react */
import * as React from "react"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import Select from 'react-select'
/* modal  */
import { Modal } from 'react-modal-by-vyplasiln'
import 'react-modal-by-vyplasiln/dist/index.css'
/* data  */
import { statesArray } from "../../data/states"
import {departmentArray} from "../../data/department"




/* css  */
import styles from './createEmployeePage.module.css'
/* icon */
import userIcon from '../../assets/user_add.svg'





/**react-datepicker
 * @function CreateEmployeePage
 * @export
 * @description Create employee page 
 * @return {HTMLElement} component generated HTML
 */
export default function CreateEmployeePage() {

    /* informations - use state */
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState()
    const [startDate, setStartDate] = useState("")
    /* address - use state */
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [selectedState, setSelectedState] = useState(statesArray[0])
    const [zipCode, setZipCode] = useState()
    /* department - use state */
    const [selectedDepartment, setSelectedDepartment] = useState(departmentArray[0])
    /* modal -use state   */

    const [showModal, setShowModal] = useState(false)

    // const Toggle = () => setShowModal(!showModal)

   // console.log("resultats:",firstName,lastName)
   // console.log("state value:",selectedState.value)
   // console.log("state abbr:",selectedState.abbreviation)


   
   
  
    // your modal style 
    const modal_styles = {
      "backgroundColor": "rgb(187 245 193)",   
      "borderRadius": 10,
      "boxShadow": "rgb(5 60 9) 0px 0px 0px 2px",
      "color": "rgb(5 72 4)",
      "fontSize": 18,
      "height": "fit-content",
      "padding": "20px 50px",
      "width": "fit-content"
    }

    const selectDateBirthHandler = (e) => {
       setDateOfBirth(e)            
    }

    const selectDateStartHandler = (e) => {
        setStartDate(e)
    }
  

    const handleSubmit = (event) => {
        event.preventDefault()

        let currentDateOfBirth = ""
        let currentStartDate = ""

        if (dateOfBirth) {
            currentDateOfBirth = dateOfBirth.toLocaleDateString("en-US")        
        }

        if (startDate) {
            currentStartDate = startDate.toLocaleDateString("en-US")        
        }
       
        let currentEmployee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: currentDateOfBirth,
            startDate: currentStartDate,
            street: street,
            city: city,
            state: selectedState.value,
            abbreviation: selectedState.abbreviation,
            zipcode: zipCode,
            department: selectedDepartment.value
        }
        // console.log(dateOfBirth.getDate(2))
        // console.log(dateOfBirth.toLocaleDateString("en-US",options))

        console.log("employé :",currentEmployee)

        setShowModal(true)
    }


  return (
    <main>
        <div className={styles.userIconContainer}>
            <img className={styles.userIcon} src={userIcon} alt="user add" />
        </div>


        <form onSubmit={handleSubmit} id="createForm" >

           <div className={styles.createForm}>

                <div className={styles.informationsContainer}>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="firstName">First name</label>
                        <p>
                            <input className={styles.input} autoComplete="off"
                                id="firstName"
                                name="First-name"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="first name" 
                                type="text" 
                                required={true}
                                // pattern="[A-zÀ-ú-']{2,}"
                                // title="At least 2 alphabetic characters"
                            />
                        </p>                    
                    </div>
                    <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="lastName">Last name</label>
                        <p>
                            <input autoComplete="off"
                                id="lastName"
                                name="Last-name"
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="last name" 
                                type="text" 
                                required={true}
                                // pattern="[A-zÀ-ú-']{2,}"
                                // title="At least 2 alphabetic characters"
                            />
                        </p>                    
                    </div>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="dateBirth">Date of Birth</label>                
                        <div>
                            <DatePicker
                                dateFormat="MM/dd/yyyy"
                                placeholderText="mm/dd/yyyy"
                                selected={dateOfBirth} 
                                onChange={selectDateBirthHandler} 
                            />
                        </div>                 
                    </div>
                    <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="startDate">Start Date</label>
                        <div>
                            <DatePicker
                                dateFormat="MM/dd/yyyy"
                                placeholderText="mm/dd/yyyy"
                                selected={startDate} 
                                onChange={selectDateStartHandler} 
                            />
                        </div>                                      
                    </div>
                </div>

                <fieldset className={styles.adressContainer}>
                    <legend>Address</legend>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="street">Street</label>
                            <p>
                                <input autoComplete="off"
                                    id="street"
                                    name="street"
                                    onChange={(e) => setStreet(e.target.value)}
                                    placeholder="street" 
                                    type="text" 
                                />
                            </p>                    
                        </div>
                        <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="city">City</label>
                            <p>
                                <input autoComplete="off"
                                    id="city"
                                    name="city"
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="city" 
                                    type="text" 
                                />
                            </p>                    
                        </div>
                        <div className={styles.informationsContainer__select}>
                            <label htmlFor="state">State</label>
                            <Select 
                                value={selectedState}
                                defaultValue={selectedState}
                                onChange={setSelectedState}
                                options={statesArray}
                                id="states"
                                name="state"
                                className={styles.select}
                            />                 
                        </div>
                        <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="zipCode">Zip Code</label>
                        <p>
                            <input autoComplete="off"
                            type="number"
                            id="zipCode"
                            name="Zip code"
                            onChange={(e) => setZipCode(e.target.value)}
                            />
                        </p>                    
                    </div>
                </fieldset>

                <div className={styles.departmentContainer}>
                    <div className={styles.informationsContainer__select}>
                        <label htmlFor="department">Department</label>
                        <Select 
                                value={selectedDepartment}
                                defaultValue={selectedDepartment}
                                onChange={setSelectedDepartment}
                                options={departmentArray}
                                id="department"
                                name="department"
                                className={styles.select}
                            />                     
                    </div>

                    
                </div>               
            </div> 

            <div className={styles.btnContainer}>
                <button id="form-btn"  type="submit">Save</button>
            </div>      

        <div>
            {/* <button onClick={() => Toggle()}>
            Clic to open Modal
            </button> */}

            <Modal 
            id="modalEmployeeCreated"
            showModal={showModal}
            closeModal={() => setShowModal(false)}
            modal_styles={modal_styles}
            message="Employee Created !"
            />
        </div>


        </form>

        
    
 
    </main>
  )
}
