import React from 'react';
import themeRebass from "../../_settings/rebassTheme"
import styled from "styled-components";
import { ButtonOutline } from 'rebass'


class ThemedButton extends React.Component {
  render() {
        const CustomButton = styled(ButtonOutline)`
          color: ${this.props.color};
          background-color: ${this.props.bg};
          min-width: 150px;
          a,
          a:visited,
          a:active {
            color: inherit;
          }`
        return <CustomButton ml={this.props.ml} mr={this.props.mr} color={this.props.color} bg={this.props.bg}>
            {this.props.children}
          </CustomButton>;
    }
}

export default ThemedButton;