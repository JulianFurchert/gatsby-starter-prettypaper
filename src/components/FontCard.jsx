import React, { Component } from "react";
import PropItem from "./PropItem";
import FontLightbox from "./FontLightbox";
import styles from "./fontCard.module.scss";


class Font extends Component{

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
    console.log(this.props);
    let {family, fontstyle, weight } = this.props;
    return (
      <div>
        <FontLightbox
          showModal={this.state.showLightbox}
          close={this.closeLightbox}
          {...this.props}
        />
        <div className={styles.fontCard}>
          <div
            onClick={this.openLightbox}
            className={styles.header}
            style={{
              fontFamily: family,
              fontStyle: fontstyle,
              fontWeight: weight,
            }}
          >
            Az
          </div>
          <div className={styles.body}>
            <PropItem label="Font" value={family} />
            <PropItem
              label={`Weight ${fontstyle ? '/ Style' : ''}`}
              value={`${weight} ${fontstyle ? `/ ${fontstyle}`: ''}`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Font;