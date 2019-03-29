import React from 'react';
import LightboxContent from './LightboxContent';
import LightboxBar from './LightboxBar';
import ColorSidebar from './ColorSidebar';
import createPortal from '../hocs/createPortal';

import styles from './colorLightbox.module.scss';

const ColorLightbox = props => {
  return (
    <div className={styles.lightboxContainer} >
      <LightboxBar barStyle="sidebar" showLightbox={props.showLightbox}>
        <ColorSidebar {...props} />
      </LightboxBar>
      <LightboxContent showLightbox={props.showLightbox} close={props.close} >
        <div className={styles.lighboxContent} style={{backgroundColor: props.hex}} />
      </LightboxContent>
    </div>
  );
}

export default createPortal(ColorLightbox);