module.exports = {
  siteMetadata: {
    title: 'KNA - Illustrations',
    description:
      'Hi KNA here! I am a Freelance Artist who is currently studying Video Game Designand Animation I am heavily influenced by anime and manga where my art style has evolved from. I tend to focus more on character design and illustration but I also have experience with 3D modeling and 3D animations',
    language: 'en',
    author: 'Kheena Artcellist',
    email: 'artcellist25@gmail.com',
    keywords:
      'art,artcellist,kheena,kna,illustrations,kna-illustrations,kna illustrations,illustration,knaillustrations,concept art,portfolio,concept,about,artist,animator,designer,design,netlify,website,anime,drawings,illust,Hi KNA here! I am a Freelance Artist who is currently studying Video Game Designand Animation I am heavily influenced by anime and manga where my art style has evolved from. I tend to focus more on character design and illustration but I also have experience with 3D modeling and 3D animations,kheena,marie,galagala,kheena marie,kheena marie galagala,pixiv,artstation,deviantart,images,pictures,photos',
    siteUrl: 'https://kna-illustrations.netlify.com/',
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
        // icon: 'src/assets/scss/images/favicon.ico',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-yaml',
    'gatsby-plugin-remove-serviceworker',
    '@rhysforyou/gatsby-plugin-react-helmet-async',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-142146234-1',
      },
    },
  ],
};
