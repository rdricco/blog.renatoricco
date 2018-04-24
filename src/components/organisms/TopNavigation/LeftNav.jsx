import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Flex } from "rebass";
import HomeIcon from "react-icons/lib/io/android-home";
import IosSearch from "react-icons/lib/io/ios-search";
import ThemeSwitch from 'react-theme-switch'

const NavLeft = styled(Link)`
  margin-left: 0px;
  margin-right: 15px;
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
`;

const LeftNav = () => {
  return <Flex>
      <NavLeft role="button" aria-label="home" to="/">
        {/* <HomeIcon size={30} /> */}
        <div>&#60; renato &#62; </div>
      </NavLeft>
      {/* <ThemeSwitch preserveRasters={false} /> */}

      <NavLeft role="button" aria-label="search" to="/search">
        {/* <IosSearch role="button" size={30} /> */}
      </NavLeft>
    </Flex>
};

export default LeftNav;
