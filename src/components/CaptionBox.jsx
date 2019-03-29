import React from "react";
import Button from "./Button";
import styles from "./captionBox.module.scss";
import nextIcon from "../assets/icons/next-24px.svg";
import prevIcon from "../assets/icons/before-24px.svg";


const CaptionBox = props => {
  let {prev, next, caption} = props;
  return (
    <div className={styles.container}>
      {prev ? <Button onClick={prev} icon={prevIcon} /> : null }
      <div className={styles.textContainer}>
        <div className={styles.text}>{caption}</div>
      </div>
      {next ? <Button onClick={next} icon={nextIcon} /> : null }
    </div>
  )
}

export default CaptionBox;
