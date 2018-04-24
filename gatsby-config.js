require('dotenv').config()
const _ = require('lodash')
///
const config = require('./data/SiteConfig')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
///
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
    author: config.userName,
    description: config.siteDescription,
    siteUrl: config.siteUrl + pathPrefix,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/logos/logo.png`,
      author: config.userName,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-react-next',
    'gatsby-plugin-inoreader',
    `gatsby-plugin-lodash`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    // `gatsby-plugin-accessibilityjs`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
        viewBox: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          'Cabin',
          'Asap',
          `Roboto`,
          'Roboto Mono',
          'Roboto Slab',
          'Anonymous Pro',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    // `gatsby-plugin-styled-components`,
    // 'gatsby-plugin-material-ui',
    'gatsby-plugin-sharp',
    `gatsby-transformer-screenshot`,
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-emoji`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-widows`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_self',
              rel: 'nofollow',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 768,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/pages',
      },
    },
    {
      resolve: 'gatsby-source-lastfm',
      options: {
        api_key: process.env.LASTFM_APIKEY,
        username: process.env.LASTFM_USERNAME,
      },
    },
    {
      resolve: `gatsby-source-pocket`,
      options: {
        consumerKey: process.env.POCKET_CONSUMER_KEY,
        accessToken: process.env.POCKET_ACCESS_TOKEN,
        weeksOfHistory: 500,
        apiMaxRecordsToReturn: 3000,
        getCurrentWeekOnly: `n`,
        stateFilterString: 'all',
        tagFilter: true,
        tagFilterString: 'shared',
        // tagFilterString: '_untagged_',
        favouriteFilter: false,
        favouriteFilterValue: 0,
        searchFilter: false,
        searchFilterString: 'These 21 things',
        domainFilter: false,
        domainFilterString: 'buzzfeed.com',
      },
    },
    {
      resolve: `gatsby-source-faker`,
      // derive schema from faker's options
      options: {
        schema: {
          name: ['firstName', 'lastName'],
          count: 3, // how many fake objects you need
          type: 'NameData', // Name of the graphql query node
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACEID,
    //     accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        query: require('./data/configQuery'),
      },
    },
    // {
    //   resolve: 'gatsby-source-apiserver',
    //   options: {
    //     // Type prefix of entities from server
    //     typePrefix: 'internal__',

    //     // The url, this should be the endpoint you are attempting to pull data from
    //     url: `https://www.inoreader.com/reader/api/0`,

    //     method: 'get',

    //     headers: {
    //       'Content-Type': 'application/json'
    //     },

    //     // Request body
    //     data: {

    //     },

    //     // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
    //     // using this name. i.e. posts.json
    //     name: `inoreader`,

    //     // Nested level of entities in repsonse object, example: `data.posts`
    //     entityLevel: `data.inoreader`,

    //     // Simple authentication, if optional, set it null
    //     auth: {
    //       username: 'myusername',
    //       password: 'supersecretpassword1234'
    //     },

    //     // Optional payload key name if your api returns your payload in a different key
    //     // Default will use the full response from the http request of the url
    //     // payloadKey: `body`,

    //     // Optionally save the JSON data to a file locally
    //     // Default is false
    //     localSave: true,

    //     //  Required folder path where the data should be saved if using localSave option
    //     //  This folder must already exist
    //     path: `${__dirname}/src/data/auth/`,

    //     // Optionally include some output when building
    //     // Default is false
    //     verboseOutput: true, // For debugging purposes

    //     // Optionally skip creating nodes in graphQL.  Use this if you only want
    //     // The data to be saved locally
    //     // Default is false
    //     skipCreateNode: false, // skip import to graphQL, only use if localSave is all you want
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_ID,
    //     apiKey: process.env.ALGOLIA_KEY,
    //     indexName: process.env.ALGOLIA_INDEX,
    //     queries,
    //     chunkSize: 1000,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GOOGLEANALYTICS_ID,
    //     head: false,
    //     anonymize: true,
    //     respectDNT: true,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-hotjar`,
    //   options: {
    //     id: process.env.HOTJAR_ID,
    //     sv: process.env.HOTJAR_SNIPPET_VERSION,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-facebook-analytics`,
    //   options: {
    //     appId: process.env.FACEBOOKANALYTICS_ID,
    //     includeInDevelopment: false,
    //     debug: false,
    //     language: 'en_US',
    //   },
    // },
    'gatsby-plugin-sitemap',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Iandi Starter',
    //     short_name: 'Iandi Starter',
    //     start_url: '/Iandi-Gatsby-Starter/',
    //     background_color: '#fff',
    //     theme_color: config.themeColor,
    //     display: 'minimal-ui',
    //     icons: [
    //       {
    //         src: 'favicon.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    // },
    // 'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //     {
    //       site {
    //         siteMetadata {
    //           title
    //           description
    //           siteUrl
    //           site_url: siteUrl
    //         }
    //       }
    //     }
    //   `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allPosts } }) => {
    //           return allPosts.edges.map(edge => {
    //             return Object.assign({}, edge.node, {
    //               description: config.siteDescription,
    //               url: site.siteMetadata.siteUrl + edge.node.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.slug,
    //             })
    //           })
    //         },
    //         query: `
    //         {
    //           allPosts(
    //             limit: 1000,
    //             sort: { order: DESC, fields: [date] },
    //             filter: { isPublished: { ne: false } }
    //           ) {
    //             edges {
    //               node {
    //                 title
    //                 date
    //                 html
    //               }
    //             }
    //           }
    //         }
    //       `,
    //         output: '/rss.xml',
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-netlify-cms`,
    //   options: {
    //     // One convention is to place your Netlify CMS customization code in a
    //     // `src/cms` directory.
    //     modulePath: `${__dirname}/src/cms/cms.js`,
    //   },
    // },
    // `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
}