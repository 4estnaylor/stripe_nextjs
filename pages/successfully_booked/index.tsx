import React, { useState, useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import { useRouter } from 'next/router';
import ListItem2 from '../../components/book2/PaymentArea2/SelectedItemsList2/ListItem2/ListItem2';
import styled from 'styled-components';
import colors from '../../colors/colors';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Index = () => {
  const { query } = useRouter();
  const session = useSession().data;
  const sessionLink = 'https://meet.google.com/ywm-gzio-nsv';

  const [orders, setOrders] = useState<Date[]>([]);
  const [copyTagOn, setCopyTagOn] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(sessionLink);
    setCopyTagOn(true);
    setTimeout(() => {
      setCopyTagOn(false);
    }, 1200);
  };

  const handleGotItButtonClick = () => {
    window.location.href = 'http://localhost:3000/book';
  };

  const getOrderInfo = async () => {
    if (query.orderInfo) {
      const orderInfo = query.orderInfo as string;
      const sessionArrayString = orderInfo.split('--')[1];
      const sessionArrayOfStrings: string[] = await JSON.parse(
        sessionArrayString
      );
      const sessionArray = sessionArrayOfStrings.map(
        (string) => new Date(string)
      );
      console.log('session array', sessionArray);
      setOrders(sessionArray);
    } else return [];
  };

  useEffect(() => {
    getOrderInfo();
  }, [query]);

  const displayBookedSessions = orders.map((order) => {
    const fullTimeString = order.toLocaleTimeString('en-US', {
      hour: 'numeric',
    });
    const [digit, ampm] = fullTimeString.split(' ');
    return (
      <Item key={order.getTime()}>
        <Tile>
          <Digit>{digit}</Digit>
          <AMPM>{ampm}</AMPM>
        </Tile>
        {order.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </Item>
    );
  });

  //
  //
  // const orderInfoString = orderInfo.substring(2, orderInfo.length);
  // const orderedSessions = JSON.parse(orderInfoString);
  return (
    <Wrapper>
      <Gap30 />
      <SuccessCheck>✓</SuccessCheck>
      <Gap30 />
      <CongratsMessage>Success!</CongratsMessage>
      <h3>booked sessions</h3>
      <BookedSessionsDisplay>{displayBookedSessions}</BookedSessionsDisplay>
      <MyForm action="" method="POST">
        {/* <label htmlFor="math_journey">
          {' '}
          Where are you in you math journey?
        </label>
        <Mytextarea
          id="math_journey"
          name="math_journey"
          rows={3}
          placeholder="I am an 11th grade student studying precalculus  "
          maxLength={250}
          required
        ></Mytextarea>
        <label htmlFor="math_goals"> Where are your math goals?</label>
        <Mytextarea
          id="math_goals"
          name="math_goals"
          rows={3}
          placeholder="I want to crush my next trig identity test...  "
          maxLength={250}
          required
        ></Mytextarea> 
        <label htmlFor="preferredName"> Preferred Name</label> 
        <input
          type="text"
          id="preferredName"
          name="preferredName"
          placeholder="Dr. Count Chocula VII, Esquire"
          required
        /> */}
        {/* <input type="submit" /> */}
      </MyForm>
      <ImportantInfo>
        <div>
          <Htitle>link to your sessions: </Htitle>
          <CodeButtonContainer onClick={handleCopyButtonClick}>
            <MeetCode id="meetCode" value={sessionLink}></MeetCode>{' '}
            <CopyButton>
              <CopyPageOne />
              <CopyPageTwo />
            </CopyButton>
            <CopiedTag copyTagOn={copyTagOn}>
              copied <CopiedTagTriangle />
            </CopiedTag>
          </CodeButtonContainer>
        </div>
      </ImportantInfo>
      <Gap30 />
      <Instructions>
        20 minutes before each session, a reminder email will be sent to: <br />
        <span style={{ color: colors.blue, fontWeight: 600 }}>
          {session?.user?.email}{' '}
        </span>{' '}
        <br /> <br />
        Email any questions to: <br />
        <span style={{ color: colors.blue, fontWeight: 600 }}>
          forrest@trig-tutor.com
        </span>
        <br />
        <br />
        You can review and edit bookings from{' '}
        <MyLink href="/">
          <span
            style={{
              color: colors.purpleBlue,
              fontWeight: 600,
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            {' '}
            your profile:{' '}
          </span>
        </MyLink>
        <div>
          <GoogleAccountWrapper>
            <AccountImage alt="profile image" src={session?.user?.image!} />
            <div>{session?.user?.name}</div>
          </GoogleAccountWrapper>
        </div>
      </Instructions>
      <Gap30 />
      <GotIt onClick={handleGotItButtonClick}> Got It</GotIt>
    </Wrapper>
  );
};

const GotIt = styled.button`
  height: 50px;
  width: 100%;
  background-color: ${colors.red};
  border-radius: 8px;
  border: none;
  color: ${colors.white};
  font-size: 1.5rem;
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

const MyLink = styled(Link)`
  color: ${colors.purpleBlue};
  font-weight: 600;
  background-color: red;
`;

const Instructions = styled.div`
  font-size: 1.25rem;
`;

const CopiedTag = styled.div<{ copyTagOn: boolean }>`
  content: 'copied';
  background-color: ${(p) => (p.copyTagOn ? colors.red : colors.white)};
  color: ${colors.white};
  font-size: 1rem;
  padding: 8px;
  position: absolute;
  border-radius: 20px;
  top: -45px;
  right: 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const CopiedTagTriangle = styled.div`
  height: 8px;
  width: 8px;
  background-color: inherit;
  position: absolute;
  bottom: -3px;
  left: calc(50% - 4px);
  transform: rotate(45deg);
`;

const Gap30 = styled.div`
  height: 32px;
`;

const CongratsMessage = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SuccessCheck = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 4px solid ${colors.red}; */
  background-color: ${colors.red};
  background-size: 600%;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  margin: auto;
  color: ${colors.white};

  /* @keyframes slideGradient {
    from {
      background-position: left;
    }
    to {
      background-position: right;
    }
  } */

  /* animation: slideGradient 8s; */
  /* animation-fill-mode: forwards; */
`;

const CodeButtonContainer = styled.div`
  display: flex;
  position: relative;
`;

const Htitle = styled.div`
  font-weight: 800;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const CssCopyIcon = styled.div`
  /* background-color: blue; */
  height: 30px;
  width: 30px;
  position: relative;
`;

const CopyPageOne = styled.div`
  position: absolute;
  border: 2px solid ${colors.white};
  background-color: ${colors.red};
  /* background-color: ${'hsla(340, 100%, 50%, 0.3)'}; */
  height: 20px;
  width: 17px;
  border-radius: 4px;
  top: 5px;
  left: 6px;
`;
const CopyPageTwo = styled.div`
  position: absolute;
  border: 2px solid ${colors.white};
  background-color: ${colors.red};
  /* background-color: ${'hsla(200, 100%, 50%, 0.3)'}; */
  height: 20px;
  width: 17px;
  border-radius: 4px;
  bottom: 5px;
  right: 6px;
`;

const Wrapper = styled.div`
  width: 350px;
  margin: auto;
  padding-left: 8px;
  padding-right: 8px;
  color: ${colors.black};
`;

const GoogleAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding-left: 8px;
  gap: 8px;
`;

const AccountImage = styled.img`
  border-radius: 50%;
  width: 60px;
`;

const MeetCode = styled.input`
  border: 2px solid ${colors.gray_mid};
  color: ${colors.black};
  padding: 4px;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
  height: 40px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  border-right: none;
`;

const CopyButton = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  position: relative;
  background: transparent;
  border: none;
  border: 2px solid ${colors.gray_mid};
  border-left: none;
  border-radius: 0 8px 8px 0;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
      background-color: ${colors.red};
      border: 2px solid ${colors.red};

      ${CopyPageOne} {
        background-color: ${colors.white};
        border: 2px solid ${colors.red};
      }
      ${CopyPageTwo} {
        background-color: ${colors.white};
        border: 2px solid ${colors.red};
      }
    }
  }

  cursor: pointer;
`;

const MeetCodeButton = styled.button``;

const ImportantInfo = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    font-weight: 800;
    padding-top: 16px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  gap: 10px;
`;
const Tile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.red};
  width: 45px;
  height: 45px;
  border-radius: 8px;
  color: ${colors.white};
`;
const Digit = styled.div`
  font-size: 1.25rem;
`;
const AMPM = styled.div`
  font-size: 0.75rem;
`;

const MyForm = styled.form`
  display: flex;
  flex-direction: column;

  & input {
    border: 2px solid ${colors.black};
    border-radius: 4px;
    padding: 8px;
  }

  & textarea {
    border: 2px solid ${colors.black};
    border-radius: 4px;
    padding: 8px;
  }

  & label {
    font-weight: 800;
    padding-top: 16px;
    padding-bottom: 8px;
  }
`;

const Mytextarea = styled.textarea`
  font-size: 1rem;
`;

const NoteInput = styled.input``;

const BookedSessionsDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default Index;
