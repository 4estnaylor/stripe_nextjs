import React from 'react';
import Nav from '../../components/Nav/Nav';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import colors from '../../colors/colors';
import Em from '../../components/general/Em/Em';
import Link from 'next/link';

const tutoring = () => {
  return (
    <div>
      <Nav />
      <TutoringText>
        I provide 1-on-1 tutoring online using Google Meet, a drawing tablet and
        a digital painting software called Krita that acts as a nifty
        whiteboard.
        <br /> <br /> For tutoring sessions students will need:
        <MaterialsList>
          <li>a computer with microphone</li>
          <li>a free google account</li>
          <li>something to write with (and on)</li>
        </MaterialsList>
        Some other, <Em> totally optional </Em> things that may be useful:
        <MaterialsList>
          <li>mini white-board</li>
          <li>
            <Link href={'/'}> drawing tablet &rarr; </Link>
          </li>
          <li>
            {' '}
            <Link href={'/'}> digital painting software &rarr; </Link>
          </li>
        </MaterialsList>
        <hr></hr>
      </TutoringText>
    </div>
  );
};

const TutoringText = styled.div`
  max-width: 800px;
  padding-top: 32px;
  margin: auto;
  font-size: 1.5rem;
  padding-left: 16px;
  padding-right: 8px;
  line-height: 2rem;
  color: ${colors.black};

  & hr {
    width: 100%;
  }
`;

const MaterialsList = styled.ul`
  color: ${colors.blue};
  font-weight: 800;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 20px;

  & a {
    color: ${colors.purpleBlue};
    text-decoration: underline;
  }
`;

export default tutoring;
