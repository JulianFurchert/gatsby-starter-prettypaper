import React, { Component } from "react";
import styles from "./textstyle.module.scss";

class Type extends Component{
  render(){
    let {name, family, weight, size, fontstyle, lineheight, letterspacing} = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.type}>
          <div
            className={styles.name}
            style={{
              fontFamily: family,
              fontWeight: weight,
              fontSize: size,
              fontStyle: fontstyle,
              lineHeight: lineheight,
              letterSpacing: letterspacing
            }}
          >
            {name}
          </div>
          <ul className={styles.information}>
            <li className={styles.listItem}>{`${family} ${weight} ${fontstyle ? fontstyle : ''}`}</li>
            <li className={styles.listItem}>{size}</li>
            {/* { lineheight && <li className={styles.listItem}>{lineheight}</li> }
            { lineheight && <li className={styles.listItem}>{letterspacing}</li> } */}
          </ul>
        </div>
      </div>
    )
  }
}

export default Type;