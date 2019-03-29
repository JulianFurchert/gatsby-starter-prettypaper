import React from "react";
import PropItem from "./PropItem";
import Button from "./Button";
import styles from "./fontBottombar.module.scss";


const FontBottombar = props => {
  let {family, weight, fontstyle, url} = props;
  console.log(url);
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <PropItem row color="white" label="family" value={family} />
      </div>
      <div className={styles.group}>
        <PropItem row color="white" label="weight"  value={weight} />
      </div>
      {fontstyle && (
        <div className={styles.group}>
          <PropItem row color="white" label="style"  value={fontstyle} />
        </div>
      )}
      {url && (
        <div className={styles.group}>
          <Button download={url} label="Download" black />
        </div>
      )}
    </div>
  )
}

export default FontBottombar;
