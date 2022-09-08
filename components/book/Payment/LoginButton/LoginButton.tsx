import React, { useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import colors from '../../../../colors/colors';
import { useSession, signIn, signOut } from 'next-auth/react';

interface LoginButtonProps {
  daysToBook: Date[];
}

const LoginButton = ({ daysToBook }: LoginButtonProps) => {
  useEffect(() => {}, []);
  const { data: session } = useSession();
  const handleSignInClick = () => {
    localStorage.setItem('lastDaysToBook', JSON.stringify(daysToBook));
    signIn();
  };
  const handleSignOutClick = () => {
    console.log('signing out');
    localStorage.setItem('lastDaysToBook', JSON.stringify([]));
    signOut();
  };
  if (!session) {
    return (
      <Wrapper>
        <ButtonCaption> Step 1 </ButtonCaption>
        <ButtonArea onClick={handleSignInClick}>
          <LogoImage
            src="/Google__G__Logo.svg"
            width={50}
            height={50}
            alt="google logo"
          />
        </ButtonArea>
        <ButtonCaption> sign in </ButtonCaption>
      </Wrapper>
    );
  } else {
    let imgDisplay;
    let firstName = session.user?.name?.split(' ')[0];
    let firstNameDisplay: string = firstName!;

    if (session?.user?.image) {
      imgDisplay = (
        <ProfileImage
          src={session.user.image}
          alt="profile image"
          referrerPolicy="no-referrer"
        />
        // <ProfileMedalion>{firstNameDisplay}</ProfileMedalion>
      );
    } else {
      imgDisplay = <ProfileMedalion> {session.user?.name} </ProfileMedalion>;
    }

    const displayEmail = session.user?.email?.split('@')[0];

    return <></>;
    // return (
    //   <Wrapper>
    //     <ButtonCaption>
    //       {' '}
    //       <CheckContainer> ✓ </CheckContainer>{' '}
    //     </ButtonCaption>
    //     <ButtonAreaInactive onClick={handleSignOutClick}>
    //       {/* <LogoImage
    //         src="/Google__G__Logo.svg"
    //         width={50}
    //         height={50}
    //         alt="google logo"
    //       /> */}
    //       {imgDisplay}
    //     </ButtonAreaInactive>
    //     <ButtonCaption>
    //       {displayEmail}
    //       {/* {session.user?.name?.split(' ')[0].substring(0, 10) || 'nothing'} */}
    //     </ButtonCaption>
    //   </Wrapper>
    // );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
`;

const ButtonArea = styled.button`
  background-color: ${colors.white};
  padding: 10px;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s;
  height: 60px;
`;

const ButtonAreaInactive = styled(ButtonArea)`
  background-color: ${colors.black};
`;

const LogoImage = styled(Image)`
  background-color: inherit;
  @media (hover: hover) and (pointer: fine) {
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
`;

const ProfileMedalion = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  background-color: ${colors.gray_mid};
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  color: ${colors.white};
`;

const ButtonCaption = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  color: ${colors.white};
`;

const CheckContainer = styled(ButtonCaption)`
  color: ${colors.green};
  font-size: 1.5rem;
  font-weight: 800;
`;

const LogInLable = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: inherit;
  color: ${colors.white};
  display: flex;
  justify-content: center;
`;

const LoggedInLabel = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: inherit;
  color: ${colors.blue};
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const LoggedInVerification = styled.div`
  padding-bottom: 20px;
  background-color: inherit;
  color: ${colors.green};
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
export default LoginButton;
