import React from "react";
import { CSSTransition } from 'react-transition-group';
import styles from "./lightboxContent.module.scss";

const LightboxContent = props => {
  return (
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.showLightbox}
        timeout={{ enter: 30000, exit: 100 }}
        classNames="lightbox"
      >
        <div onClick={props.close} className={styles.lightbox}>
          {props.children}
        </div>
      </CSSTransition>
  )
}

export default LightboxContent;