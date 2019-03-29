import React, { Component } from "react";
import ImageLightbox from './ImageLightbox';
import Caption from "./Caption";
import styles from "./image.module.scss";

class Image extends Component {

  constructor(props){
    super(props);
    this.state = { showLightbox: false };
    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  closeLightbox() {
    this.setState({ showLightbox: false });
  }

  openLightbox(){
    this.setState({ showLightbox: true });
  }

  render(){
    let {alt, src, caption } = this.props;
    return (
      <div className={styles.container}>
        <ImageLightbox
          showModal={this.state.showLightbox}
          close={this.closeLightbox}
          {...this.props}
        />
        <img onClick={this.openLightbox} className={styles.image} alt={alt} src={src} />
        { caption ? <Caption text={caption}/> : null }
      </div>
    )
  }
}

export default Image;