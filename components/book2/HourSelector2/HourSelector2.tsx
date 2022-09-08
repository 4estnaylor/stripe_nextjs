import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../colors/colors';
import HourTiles2 from './WeekSelector2/HourTiles2/HourTiles2';
import WeekSelector2 from './WeekSelector2/WeekSelector2';

interface HourSelector2Props {
  sundays: Date[];
  weekIndex: number;
  setWeekIndex: React.Dispatch<React.SetStateAction<number>>;
  allTimeSlots: Date[];
  daysSelectedForBooking: Date[];
  setDaysSelectedForBooking: React.Dispatch<React.SetStateAction<Date[]>>;
}

const HourSelector2 = (props: HourSelector2Props) => {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <WeekSelector2 {...props} />
      <Gap20 />
      <HourTiles2 {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  background-color: transparent;
  margin: auto;
`;

const Gap20 = styled.div`
  height: 10px;
`;

export default HourSelector2;
