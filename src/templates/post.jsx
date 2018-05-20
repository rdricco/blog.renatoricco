import React from 'react'
import config from '../../data/SiteConfig'
import { themeMode, themeVariables } from '../data/themeStore'
import { view } from 'react-easy-state'
import { FadeIn } from 'animate-components'
import Article from '../components/organisms/Article'
import { Container, Box, Banner } from 'rebass'


export default class PostTemplate extends React.Component {
  render(view) {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.blogPostsMarkdown
    const post = postNode

    return <Box key={post.id} pb={6}>
        <FadeIn>
          <Container pt={4}>
            <Article slug={post.slug} title={post.title} date={post.date} tags={post.tags} html={post.childMarkdownRemark.html} bg={themeVariables.primaryColor} color={themeVariables.fontColor} additionalColor={themeVariables.fontAdditionalColor} badgeColor={themeVariables.primaryColor} badgeBgColor={themeVariables.tagBadgeBgColor} />
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
      html
      childMarkdownRemark {
        html
      }
    }
  }
`
