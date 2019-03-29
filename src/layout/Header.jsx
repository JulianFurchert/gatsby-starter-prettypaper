import React from "react";
import Link from "gatsby-link";
import cx from "classnames";
import styles from "./header.module.scss";


const renderNav = (menu, selectedCategorie, closeNav) => {
  return Object.keys(menu).map( categorie => {
    let slug = menu[categorie][0].slug;

    let linkClass = cx(styles.link, {
      [styles.linkActive] : categorie === selectedCategorie
    });

    let itemClass = cx(styles.listItem, {
      [styles.itemClassActive] : categorie === selectedCategorie
    });

    return (
      <li key={slug} className={itemClass}>
        <Link onClick={closeNav} className={linkClass} to={slug}>
          {categorie}
        </Link>
      </li>
    )
  });
}

const Header = props => {
  let classNames = cx(styles.header, {
    [styles.firstPage]: props.selectedPage === '/'
  });

  return(
    <header className={classNames}>
      <Link className={styles.logo} to="/">
        {props.name}
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          { renderNav(props.menu, props.selectedCategorie, props.closeNav) }
        </ul>
      </nav>
    </header>
  )
}

export default Header;