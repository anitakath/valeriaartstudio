import Image from 'next/image'
import styles from './WelcomeText.module.css'

const WelcomeText = () =>{


    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.borderContainer}>
                   
                </div>

                <div className={styles.containerHeadLiner}>
                    <h1 className={styles.welcomeTitle}> Welcome to my page</h1>
                    <p className={styles.subTitle}> Whispers of Color - Emotions Unfolding - Art with Soul</p>
                </div>

                <div className={styles.borderContainer}>
                
                </div>
           
                  
             
            </div>
        
            <div className={styles.descriptionContainer}>

                <div className={styles.imageContainer}>
                    <Image
                      src="/images/e.jpg" 
                      alt="title image"
                      width={1200}
                      height={1200}
                      className={styles.image}
                      />
                </div>

                <div className={styles.textContainer}>

                <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
                </p>
                    
                </div>
              
            </div>
        </div>
    )
}

export default WelcomeText