const _ = require('lodash')
const urlSlug = require('url-slug')
const createPaginatedPages = require('gatsby-paginate')
// 
const moment = require('moment')
const format = require('date-fns/format')
// Templates
const path = require('path')
const indexBlogTemplate = path.resolve('src/templates/index.jsx')
const tagTemplate = path.resolve('src/templates/tags.jsx')
const blogPostTemplate = path.resolve('src/templates/post.jsx')

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNode } = boundActionCreators
  // Pocket Articles and GraphCMS Posts will be merged as BlogPosts nodes
  if (node.internal.type === `PocketArticle`) {
    createNode({
      id: `pckt-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: 'PocketBlogPostsMarkdown',
        mediaType: `text/markdown`,
        content: node.excerpt,
        contentDigest: node.internal.contentDigest,
      },
      url: node.url,
      title: node.title,
      html: node.excerpt,
      // slug: _.truncate(_.slugify(node.title)),
      slug: urlSlug(node.title),
      date: format(moment(node.time_added, 'X')),
      category: 'link',
      tags: ['via pocket'],
      isPublished: true,
      excerpt: node.excerpt,
      coverImage: node.image,
      image: node.image,
    })
  }
  
  if (node.internal.type === `VideoPosts`) {
    createNode({
      id: `gcms-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: 'BlogPostsMarkdown',
        mediaType: `text/markdown`,
        content: node.content,
        contentDigest: node.internal.contentDigest,
      },
      html: node.content,
      content: node.content,
      title: node.title,
      slug: node.slug,
      category: node.category,
      tags: node.tags,
      date: format(node.date),
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      isPublished: node.isPublished,
      coverImage: node.coverImage,
      author: 'renato ricco',
      image: null,
      url: null,
    })
  }


  if (node.internal.type === `BandcampPosts`) {
    createNode({
      id: `gcms-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: 'BlogPostsMarkdown',
        mediaType: `text/markdown`,
        content: node.bandcampEmbeddedLink,
        contentDigest: node.internal.contentDigest,
      },
      html: node.bandcampEmbeddedLink,
      title: node.title,
      slug: node.slug,
      category: node.category,
      tags: node.tags,
      date: format(node.date),
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      isPublished: node.isPublished,
      coverImage: node.coverImage,
      author: 'renato ricco',
      image: null,
      url: null,
    })
  }

  if (node.internal.type === `LinkPosts`) {
    createNode({
      id: `gcms-${node.id}`,
      parent: node.id,
      children: [],
      internal: {
        type: 'BlogPostsMarkdown',
        mediaType: `text/markdown`,
        content: node.content,
        contentDigest: node.internal.contentDigest,
      },
      html: node.content,
      content: node.content,
      title: node.title,
      slug: node.slug,
      category: node.category,
      tags: node.tags,
      date: format(node.date),
      createdAt: node.createdAt,
      updatedAt: node.updatedAt,
      isPublished: node.isPublished,
      coverImage: node.coverImage,
      author: 'renato ricco',
      image: null,
      url: node.linkurl,
    })
  }

}



exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        posts: allBlogPostsMarkdown(sort: { fields: [date], order: DESC }, filter: { isPublished: { ne: false } }) {
          edges {
            node {
              id
              isPublished
              date(formatString: "DD/MM/YYYY")
              html
              content
              tags
              title
              slug
              url
              childMarkdownRemark {
                excerpt
                html
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.posts.edges
      if (result.errors) {
        console.log(result.errors)
        return Promise.reject(result.errors)
      }

      // Create Index page for blog posts
      createPaginatedPages({
        edges: posts,
        createPage: createPage,
        pageTemplate: indexBlogTemplate,
        pageLength: 10,
        pathPrefix: '',
      })
      // Create pages for full posts
      posts.forEach(({ node }) => {
        {
          node.slug != '' ? createPage({
                path: node.slug,
                component: blogPostTemplate,
                context: { slug: node.slug },
              }) : null
        }
      })
      // Create the tag list pages
      let tags = []
      // Iterate through each post, putting all found tags into `tags`
      _.each(posts, edge => {
        if (_.get(edge, 'node.tags')) {
          tags = tags.concat(edge.node.tags)
        }
      })
      // Eliminate duplicate tags
      tags = _.uniq(tags)
      // Make tag pages
      tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        })
      })

      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
}
