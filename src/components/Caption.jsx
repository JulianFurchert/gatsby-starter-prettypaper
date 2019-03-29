import React from "react";
import styles from "./caption.module.scss";


const Caption = props => {
  let {text, number} = props;
  return (
    <div className={styles.container}>
        { number ? <div className={styles.number}>{number}</div> : null }
        <div className={styles.caption}>{text}</div>
    </div>
  )
}

export default Caption;
