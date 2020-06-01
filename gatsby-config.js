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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clearspace`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#38B2AC`, // tailwind teal 800
        display: `minimal-ui`,
        icon: `assets/icon.svg`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
};
