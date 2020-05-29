module.exports = {
  siteMetadata: {
    title: `Clearspace`,
    description: `Monitor your building for coronavirus`,
    author: `@clearspace`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-plugin-offline`,
  ],
}
