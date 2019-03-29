import React, { Component } from "react";
import ColorLightbox from "./ColorLightbox";
import PropItem from "./PropItem";
import styles from "./colorCard.module.scss";


class ColorSwatch extends Component {

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
    let {hex, name} = this.props;
    return (
      <div className={styles.container}>
        <ColorLightbox
          showModal={this.state.showLightbox}
          close={this.closeLightbox}
          {...this.props}
        />
        <div className={styles.colorCard}>
          <div className={styles.header}
            onClick={this.openLightbox}
            style={{backgroundColor: hex}}
          />
          <div className={styles.body}>
            <PropItem label="Name" value={name} />
            <PropItem label="Hex" value={hex} copyValue />
          </div>
        </div>
      </div>
    )
  }
}

export default ColorSwatch;