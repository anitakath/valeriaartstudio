

import styles from './Layout.module.css'

const Header = () =>{


    return(
        <div className={styles.container}>  

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
                        <button className={styles.menuButton}> menu</button>
                    </div>

                    <div className={styles.iconsDiv}>
                        <button className={styles.button}>search </button>
                        <button className={styles.button}> basket</button>

                    </div>
                
                </div>

               <div className={styles.logoContainer}>
                    <h1 className={styles.logoTitle}> VAS </h1>
                    <p className={styles.logoSubTitle}> Valeria Art Studio</p>
               </div>

            </div> 
        
        </div>
    )
}

export default Header