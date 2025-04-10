"use client" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Layout.module.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import MenuBar from './MenuBar'
import { useState } from 'react'

const Header = () =>{

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () =>{
        setShowMenu(!showMenu)
    }

    return(
        <div className={styles.container}>  

         {showMenu && <MenuBar toggleMenu={toggleMenu} />}

            <div className={styles.subContainer}>
                <ul className={styles.headerUl}>
                    <li> -Worldwide Shipping </li>
                    <li> -Original Paintings </li>
                    <li> -Fine Art Prints </li>
                    <li> -Online Masterclass </li>

                </ul>
            </div>

            <div className={styles.titleContainer}>
               <div className={styles.iconsContainer}> 
                    <div className={styles.iconsDiv}> 
                        <button className={styles.menuButton}> 
                            <FontAwesomeIcon 
                                icon={faBars}
                                onClick={() => toggleMenu()}
                            />

                        </button>
                    </div>

                    <div className={styles.iconsDiv}>
                        <button className={styles.button}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <button className={`${styles.button} ${styles.basketButton}`}> 🛍️ </button>

                    </div>
                
                </div>

               <div className={styles.logoContainer}>
                    <h1 className={`${styles.logoTitle} title`}>  VAS </h1>
                    <p className={styles.logoSubTitle}> Valeria Art Studio</p>
               </div>

            </div> 
        
        </div>
    )
}

export default Header