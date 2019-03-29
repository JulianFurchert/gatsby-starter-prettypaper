import React from 'react';
import cx from "classnames";
import styles from './button.module.scss';

const Bottom = props => {
  let {download, label, icon, black, onClick} = props;

  let classNames = cx(styles.button, {
    [styles.buttonBlack]: black,
  })

  return (
    <button className={classNames}>
      { label ? (
        <div className={styles.text}>
          { download ? (
            <a href={download} download className={styles.link}> {props.label} </a>
          ) : props.label }
        </div>
      ) : null}

      { icon ? (
        <div onClick={onClick} className={styles.iconContainer}>
          <img className={styles.icon} src={props.icon} alt="icon"/>
        </div>
      ) : null }
    </button>
  )
}

export default Bottom;