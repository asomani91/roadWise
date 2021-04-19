import React, { useState, useEffect } from "react";
// import { Button } from './Button';
import {
  NavContainer,
  NavItem,
  NavLinks,
  NavWrapper,
  NavMenu,
} from "./nav.styles";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <NavContainer>
      <NavWrapper>
        <NavMenu>
          <NavItem>
            <NavLinks to="Home"> Home </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="Dashboard"> Dashboard </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Login"> Login </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="Signup"> Signup </NavLinks>
          </NavItem>
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
