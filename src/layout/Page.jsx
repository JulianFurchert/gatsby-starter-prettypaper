import React, {Component} from "react";
import cx from "classnames";
import styles from "./page.module.scss";
import "./page-table.scss";
import "./page-prism-new.scss";

class Page extends Component {
  render(){
    let classNames = cx(styles.page, {
      [styles.firstPage]: this.props.selectedPage === '/',
      [styles.navOpen]: this.props.navOpen
    });
    return(
      <section className={classNames}>
        <div className={styles.pageContent}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default Page;

