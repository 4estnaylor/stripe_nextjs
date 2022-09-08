import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import colors from '../../colors/colors';
import { useSession, signIn, signOut } from 'next-auth/react';

const LoginNav = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Wrapper onClick={() => signIn()}>
        <ButtonArea>
          <LogoImage
            src="/Google__G__Logo.svg"
            width={40}
            height={40}
            alt="google logo"
          />
        </ButtonArea>
        {/* <LogInLable>log in</LogInLable> */}
      </Wrapper>
    );
  } else {
    return (
      <Wrapper onClick={() => signOut()}>
        <ButtonArea>
          <ProfileImage
            src={session.user?.image || 'nonya.com'}
            alt="google logo"
          />
        </ButtonArea>
        {/* <LogInLable>log in</LogInLable> */}
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  align-self: flex-start;
  padding-top: 8px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ButtonArea = styled.button`
  background-color: ${colors.white};
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.1s;
  @media (hover: hover) and (pointer: fine) {
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

const LogoImage = styled(Image)`
  background-color: inherit;
`;

const LogInLable = styled.div`
  padding-top: 16px;
  background-color: inherit;
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

export default LoginNav;
