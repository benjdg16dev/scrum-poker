import React from "react";
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import ENLang from "../../../languages/en.language";

import "./_styles.scss";

const Header = () => {
  return (
    <div className="sp-header">
      <div className="sp-header-toolbar">
        <div className="sp-header-left">
          <div className="sp-header-title">
            <h1>{ENLang.TITLE}</h1>
          </div>
          <div className="sp-header-links">
            <a href="/">{ENLang.HOME}</a>
            <a href="/">{ENLang.GUIDE}</a>
            <a href="/">{ENLang.SESSIONS}</a>
          </div>
        </div>
        <div className="sp-header-right">
          <div className="sp-header-icons">
          <IconButton
              aria-label="about"
              // aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <InfoIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;