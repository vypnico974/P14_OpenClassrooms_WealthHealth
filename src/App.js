/* react */
import {React} from "react"
import { Routes, Route } from "react-router-dom"
/* composants  */
import Header from './components/Header/Header'
/*  pages */
import ListEmployeePage from "./pages/ListEmployeePage/ListEmployeePage"
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage"
import Error from "./pages/Error/Error"


/* css  */
import './styles/normalize.css'
import './styles/global.css'

/* logo */
import logoHeader from "./assets/Wealth_Health_logo.jpg"


const arrayNav = [{ linkNav: "/", titleNav: "Create Employee" },
                  { linkNav: "/list", titleNav: "View Current Employees" }]

//  const arrayNav = [{ linkNav: "/", titleNav: "Accueil" },
//  { linkNav: "/about", titleNav: "A Propos"},
// { linkNav: "/about", titleNav: "Test" }]


export default function App() {
  return (
    <>  
      {/* header  example formatting = "smallHeader"*/}   
      <Header picture={logoHeader} linkPicture="/" arrayNav={arrayNav} 
       formatting="header" /> 
        <Routes> 
          <Route path="/" element={<CreateEmployeePage />}/>
            <Route path="/list" element={<ListEmployeePage />}/>
            {/* Error Route */}
          <Route path="*" element={<Error />}/>
        </Routes>
    </>
  )
}

