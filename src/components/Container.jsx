import React from "react";
import cx from "classnames";
import styles from "./container.module.scss";

const Container = ({grid, gap, children}) => {
  let classNames = cx( styles.container, {
    [styles.small]: grid === "small",
    [styles.large]: grid === "large"
  })
  return (
    <div className={classNames} style={{gridGap: gap}}>
      {children}
    </div>
  )
}

export default Container;