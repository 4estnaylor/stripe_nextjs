import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <LinkLayer href="/">
      <Wrapper>
        Trig Tutor
        <Image
          alt="logo"
          src="/trigTutorLogo.svg"
          width={50}
          height={50}
        />{' '}
      </Wrapper>
    </LinkLayer>
  );
};

const LinkLayer = styled(Link)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  font-size: 2rem;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default Logo;
