import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../colors/colors';

interface TimeTileProps {
  timeDate: Date;
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

const TimeTile2 = ({ timeDate, daysToBook, setDaysToBook }: TimeTileProps) => {
  const match = daysToBook.find((d) => d.getTime() === timeDate.getTime());
  const hasMatch = !!match;

  const handleSelectionToggle = () => {
    const match = daysToBook.find((d) => d.getTime() === timeDate.getTime());
    const hasMatch = !!match;

    if (hasMatch) {
      console.log('already included');
      setDaysToBook((prev) =>
        [...prev].filter(function (obj) {
          return obj.getTime() !== timeDate.getTime();
        })
      );
    } else {
      setDaysToBook((prev) =>
        [...prev, timeDate].sort((a, b) => a.getTime() - b.getTime())
      );
    }

    console.log([...daysToBook, timeDate]);
  };

  let displayHour = timeDate.getHours();
  let displayAMPM = 'am';
  if (displayHour >= 12) {
    displayHour = displayHour % 12;
    displayAMPM = 'pm';
  }
  let displayMinutes = timeDate.getMinutes().toString();
  if (displayMinutes === '0') {
    displayMinutes = '00';
  }

  return (
    <Wrapper isSelected={true} onClick={handleSelectionToggle}>
      {timeDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isSelected: boolean }>`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: inherit;
  flex: 1;
  color: ${(props) => (props.isSelected ? colors.white : colors.black)};
  background-color: ${(props) =>
    props.isSelected ? colors.red : 'transparent'};
  padding-top: 3px;
  letter-spacing: 0.06rem;
  max-width: 50px;
  border-radius: 4px;
  aspect-ratio: 1;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${colors.white};
      background-color: ${colors.black};
      cursor: pointer;
    }
  }
`;

const DigitsDisplay = styled.div`
  display: flex;
  align-items: baseline;
  background-color: transparent;
`;

const HourDigits = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  align-items: baseline;
  background-color: transparent;
`;

const MinuteDigits = styled.div`
  font-size: 0.65rem;
  font-weight: 800;
  background-color: inherit;
`;

const AMPM = styled.div`
  font-size: 0.65rem;
  font-weight: 600;
  color: inherit;
  opacity: 0.7;
  background-color: inherit;
`;

export default TimeTile2;
