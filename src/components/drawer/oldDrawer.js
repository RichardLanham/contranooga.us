import React from "react";

import ClickAwayListener from "@mui/base/ClickAwayListener";
import StrapiPagesDrawer from "../StrapiPagesDrawer";
export default class SlideDrawer extends React.Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <ClickAwayListener>
        <div className={drawerClasses}>
          <div style={{ height: 100 }}></div>
          <StrapiPagesDrawer />
        </div>
      </ClickAwayListener>
    );
  }
}
