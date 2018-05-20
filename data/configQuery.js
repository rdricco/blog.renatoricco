module.exports = `
{
  allVideoPosts {
    id
    coverImage {
      id
      fileName
      handle
      width
      height
    }
    title
    slug
    category
    tags
    date
    createdAt
    updatedAt
    isPublished
    content
    videoUrl
  }
  allBandcampPosts {
    id
    coverImage {
      id
      fileName
      handle
      width
      height
    }
    title
    slug
    category
    tags
    date
    createdAt
    updatedAt
    isPublished
    content
    bandcampUrl
    bandcampEmbeddedLink
  }
    allLinkPosts {
      id
      coverImage {
        id
        fileName
        handle
        width
        height
      }
      title
      slug
      category
      tags
      date
      createdAt
      updatedAt
      isPublished
      content
      linkurl
    }
    allBlogPosts {
      id
      coverImage {
        id
        fileName
        handle
        width
        height
      }
      title
      slug
      category
      tags
      date
      createdAt
      updatedAt
      isPublished
      content
    }
}

`
