import React, { ReactNode } from 'react';
import styled from 'styled-components';

type TextWithMarginsProps = {
  children: ReactNode;
};

const TextWithMargins = (props: any) => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  margin: auto;
  font-size: 1.25rem;
  line-height: 2rem;
  max-width: 700px;
  padding: 16px;
`;

export default TextWithMargins;
