module.exports = {
  siteMetadata: {
    title: `Clearspace`,
    description: `Monitor your building for coronavirus`,
    sentence1: `Clearspace lets clients like nursing homes, hotels, stores, and schools monitor their spaces for coronavirus.`,
    sentence2: `You swab door knobs, elevator buttons, and toilet seats, and we tell you if traces of the virus are present.`,
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
