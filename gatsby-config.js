module.exports = {
  siteMetadata: {
    title: 'KNA - Artcellist',
    description: 'Portfolio website of KNA Artcellist',
    language: 'en',
    email: 'artcellist25@gmail.com',
    siteFacebookURL: 'https://www.facebook.com/kheenamarie',
    siteInstagramURL: 'https://www.instagram.com/kna_illustrations/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        //icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-yaml',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     /* eslint-disable @typescript-eslint/camelcase */
    //     name: 'Schönherz Design Stúdió',
    //     short_name: 'schdesign',
    //     start_url: '/',
    //     background_color: '#3d3d3d',
    //     theme_color: '#f8485e',
    //     display: 'standalone',
    //     icon: 'src/assets/favicon.png',
    //     legacy: true,
    //     /* eslint-enable */
    //   },
    // },
    'gatsby-plugin-remove-serviceworker',
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    // {
    //   resolve: 'gatsby-source-apiserver',
    //   options: {
    //     // Type prefix of entities from server
    //     typePrefix: 'internal__',

    //     // The url, this should be the endpoint you are attempting to pull data from
    //     url: `https://595484564371796:sTxqyXhhRMAhnxxFGsf0zIvbO8c@api.cloudinary.com/v1_1/dhfgh6lqu/resources/image/`,

    //     method: 'get',

    //     headers: {
    //       'Content-Type': 'application/json',
    //     },

    //     data: {},

    //     name: `resources`,

    //     entityLevel: `resources`,

    //     localSave: false,

    //     path: `${__dirname}/src/data/`,

    //     verboseOutput: true,

    //     skipCreateNode: false,
    //   },
    // },
  ],
};
