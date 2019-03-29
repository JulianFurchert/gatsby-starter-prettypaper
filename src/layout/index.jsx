import React, {Component} from "react";
import { StaticQuery, graphql } from "gatsby"
import createMenu from '../utils/createMenu'
import currentCategorieAndPage from '../utils/currentCategorieAndPage'

import Header from "./Header";
import Sidebar from "./Sidebar";
import Page from "./Page";
import Footer from "./Footer";
import Button from "./Button";

import 'normalize.css';
import "../index.scss";
import styles from "./index.module.scss";


const QueryWrapper = ({ location, children }) => {
  return(
    <StaticQuery
     query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: {fields: [fields___initalSlug] order: ASC }
          filter: { fields: { type: {eq: "page"} } },
        ){
          edges{
            node{
              frontmatter{
                title
              }
              fields{
                initalSlug
                slug
                type
                categorie
                name
              }
            }
          }
        }
      }`}
     render={data => (
        <Layout data={data} location={location} >
          {children}
        </Layout>
      )}
    />
  )
}


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      selectedCategorie: '',
      selectedPage: '/',
      navOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);

  }

  componentDidMount(){
    let menu = createMenu(this.props.data.allMarkdownRemark.edges);
    let current = currentCategorieAndPage(this.props.location);
    this.setState({ menu, ...current });
  }

  componentWillReceiveProps(nextProps){
    let current = currentCategorieAndPage(nextProps.location);
    this.setState({ ...current });
  }

  toggleNav(){
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }

  closeNav(){
    this.setState({
      navOpen: false
    });
  }

  render(){
    let {menu, selectedCategorie, selectedPage, navOpen} = this.state;
    return(
      <div className={styles.appContainer}>
        <div className={styles.app}>
          <Header
            name={this.props.data.site.siteMetadata.title}
            menu={menu}
            selectedCategorie={selectedCategorie}
            selectedPage={selectedPage}
          />
          <main className={styles.main}>
            <Sidebar closeNav={this.closeNav} submenu={menu[selectedCategorie]} selectedPage={selectedPage} />
            <Page navOpen={navOpen} selectedPage={selectedPage}>{this.props.children}</Page>
          </main>
          <Footer/>
        </div>
        {this.props.location.pathname !== "/" && <Button handleClick={this.toggleNav} />}
      </div>
    )
  }
}

export default QueryWrapper;