

import styles from './Menubar.module.css'

const MenuBar = ({toggleMenu}) =>{

    return(
        <div className={styles.container}>
            <div>

                <button onClick={() => toggleMenu()}> close </button>
            </div>
        </div>
    )
}

export default MenuBar;