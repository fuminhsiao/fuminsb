import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logoImage from '../assets/images/nav/f.png';

const Nav = styled.nav`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 1em 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 120px;
`;

const Logo = styled.img`
  height: 120px;
  margin-right: auto;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  align-items: center;
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 0;
  &:hover {
    color: #a2d5f2;
  }
`;

const Underline = styled(motion.div)`
  position: absolute;
  bottom: -4px;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #a2d5f2;
  border-radius: 4px;
`;

function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        {/* Logo aligned to the left, linking to the homepage */}
        <Link to="/">
          <Logo src={logoImage} alt="Logo" />
        </Link>
        
        {/* Navigation items aligned to the right */}
        <NavList>
          {[
            { path: '/', label: '首頁' },
            { path: '/resorts', label: '雪場' },
            { path: '/calculator', label: '雪票試算' },
            { path: '/courses', label: '課程報名' },
            { path: '/about', label: '關於我' },
          ].map(({ path, label }) => (
            <NavItem key={path}>
              <StyledLink to={path}>
                {label}
                {location.pathname === path && (
                  <Underline
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </StyledLink>
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
