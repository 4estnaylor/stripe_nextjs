import React, { useState } from 'react';
import styled from 'styled-components';
import AddSession from '../../components/book/WeekSelector/AddSession/AddSession';
import MyScheduleWeekSelector from '../../components/book/WeekSelector/MyScheduleWeekSelector';
import Nav from '../../components/Nav/Nav';
import WeekDayLabels from '../../components/WeekDayLabels/WeekDayLabels';

function getMostRecentSunday() {
  var t = new Date();
  t.setDate(t.getDate() - t.getDay());
  t.setHours(0);
  return t;
}

const AddSessionPage = () => {
  const [startingSunday, setStartingSunday] = useState(getMostRecentSunday());
  return (
    <div>
      <Nav />
      <Wrapper>
        {/* <MyScheduleWeekSelector
          startingSunday={startingSunday}
          setStartingSunday={setStartingSunday}
        /> */}

        <AddSession />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  max-width: 350px;
  margin: auto;
`;

const WeekDayLabelsWrapper = styled.div`
  padding-left: 80px;
`;

export default AddSessionPage;
