import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WeekSelector from '../../components/book/WeekSelector/WeekSelector';
import DaySelector from '../../components/book/DaySelector/DaySelector';
import Nav from '../../components/Nav/Nav';
import WeekDayLabels from '../../components/WeekDayLabels/WeekDayLabels';
import SetHour from '../../components/setSchedule/SetHour/SetHour';
import SetWeekButton from '../../components/setSchedule/setWeekButton/SetWeekButton';
// pages/index.tsx

function getMostRecentSunday() {
  var t = new Date();
  t.setDate(t.getDate() - t.getDay());
  t.setHours(0);
  return t;
}

const Book = () => {
  const [sessionsToCreate, setSessionsToCreate] = useState([]);
  const createSession = () => {
    console.log('create session');
  };

  const getWeeksSessions = async (startingSunday: Date) => {
    const result = await fetch(
      '/api/sessions/week/' + startingSunday.getTime(),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const json = await result.json();
  };

  const now = new Date();
  const initialStartingSunday = getMostRecentSunday();
  const [startingSunday, setStartingSunday] = useState(initialStartingSunday);
  const [visibleDays, setVisibleDays] = useState();

  useEffect(() => {
    getWeeksSessions(startingSunday);
    handleSetWeekClick();
  }, [startingSunday]);

  const handleSetWeekClick = () => {
    console.log('setting Week');
    console.log(sessionsToCreate);
  };

  return (
    <div>
      <Nav />
      <Wrapper>
        <WeekSelector
          startingSunday={startingSunday}
          setStartingSunday={setStartingSunday}
        />
        <WeekDayLabelsWrapper>
          <WeekDayLabels />
        </WeekDayLabelsWrapper>
        <SetHour
          UTChour={20}
          minutes={0}
          startingSunday={startingSunday}
          sessionsToCreate={sessionsToCreate}
          setSessionsToCreate={setSessionsToCreate}
        />
        <SetHour
          UTChour={21}
          minutes={10}
          startingSunday={startingSunday}
          sessionsToCreate={sessionsToCreate}
          setSessionsToCreate={setSessionsToCreate}
        />
        <SetHour
          UTChour={22}
          minutes={20}
          startingSunday={startingSunday}
          sessionsToCreate={sessionsToCreate}
          setSessionsToCreate={setSessionsToCreate}
        />
        <SetHour
          UTChour={23}
          minutes={30}
          startingSunday={startingSunday}
          sessionsToCreate={sessionsToCreate}
          setSessionsToCreate={setSessionsToCreate}
        />
        <SetWeekButton onClick={handleSetWeekClick} />
        <div>hour selector</div>
        <div>add session</div>
        <div>selected sessions</div>
        <div>pricing</div>
      </Wrapper>
      ;
    </div>
  );
};

const Wrapper = styled.div`
  width: 350px;
  padding-left: 16px;
  margin: auto;
`;

const WeekDayLabelsWrapper = styled.div`
  padding-left: 80px;
`;

export default Book;
