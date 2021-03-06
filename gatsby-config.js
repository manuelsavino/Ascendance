const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Ascendance Studio`,
    description: `Ascendance Studio offers dance classes for all ages in Doral, Florida. Learn ballet, tap, jazz, lyrical and contemporary.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-marketing-platform`,
      options: {
        tagmanager: {
          id: `GTM-MP8FZ5D`,
        },
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ascendance Studio`,
        short_name: `Ascendance`,
        start_url: `/`,
        background_color: `#ea3ba1`,
        theme_color: `#ea3ba1`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto\:200,400,500,600,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `d52tojxe`,
        dataset: `production`,
      },
    },
    `gatsby-plugin-image`,
    "gatsby-transformer-remark",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
