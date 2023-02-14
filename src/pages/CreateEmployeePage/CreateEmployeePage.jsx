/* react */
import * as React from "react"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

    /* DatePicker */
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [startDate, setStartDate] = useState("");


  return (
    <main>
        <div className={styles.userIconContainer}>
            <img className={styles.userIcon} src={userIcon} alt="user add" />
        </div>
        <form action="#" id="createForm" >

           <div className={styles.createForm}>

                <div className={styles.informationsContainer}>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="firstName">First name</label>
                        <p>
                            <input className={styles.input} autoComplete="off"
                                id="firstName"
                                name="First-name"
                                // onChange=""
                                placeholder="first name" 
                                type="text" 
                            />
                        </p>                    
                    </div>
                    <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="lastName">Last name</label>
                        <p>
                            <input autoComplete="off"
                                id="lastName"
                                name="Last-name"
                                // onChange=""
                                placeholder="last name" 
                                type="text" 
                            />
                        </p>                    
                    </div>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="dateBirth">Date of Birth</label>                
                        <div>
                            <DatePicker
                                dateFormat="yyyy/mm/dd"
                                placeholderText="yyyy/mm/dd"
                                selected={dateOfBirth} 
                                //onChange={selectDateHandler} 
                            />
                        </div>                 
                    </div>
                    <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="startDate">Start Date</label>
                        <div>
                            <DatePicker
                                dateFormat="yyyy/mm/dd"
                                placeholderText="yyyy/mm/dd"
                                selected={startDate} 
                                //onChange={selectDateHandler} 
                            />
                        </div>                                      
                    </div>
                </div>

                <div className={styles.adressContainer}>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="street">Street</label>
                            <p>
                                <input autoComplete="off"
                                    id="street"
                                    name="street"
                                    // onChange=""
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
                                    // onChange=""
                                    placeholder="city" 
                                    type="text" 
                                />
                            </p>                    
                        </div>
                        <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="state">State</label>
                            <p>
                                <input autoComplete="off"
                                    id="state"
                                    name="state"
                                    // onChange=""
                                    placeholder="a faire menu deroulant" 
                                    type="text" 
                                />
                            </p>                    
                        </div>
                        <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="zipCode">Zip Code</label>
                            <p>
                                <input autoComplete="off"
                                    type="number"
                                    id="zipCode"
                                    name="Zip code"
                                    // onChange=""
                                />
                            </p>                    
                        </div>
                    </div>

                <div className={styles.departmentContainer}>
                    <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="department">Department</label>
                        <p>
                            <input autoComplete="off"
                                id="department"
                                name="department"
                                // onChange=""
                                placeholder="a faire menu deroulant" 
                                type="text" 
                            />
                        </p>                    
                    </div>

                    
                </div>               
            </div> 

            <div className={styles.btnContainer}>
                <button id="form-btn"  type="submit">Save</button>
            </div>      


        </form>
    </main>
  )
}
