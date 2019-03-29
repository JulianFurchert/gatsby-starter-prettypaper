import React from "react";
import PropItem from "./PropItem";
import styles from "./colorSidebar.module.scss";


const contrastInformation = "4.5 is the minimum contrast ratios that the WCAG 2.0 specifies for text and background colors according to their AA level"

const ContrastField = props => {
  return(
    <div className={styles.contrastField}>
      <div className={styles.contrastFieldHeader} style={{backgroundColor: props.background}} >
        <div className={styles.contrastFieldLetter} style={{color: props.color}}>A</div>
      </div>
      <div className={styles.contrastFieldBody} >
        <div className={styles.contrastBadge}>
          <div className={styles.contrastBadgeValue}>{parseFloat(props.value).toFixed(1)}</div>
        </div>
      </div>
    </div>
  )
}

const ColorSidebar = props => {
  let {hex,rgb, name, cw, cb, usage} = props;
  return (
    <div className={styles.container}>
      <div className={styles.group}>
        <PropItem row color="white" label="name"  value={name} />
        <PropItem row color="white" label="hex"  value={hex} copyValue tooltip="right" />
        <PropItem row color="white" label="rgb"  value={rgb} copyValue tooltip="right" />
      </div>
      {usage && (
        <div className={styles.group}>
          <PropItem row color="white" label="usage"  value={usage} />
        </div>
      )}
      <div className={styles.contrastGroup}>
        <ContrastField value={cw} color={hex} background="white"/>
        <ContrastField value={cw} color="white" background={hex}/>
        <ContrastField value={cb} color="black" background={hex}/>
      </div>
      <div className={styles.group}>
        <div className={styles.caption}>
          {contrastInformation}
        </div>
      </div>
    </div>
  )
}

export default ColorSidebar;