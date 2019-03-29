import React from "react";
import { CSSTransition } from 'react-transition-group';
import cx from "classnames";

import styles from "./LightboxBar.module.scss";

const LightboxBar = props => {
  let classNames = cx( {
    [styles.sidebar]: props.barStyle === "sidebar",
    [styles.bottombar]: props.barStyle === "bottombar",
  })
  return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.showLightbox}
        timeout={{ enter: 10000, exit: 100 }}
        classNames="bar"
      >
        <div onClick={props.toggle} className={classNames}>
          {props.children}
        </div>
      </CSSTransition>

  )
}

export default LightboxBar;