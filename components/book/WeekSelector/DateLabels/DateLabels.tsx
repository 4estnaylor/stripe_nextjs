import React from 'react';
import styled from 'styled-components';
import colors from '../../../../colors/colors';

interface DateLabelsProps {
  startingSunday: Date;
}
const DateLabels = ({ startingSunday }: DateLabelsProps) => {
  const dayDigits = [];

  let initSunday = new Date(startingSunday.getTime());

  for (let i = 0; i < 7; i++) {
    const digitToDisplay = initSunday.getDate();
    dayDigits.push(digitToDisplay);
    initSunday.setDate(initSunday.getDate() + 1);
  }

  return (
    <Wrapper>
      {dayDigits.map((digit) => {
        return <DateDigit key={digit}>{digit}</DateDigit>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  justify-content: center;
  width: 350px;
  display: flex;
  margin: auto;
`;

const DateDigit = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  color: ${colors.gray_dark};
  opacity: 0.5;
  font-weight: 600;
`;

export default DateLabels;
