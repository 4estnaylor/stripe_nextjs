import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Links = () => {
  return (
    <Wrapper>
      <Link href="/about_me">about me</Link>
      <Link href="/tutoring">tutoring</Link>
      <Link href="/book">book</Link>
      {/* <Link href="/stuff">stuff</Link> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 1.25rem;
`;

export default Links;
