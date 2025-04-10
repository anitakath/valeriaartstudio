
import Image from "next/image"
import styles from './HeaderImage.module.css'

const HeaderImage = () =>{


    return(
        <div className={styles.container}>
            <Image 
                src="/images/c.jpg" 
                alt="title image"
                width={1200}
                height={1200}
                className={styles.headerImage}
            />

        </div>
    )
}

export default HeaderImage