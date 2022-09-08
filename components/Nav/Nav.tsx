import React from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';
import Links from '../Links/Links';
import LogIn from '../LogInNav/LoginNav';
import Logo from '../Logo/Logo';
import breakpoints from '../../breakpoints/breakpoints';
import LoginNav from '../LogInNav/LoginNav';

const Nav = () => {
  return (
    <Wrapper>
      <LogoAndLinksWrapper>
        <Logo />
        <Links />
      </LogoAndLinksWrapper>
      <LoginNav />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: baseline;
  min-height: 100px;
  height: fit-content;
  color: ${colors.black};
  border-bottom: 2px solid;
  background-color: ${colors.white};
  font-size: 1.5rem;
  padding: 16px;
`;

const LogoAndLinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
  align-items: baseline;
  flex-wrap: wrap;
`;

export default Nav;
