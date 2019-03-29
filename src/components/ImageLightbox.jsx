import React from 'react';
import LightboxContent from './LightboxContent';
import createPortal from '../hocs/createPortal';

import styles from './imageLightbox.module.scss';

const ImageLightbox = props => {
  let {alt, src} = props;
  return (
    <div className={styles.lightboxContainer} >
      <LightboxContent showLightbox={props.showLightbox} close={props.close} >
        <div className={styles.imageContainer}>
          <img className={styles.image} alt={alt} src={src} />
        </div>
      </LightboxContent>
    </div>
  );
}

export default createPortal(ImageLightbox);