import Image from 'next/image';
import { prependOnceListener } from 'process';
import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../../../colors/colors';
import DayLabels2 from './DayLabels2/DayLabels2';
import TimeSlotDisplay2 from './TimeSlotDisplay2';
import forwardArrow from '../../../../public/forward_arrow.svg';
import backwardArrow from '../../../../public/backwards_arrow.svg';

interface WeekSelector2Props {
  sundays: Date[];
  weekIndex: number;
  setWeekIndex: React.Dispatch<React.SetStateAction<number>>;
  allTimeSlots: Date[];
}

const WeekSelector2 = (props: WeekSelector2Props) => {
  let { sundays, weekIndex, setWeekIndex, allTimeSlots } = props;

  const backButtonVisibility = weekIndex > 0;
  const forwardButtonVisibility = weekIndex < sundays.length - 1;

  const handleClickBackward = () => {
    if (weekIndex > 0) {
      setWeekIndex((prev) => prev - 1);
    }
  };

  const handleClickForward = () => {
    if (weekIndex < sundays.length - 1) {
      setWeekIndex((prev) => prev + 1);
    }
  };

  const visibleSunday = sundays[weekIndex];

  if (!visibleSunday) return <div></div>; // returns empty div if visibleSunday is not loaded

  const visibleSaturday = new Date(visibleSunday.getTime());
  visibleSaturday.setDate(visibleSaturday.getDate() + 6);

  let dateDisplay;

  if (visibleSunday.getMonth() === visibleSaturday.getMonth()) {
    dateDisplay =
      visibleSunday.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      }) +
      ' - ' +
      visibleSaturday.toLocaleDateString('en-US', {
        day: 'numeric',
      });
  } else {
    dateDisplay =
      visibleSunday.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }) +
      ' - ' +
      visibleSaturday.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
  }

  return (
    <Wrapper>
      <WeekSelectionWrapper>
        <Button
          onClick={handleClickBackward}
          $visibility={backButtonVisibility}
        >
          <Image src={backwardArrow} width={30} height={30} />
        </Button>
        <DateDisplay>{dateDisplay}</DateDisplay>
        <Button
          onClick={handleClickForward}
          $visibility={forwardButtonVisibility}
        >
          <Image src={forwardArrow} width={30} height={30} />
        </Button>
      </WeekSelectionWrapper>
      <DayLabels2 sunday={visibleSunday} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const WeekSelectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DateDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.gray_mid};
  flex: 1;
  font-size: 1.25rem;
  opacity: 0.7; ;
`;
const Button = styled.div<{ $visibility: boolean }>`
  min-width: 50px;
  min-height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 2rem;
  opacity: ${(p) => (!p.$visibility ? 0 : 1)};
`;

export default WeekSelector2;
