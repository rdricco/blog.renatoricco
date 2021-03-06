import React, { Component } from 'react'
import styled from 'styled-components'
import GLink from 'gatsby-link'
import { Box, Row, Small, Heading, Text, Card, Link } from 'rebass'
import PostTags from '../../Utils/PostTags/'
import LinkIcon from 'react-icons/lib/fa/chain'
import rebassTheme from '../../_settings/rebassTheme'

const CardArticle = styled(Card)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.2, 0.2, 1);
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`

class Article extends React.Component {
  render(view) {
    return (
      <CardArticle
        my={3}
        p={4}
        bg={this.props.bg}
        key={this.props.id}
        className="blogPost"
      >
        <Box>
          <Row mx={0} mb={1} className="postTitle">
            <Heading>
              <GLink to={this.props.slug} className="postURL">
                {this.props.title}
              </GLink>
            </Heading>
          </Row>
          <Row mx={0} mb={4} className="postDate">
            <Small>Postado em {this.props.date}</Small>
          </Row>
        </Box>

        <Box mx={0} className="postContent">
          {this.props.html != null ? (
            <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
          ) : null}
        </Box>

        {this.props.excerpt != null ? (
          <Box mb={4}>
            <Text mb={2}>{this.props.excerpt}</Text>
            <Small>
              <GLink to={this.props.slug} className="postURL">
                Veja Mais
              </GLink>
            </Small>
          </Box>
        ) : null}

        {this.props.url != null ? (
          <Box color="tealdarker" mb={2}>
            <Text color={'black'}>Link:</Text>
            <Link href={this.props.url} className="postURL">
              <Text color={'black'}>{this.props.url}</Text>
            </Link>
          </Box>
        ) : null}

        <Row mx={0} mb={1} mt={4} className="postTags">
          <PostTags
            tags={this.props.tags}
            badgeBgColor={this.props.badgeBgColor}
            badgeColor={this.props.badgeColor}
          />
        </Row>
      </CardArticle>
    )
  }
}

export default Article
