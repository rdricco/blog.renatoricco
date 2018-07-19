import React from 'react'
import config from '../../data/SiteConfig'
import { themeMode, themeVariables } from '../data/themeStore'
import { view } from 'react-easy-state'
import { FadeIn } from 'animate-components'
import Article from '../components/organisms/Article'
import Card from '../components/organisms/Card'
import { Container, Box, Banner } from 'rebass'


export default class PostTemplate extends React.Component {
  render(view) {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.blogPostsMarkdown
    const post = postNode

    return <Box key={post.id} pb={6}>
        <FadeIn>
          <Container pt={4}>
            <Card 
              slug={post.slug} 
              title={post.title} 
              date={post.date} 
              tags={post.tags} 
              url={post.url}
              html={post.childMarkdownRemark.html} 
              bg={themeVariables.primaryColor} 
              color={themeVariables.fontColor} 
              additionalColor={themeVariables.fontAdditionalColor} 
              badgeColor={themeVariables.primaryColor} 
              badgeBgColor={themeVariables.tagBadgeBgColor} 
            />
          </Container>
        </FadeIn>
      </Box>
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    blogPostsMarkdown(slug: { eq: $slug }) {
      id
      slug
      title
      date(formatString: "DD/MM/YYYY")
      tags
      category
      url
      html
      childMarkdownRemark {
        html
      }
    }
  }
`
