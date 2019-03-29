module.exports = {
  siteMetadata: {
    title: `Pretty Paper`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
          component: require.resolve(`./src/layout/index.jsx`)
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-component",
          "gatsby-remark-prettypaper",
          "gatsby-remark-prismjs"
        ]
      }
    }
  ],
};