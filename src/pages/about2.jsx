import React, { Component } from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'

const themes = {
  light: {
    main: '#EFEFEF',
  },
  dark: {
    main: '#666',
  },
}

const DynamicDiv = styled.div`
  background: ${({ theme }) => theme.main};
`

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'React',
      theme: themes['light'],
    }
  }

  handleDark = () => {
    this.setState({ theme: themes['dark'] })
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div>
          <DynamicDiv>{this.state.name}</DynamicDiv>
          <div onClick={this.handleDark}>Change to Dark</div>
        </div>
      </ThemeProvider>
    )
  }
}

