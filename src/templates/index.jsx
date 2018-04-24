import React, { Component } from 'react'
const _ = require('lodash')
const slugify = require('lodash-addons')
import config from '../../data/SiteConfig'
import { themeMode, themeVariables } from '../data/themeStore'
import { view } from 'react-easy-state'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { Flex, Box, Container } from 'rebass'
import { FadeIn } from 'animate-components'
import Button from '../components/atoms/Button/'
import Article from '../components/organisms/Article'
import Banner from '../components/molecules/Banner'
import ChevronLeft from 'react-icons/lib/fa/angle-left'
import ChevronRight from 'react-icons/lib/fa/angle-right'
import SEO from '../components/Utils/SEO'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text} </Link>
  } else {
    return <span>{props.text}</span>
  }
}

export default class BlogPage extends React.Component {
  render(view) {
    const { group, index, first, last, pageCount } = this.props.pathContext
    const previousUrl =
      index - 1 <= 1 ? '' : `${(index - 1).toString()}`
    const nextUrl = `${(index + 1).toString()}`

    return <Box>
        <FadeIn>
          <Banner heading={config.siteTitle} tagline={config.siteTagline} colorFont={themeVariables.fontColor} bg={themeVariables.fontAdditionalColor} />
          <Container pt={4}>
            {group.map(({ node }) => (
              <Article
                key={node.id}
                id={node.id}
                slug={node.slug}
                title={node.title}
                // excerpt={node.childMarkdownRemark.excerpt}
                html={node.html}
                url={node.url}
                date={node.date}
                tags={node.tags}
                bg={themeVariables.primaryColor}
                color={themeVariables.fontAdditionalColor}
                additionalColor={themeVariables.fontAdditionalColor}
                badgeColor={themeVariables.primaryColor}
                badgeBgColor={themeVariables.tagBadgeBgColor}
              />
            ))}
          </Container>
          <Container>
            <Flex pb={6} pt={4}>
              <Button bg={themeVariables.primaryColor} color={themeVariables.fontColor} additionalColor={themeVariables.fontAdditionalColor} mr="auto" ml={0} className="previousPage">
                <ChevronLeft /> <NavLink test={first} url={previousUrl} text="recentes" />
              </Button>

              <Button bg={themeVariables.primaryColor} color={themeVariables.fontColor} additionalColor={themeVariables.fontAdditionalColor} ml="auto" mr={0} className="nextPage">
                <NavLink test={last} url={nextUrl} text="antigos" /> <ChevronRight />
              </Button>
            </Flex>
          </Container>
        </FadeIn>
      </Box>
  }
}
