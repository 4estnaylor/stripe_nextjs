import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DayColumn from './DayColumn/DayColumn';

const availableTimesUTC = [
  { hours: 20, minutes: 0 },
  { hours: 21, minutes: 0 },
  { hours: 22, minutes: 0 },
  { hours: 23, minutes: 0 },
  { hours: 25, minutes: 0 },
];

const availableTimeDatesUTC = availableTimesUTC.map((givenTime) => {
  const date = new Date();
  date.setUTCHours(givenTime.hours);
  date.setMinutes(givenTime.minutes);
  return date;
});

interface HourSelectorProps {
  startingSunday: Date;
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

const HourSelector = ({
  startingSunday,
  daysToBook,
  setDaysToBook,
}: HourSelectorProps) => {
  useEffect(() => {
    console.log('here2', daysToBook);
  }, []);

  const startingSundayCopy = new Date(startingSunday.getTime());
  const dayColumns = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(startingSunday.getTime());
    dayDate.setDate(startingSunday.getDate() + i);
    const availableTimeDates = availableTimesUTC.map((givenTimeUTC) => {
      const availableTimeDate = new Date(dayDate.getTime());
      availableTimeDate.setUTCHours(givenTimeUTC.hours);
      availableTimeDate.setUTCMinutes(givenTimeUTC.minutes);
      return availableTimeDate;
    });
    const dayColumn = (
      <DayColumn
        key={dayDate.getDate()}
        timeDatesAvailable={availableTimeDates}
        daysToBook={daysToBook}
        setDaysToBook={setDaysToBook}
      />
    );

    dayColumns.push(dayColumn);
  }

  return <Wrapper>{dayColumns}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0px;
  box-sizing: border-box;
`;

export default HourSelector;
