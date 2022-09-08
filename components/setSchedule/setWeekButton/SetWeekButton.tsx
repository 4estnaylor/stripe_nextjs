import React from 'react';
import styled from 'styled-components';

interface setWeekButtonProps {
  onClick: React.MouseEventHandler;
}

const SetWeekButton = ({ onClick }: setWeekButtonProps) => {
  return (
    <Wrapper>
      <Button onClick={onClick}>Set Week</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
const Button = styled.button`
  font-size: 1.25rem;
  padding: 20px;
`;

export default SetWeekButton;
