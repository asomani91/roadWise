import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import {NavContainer,NavItem,NavLinks,NavWrapper,NavMenu}from './nav.styles';

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

    window.addEventListener('resize', showButton);

    return (
    <NavContainer>
        <NavWrapper>
            <NavMenu>
                <NavItem>
                    <NavLinks>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks>About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks>Dashboard</NavLinks>
                </NavItem>
            </NavMenu>
        </NavWrapper>
    </NavContainer>);
}

export default Navbar;