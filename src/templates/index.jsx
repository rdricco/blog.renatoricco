import React, { Component } from 'react'
const _ = require('lodash')
const slugify = require('lodash-addons')
import { themeMode, themeVariables } from '../data/themeStore'
import { view } from 'react-easy-state'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from "styled-components";
import { Flex, Box, Container, ButtonOutline } from 'rebass'
import { FadeIn } from 'animate-components'
import Card from '../components/organisms/Card'
import Post from '../components/organisms/Post'
import Banner from '../components/molecules/Banner'

export default class BlogPage extends React.Component {
  render(view) {

    const CustomButton = styled(ButtonOutline) `
      color: ${this.props.color};
      background-color: ${this.props.bg};
      min-width: 150px;
      a,
      a:visited,
      a:active {
        color: inherit;
      }`

    const { group, index, first, last, pageCount } = this.props.pathContext
    
    const previousUrl =
      index - 1 <= 1 ? '' : `${(index - 1).toString()}`
    
    const nextUrl = `${(index + 1).toString()}`
    
    const NavLink = props => {
      if (!props.test) {
        return <Link to={props.url}>
          <CustomButton bg={themeVariables.primaryColor} color={themeVariables.fontColor} additionalColor={themeVariables.fontAdditionalColor} ml="auto" mr={0} className="nextPage">
          {props.text}
        </CustomButton>
        </Link>
      } else {
        return <CustomButton bg={themeVariables.primaryColor} color={themeVariables.fontColor} additionalColor={themeVariables.fontAdditionalColor} ml="auto" mr={0} className="nextPage">
            {props.text}
          </CustomButton>
      }
    }

    return <Box>
        <FadeIn>
          <Banner //  heading={config.siteTitle}
            //  tagline={config.siteTagline}
            //  colorFont={themeVariables.fontColor}
            bgImage="header.png" />

          <Container pt={4}>
            {group.map(({ node }) => (
              <Post
                key={node.id}
                id={node.id}
                slug={node.slug}
                title={node.title}
                // excerpt={node.childMarkdownRemark.excerpt}
                html={node.childMarkdownRemark.html}
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
              <Box mr={'auto'}>
                <NavLink test={first} url={previousUrl} text="recentes" />
              </Box>
              <Box ml={'auto'}>
                <NavLink test={last} url={nextUrl} text="antigos" />
              </Box>
            </Flex>
          </Container>
        </FadeIn>
      </Box>
  }
}
