/* react */
import React from "react"
import { Link, NavLink } from "react-router-dom"
/* css */
import styles from './header.module.css'


export default function Header({picture,linkPicture,arrayNav,formatting}) {
  /* exemple formatting = "smallHeader"  */
  return (
    <header className={`${styles.container__header} ${styles[formatting]}`}>
      { picture &&
      <Link to={linkPicture} >

        <img className={`${styles.header__logo} ${styles[formatting]}`} src={picture} alt="Logo" />
      </Link> 
      }
      <p className={styles.title}>HRnet</p>
      <nav>   
        <ul className={styles.header__nav__ul}>
        {arrayNav.map((nav, index) => (
          <li className={`${styles["header__nav__ul--li"]} ${styles[formatting]}`} key={`${index}-${nav.linkNav}`}>
            {/* pour surligner le lien active  */}
            <NavLink className={({ isActive }) => {
            return isActive ? styles.navLink_active : styles.link
          }} to={nav.linkNav}
            >{nav.titleNav}</NavLink></li> 
        ))}
        </ul>
      </nav>   
    </header>
  )
}