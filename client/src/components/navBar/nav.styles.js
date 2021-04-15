import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav `

background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const NavWrapper = styled.div `
display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
  `;
export const NavMenu = styled.ul `
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  justify-content: end;
  margin-right: 2rem;
  @media screen and (max-width: 960px) {
  display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;

    .nav-menu.active {
    background: #fff;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
    }
  }
`;
export const NavItem = styled.li `

height: 80px;


@media screen and (max-width: 960px) {
 
    position: relative;
  };

 
`;

export const NavLinks = styled(Link)
`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size:25px;
  padding:28px;

&:hover {
  border-bottom: 1px solid blue;
  transition: all 0.2s ease-out;
}

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
    background-color: #fff;
    color: #242424;
    border-radius: 0;
    }
  }
`;