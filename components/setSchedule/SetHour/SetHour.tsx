import React from 'react';
import styled from 'styled-components';
import CheckBoxes from '../CheckBoxes/CheckBoxes';

interface SetHourProps {
  UTChour: number;
  minutes: number;
  startingSunday: Date;
  sessionsToCreate: any[];
  setSessionsToCreate: Function;
}

const SetHour = ({
  UTChour,
  minutes,
  startingSunday,
  sessionsToCreate,
  setSessionsToCreate,
}: SetHourProps) => {
  const date = new Date();
  date.setUTCFullYear(startingSunday.getFullYear());
  date.setUTCMonth(startingSunday.getMonth());
  date.setUTCHours(UTChour);
  date.setUTCMinutes(minutes);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);

  return (
    <Wrapper>
      <TimeWrapper>
        {date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        })}
      </TimeWrapper>
      <DayTimesWrapper>
        <CheckBoxes
          dateTime={date}
          sessionsToCreate={sessionsToCreate}
          setSessionsToCreate={setSessionsToCreate}
        />
      </DayTimesWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const TimeWrapper = styled.div`
  width: 80px;
`;

const DayTimesWrapper = styled.div`
  flex: 1;
  background-color: blue;
`;

export default SetHour;
