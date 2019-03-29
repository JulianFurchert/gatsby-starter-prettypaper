// Pages Format:
// [
//   node: {
//     fields: {
//       initalSlug: "/design/1--icons/",
//       slug: "/design/icons/",
//       type: "page",
//       categorie: "design",
//       filename: "icons"
//     }
//     frontmatter: {
//       title: "Icons"
//     },
// ]

import _ from "lodash";

const removeParentNodes = array =>  {
  return array.map( ({ node }) => {
  	let { fields, frontmatter } = node;
    return { ...fields, ...frontmatter };
  });
}

const getAllCategories = pages => {
  let categories = [];
  pages.forEach( page => {
    categories.push(page.categorie);
  });
  return _.uniq( categories );
}

const createMenu = pages => {
  pages = removeParentNodes(pages);
  let categories = getAllCategories(pages);

  let menue = {};
  categories.forEach( categorie => {
    menue[categorie] = pages.filter( page => {
      return page.categorie === categorie;
    })
  });

  return menue;
}

export default createMenu;