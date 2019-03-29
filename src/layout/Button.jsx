import React from 'react';
import styles from './button.module.scss';
import closeIcon from '../assets/icons/close-Icon.svg';
import menuIcon from '../assets/icons/menu-icon.svg';


const Button = props => {
  return(
    <div onClick={props.handleClick} className={styles.button}>
      { props.navOpen ? (
        <img className={styles.icon} alt="close" src={closeIcon} />
      ) : (
        <img className={styles.icon} alt="menu" src={menuIcon} />
      )}
    </div>
  )
}

export default Button;
