import React from 'react';
import LightboxContent from './LightboxContent';
import LightboxBar from './LightboxBar';
import FontBottombar from './FontBottombar';
import createPortal from '../hocs/createPortal';
import styles from './fontLightbox.module.scss';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYUabcdefghijklmnooqrstuvwxyz"


const FontLightbox = props => {
  let {family, fontstyle, weight } = props;
  return (
    <div className={styles.lightboxContainer} >
      <LightboxBar barStyle="bottombar" showLightbox={props.showLightbox}>
        <FontBottombar {...props} />
      </LightboxBar>
      <LightboxContent showLightbox={props.showLightbox} close={props.close} >
        <div
          className={styles.lightboxContent}
          style={{
            fontFamily: family,
            fontStyle: fontstyle,
            fontWeight: weight,
          }}
        >
          <div className={styles.lightboxFont}>
            {alphabet}
          </div>
        </div>
      </LightboxContent>
    </div>
  );
}

export default createPortal(FontLightbox);