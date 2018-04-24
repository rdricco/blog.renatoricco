import React from 'react'
import { store, view } from 'react-easy-state'
import config from '../../data/SiteConfig'
import Helmet from 'react-helmet'
import { Provider, Container, Box } from 'rebass'
import rebassTheme from '../components/_settings/rebassTheme'
import globalStyles from '../components/_settings/globalStyles'
import NavBar from '../components/organisms/TopNavigation/'
import ScrollToTop from '../components/atoms/ScrollToTop'
import Footer from '../components/organisms/Footer'
import styled from 'styled-components'
import { themeMode, themeVariables } from '../data/themeStore'

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/'
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '')
    let title = ''
    if (currentPath === '') {
      title = 'Home'
    } else if (currentPath === 'tags/') {
      title = 'Tags'
    } else if (currentPath === 'about/') {
      title = 'About'
    } else if (currentPath === 'search/') {
      title = 'Search'
    } else if (currentPath.indexOf('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `Tagged in ${capitalize(tag)}`
    }
    return title
  }

  render(view) {
    const MainBox = styled(Box)`
      min-height: 100vh;
      a,
      a:visited,
      a:active {
        color: inherit;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
        text-decoration-color: "${themeVariables.fontAdditionalColor}";
        background-color: 'red';
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: ${themeVariables.headerFont};
      }`
    const { children } = this.props
    return <Provider theme={rebassTheme} ClassName="FullPage">
        <Helmet>
          <title>{`${config.siteTitle} | ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <MainBox m={0} p={0} bg={'secondaryLightest'} color={themeVariables.fontColor}>
          <NavBar bg={themeVariables.primaryColor} color={themeVariables.fontColor} iconColor={themeVariables.fontAdditionalColor} />

          {children()}

          <Footer bg={themeVariables.primaryColor} color={themeVariables.fontColor} iconColor={themeVariables.fontAdditionalColor} />

          <ScrollToTop showUnder={160} size={30} baseColor={themeVariables.fontColor}/>
        </MainBox>
      </Provider>
  }
}
