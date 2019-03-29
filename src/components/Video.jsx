import React, { Component } from "react";
import cx from "classnames";
import Caption from "./Caption";
import styles from "./video.module.scss";

class Image extends Component {

  constructor(props){
    super(props);
    this.state = {playing: false};
    this.togglePlay = this.togglePlay.bind(this);
  }

  togglePlay(){
    if(this.state.playing){
      this.refs.video.pause();
      this.setState({playing: false})
    }
    else{
      this.refs.video.play();
      this.setState({playing: true})
    }
  }

  render(){
    let {src, caption, autoPlay} = this.props;
    let videoPlayer = cx( styles.videoPlayer, {
      [styles.isPlaying]: this.state.playing,
      [styles.stopped]: !this.state.playing
    })

    return (
      autoPlay === "true" ? (
        <div className={styles.container}>
          <div className={styles.videoPlayer}>
            <video width="100%" autoPlay loop>
              <source src={src} type="video/mp4" />
            </video>
          </div>
          { caption ? <Caption text={caption}/> : null }
        </div>
      ) : (
        <div className={styles.container}>
          <div onClick={this.togglePlay} className={videoPlayer}>
            <video ref="video" width="100%" loop>
              <source src={src} type="video/mp4" />
            </video>
          </div>
          { caption ? <Caption text={caption}/> : null }
        </div>
      )
    )
  }
}

export default Image;