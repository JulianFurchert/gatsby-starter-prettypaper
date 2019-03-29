import React, {Component} from "react";
import Link from "gatsby-link";
import cx from "classnames";
import styles from "./sidebar.module.scss"


class Sidebar extends Component {

  renderListItems(submenu){
    return submenu.map( item  => {
      let classNames = cx(styles.link, {
        [styles.linkActive]: item.name === this.props.selectedPage
      });
      return (
        <li className={styles.listItem} key={item.slug}>
          <Link className={classNames} onClick={this.props.closeNav} to={item.slug}>
            {item.title}
          </Link>
        </li>
      )
    });
  }

  render(){
    let classNames = cx(styles.sidebar, {
      [styles.firstPage]: this.props.selectedPage === '/'
    });
    return(
      <div className={classNames}>
        <div ref="sidebarContent" className={styles.sidebarContent}>
          <nav className={styles.sideNav}>
            <ul>
              {this.props.submenu ? this.renderListItems(this.props.submenu) : null}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Sidebar;