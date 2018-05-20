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
    `gatsby-plugin-lodash`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-accessibilityjs`,
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
    `gatsby-plugin-styled-components`,
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
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false //Optional: Will remove related videos from the end of an embedded YouTube video.
            }
          },
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
    // {
    //   resolve: 'gatsby-source-lastfm',
    //   options: {
    //     api_key: process.env.LASTFM_APIKEY,
    //     username: process.env.LASTFM_USERNAME,
    //   },
    // },
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
        // tagFilterString: '_untagged_',
        tagFilterString: 'shared',
        favouriteFilter: false,
        favouriteFilterValue: 0,
        searchFilter: false,
        searchFilterString: 'These 21 things',
        domainFilter: false,
        domainFilterString: 'buzzfeed.com',
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
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments-demo.talkyard.io'
      }
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLEANALYTICS_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'renato ricco',
        short_name: 'blog_renatoricco',
        start_url: '/',
        background_color: '#fff',
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: 'favicon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allPosts } }) => {
              return allPosts.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: config.siteDescription,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                })
              })
            },
            query: `
            {
              allBlogPostsMarkdown(
                limit: 1000,
                sort: { order: DESC, fields: [date] },
                filter: { isPublished: { ne: false } }
              ) {
                edges {
                  node {
                    title
                    date
                    html
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
          },
        ],
      },
    },
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