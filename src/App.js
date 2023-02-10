/* react */
import {React} from "react"
/* composants  */
import Header from './components/Header/Header'


/* css  */
import './styles/normalize.css'
import './styles/global.css'

/* logo */
import logoHeader from "./assets/Wealth_Health.jpg"


const arrayNav = [{ linkNav: "/", titleNav: "Create Employee" },
                  { linkNav: "/list", titleNav: "View Current Employees" }]

//  const arrayNav = [{ linkNav: "/", titleNav: "Accueil" },
//  { linkNav: "/about", titleNav: "A Propos"},
// { linkNav: "/about", titleNav: "Test" }]


export default function App() {
  return (
    /* <></> évite de rajouter un noeud suppémentaire au DOM */
    <>  
      {/* en-tête identique pour chaque page */}   
      <Header picture={logoHeader} linkPicture="/" arrayNav={arrayNav}
       formatting="header" /> 
        {/* exemple formatting = "smallHeader" */}
    </>
  )
}

