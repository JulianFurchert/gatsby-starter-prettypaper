const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `book` });
    let array = [];

    slug.split('/').forEach( e => {
      if (e){
        //remove the number of the filename
        var i = e.indexOf("--");
        var withOutNumber = i != -1 ? e.substr(i + 2) : e;
        array.push(withOutNumber);
      }
    });

    let newSlug = "/" + array.join("/") + "/";
    let filename = "";
    let type = "";
    let categorie = "";

    if(slug === "/"){
      filename = "homepage";
      type = "homepage";
      newSlug = "/";
    } else {
      filename = array[array.length-1];
      categorie = array[0];
      type = "page"
    }

    createNodeField({
      node,
      name: `slug`,
      value: newSlug,
    });
    createNodeField({
      node,
      name: `initalSlug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `type`,
      value: type,
    });
    createNodeField({
      node,
      name: `categorie`,
      value: categorie,
    });
    createNodeField({
      node,
      name: `name`,
      value: filename,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/docs.jsx`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
};