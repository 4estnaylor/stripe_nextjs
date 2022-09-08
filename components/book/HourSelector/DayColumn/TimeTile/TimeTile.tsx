import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../../../../colors/colors';

interface TimeTileProps {
  timeDate: Date;
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

const TimeTile = ({ timeDate, daysToBook, setDaysToBook }: TimeTileProps) => {
  const [isReserved, setIsReserved] = useState(true);

  // const findIfTimeDateIsReserved = async (timeDate: Date) => {
  //   const result = await fetch('/api/CRUD/Read/' + JSON.stringify(timeDate), {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const match = await result.json();
  //   setIsReserved(match.match);
  //   return result;
  // };

  useEffect(() => {
    // const result = findIfTimeDateIsReserved(timeDate);
  }, []);

  const handleTileClick = () => {
    const match = daysToBook.find((d) => d.getTime() === timeDate.getTime());
    const hasMatch = !!match;

    if (hasMatch) {
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

  const dayOfWeek = timeDate.toLocaleDateString('en-US', {
    timeZone: 'CST',
    weekday: 'long',
  });

  return (
    <Wrapper isSelected={true} isReserved={false}>
      <DigitsDisplay isReserved={true}>hey</DigitsDisplay>
    </Wrapper>
  );

  // if (dayOfWeek !== 'Friday') {
  //   return (
  //     <Wrapper
  //       isSelected={hasMatch}
  //       onClick={handleSelectionToggle}
  //       isReserved={isReserved}
  //     >
  //       <DigitsDisplay isReserved={isReserved}>
  //         <HourDigits>{displayHour || '00'}</HourDigits>
  //         <MinuteDigits>:{displayMinutes || '00'}</MinuteDigits>
  //       </DigitsDisplay>
  //       <AMPM>{displayAMPM}</AMPM>
  //     </Wrapper>
  //   );
  // } else {
  //   return (
  //     <InactiveWrapper
  //       isSelected={hasMatch}
  //       onClick={handleSelectionToggle}
  //       isReserved={isReserved}
  //     >
  //       <DigitsDisplay isReserved={false}>∅</DigitsDisplay>
  //     </InactiveWrapper>
  //   );
  // }
};

const TestWrapper = styled.div``;

const Wrapper = styled.div<{ isSelected: boolean; isReserved: boolean }>`
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: inherit;
  flex: 1;
  color: ${(props) => (props.isSelected ? colors.white : colors.black)};
  background-color: ${(props) =>
    props.isSelected ? colors.red : 'transparent'};
  padding-top: 3px;
  letter-spacing: 0.06rem;
  width: 42px;
  border-radius: 4px;
  aspect-ratio: 1;
  opacity: ${(props) => (props.isReserved ? 0.1 : 1)};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => (!props.isReserved ? colors.white : colors.black)};
      background-color: ${(props) =>
        !props.isReserved ? colors.black : 'transparent'};
      cursor: ${(props) => (!props.isReserved ? 'pointer' : 'default')};
    }
  }
`;

const InactiveWrapper = styled(Wrapper)`
  background-color: ${colors.white};
  color: ${colors.gray_mid};
  font-size: 1.5rem;
  padding-bottom: 7px;
  cursor: default;
  &:hover {
    background-color: ${colors.white};
    cursor: default;
    color: ${colors.gray_mid};
  }
`;

const DigitsDisplay = styled.div<{ isReserved: boolean }>`
  display: flex;
  align-items: baseline;
  background-color: transparent;
  text-decoration: ${(props) => (props.isReserved ? 'line-through;' : 'none')};
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
export default TimeTile;
