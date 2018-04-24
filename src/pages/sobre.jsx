import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Container, Switch } from 'rebass'
import { FadeIn } from 'animate-components'
import { themeMode, themeVariables } from '../data/themeStore'
import { view } from 'react-easy-state'
import ThemeSwitch from 'react-theme-switch'

class AboutPage extends Component {
  render(view) {
    return <Container pt={4} pb={6}>
        <FadeIn>
        </FadeIn>
      </Container>
  }
}

export default AboutPage
