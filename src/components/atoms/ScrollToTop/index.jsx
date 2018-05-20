import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import BackToTop from "react-icons/lib/fa/arrow-circle-up";
import themeRebass from "../../_settings/rebassTheme"
import GoMoveUp from 'react-icons/lib/go/move-up'


class ScrollToTopPage extends Component {
  render() {
    return <ScrollToTop showUnder={this.props.showUnder}>
        <GoMoveUp size={this.props.size} color={this.props.baseColor} />
      </ScrollToTop>
  }
}

export default ScrollToTopPage;
