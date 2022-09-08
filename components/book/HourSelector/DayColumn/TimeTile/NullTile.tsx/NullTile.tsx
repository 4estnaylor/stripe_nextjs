import React from 'react';
import styled from 'styled-components';

const NullTile = () => {
  return <Wrapper>∅</Wrapper>;
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  font-size: 2rem;
  opacity: 0.5;
  cursor: 'default';
`;

export default NullTile;
