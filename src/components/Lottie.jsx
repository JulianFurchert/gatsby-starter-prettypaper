import React, {Component} from 'react';
import lottie from "lottie-web";
import Caption from "./Caption";

import styles from "./Lottie.module.scss";

 class Lottie extends Component  {

  constructor(props){
    super(props);
    this.element = React.createRef();
  }

  componentDidMount(){
    this.anim = lottie.loadAnimation({
      container: this.element.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.props.src
    });
  }

  render(){
    return(
      <div className={styles.lottieContaier}>
        <div ref={this.element} className={styles.lottie} />
        {this.props.caption && <Caption text={this.props.caption}/>}
      </div>
    )
  }
}

export default Lottie;