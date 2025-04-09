import styles from './Layout.module.css'
import Link from 'next/link'
const Footer = () =>{


    return(
       <div className={styles.footerContainer}>
        <div className='flex w-full justify-between'>
          <div className={styles.socialMediaContainer}>
            <button className={styles.socialMediaButton}> ig</button>
            <button className={styles.socialMediaButton}> tk</button>
            <button className={styles.socialMediaButton}> @ </button>
          </div>

          <div className={styles.spaceContainer}> 
            <Link href="/impressum" className={styles.link}> impressum </Link>
            <Link href="/datenschutz" className={styles.link}> datenschutz </Link>
            <Link href="/rechtliches" className={styles.link}> rechtliches </Link>
          <button className={styles.socialMediaButton}> ... </button>
          <button className={styles.socialMediaButton}> ... </button>
          </div>
          

        </div>
         
       </div>
    )
}

export default Footer