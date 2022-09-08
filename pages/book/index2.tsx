import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WeekSelector from '../../components/book/WeekSelector/WeekSelector';
import DaySelector from '../../components/book/DaySelector/DaySelector';
import Nav from '../../components/Nav/Nav';
import WeekDayLabels from '../../components/WeekDayLabels/WeekDayLabels';
import HourSelector from '../../components/book/HourSelector/HourSelector2';
import DateLabels from '../../components/book/WeekSelector/DateLabels/DateLabels';
import Bill from '../../components/book/Bill/Bill';
import colors from '../../colors/colors';
// pages/index.tsx

function getMostRecentSunday() {
  var t = new Date();
  t.setDate(t.getDate() - t.getDay());
  t.setHours(0, 0, 0, 0);
  return t;
}

const Book = () => {
  const [bookedSessions, setBookedSessions] = useState([]);

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
    setBookedSessions(json);
  };

  const now = new Date();
  const initialStartingSunday = getMostRecentSunday();
  const [startingSunday, setStartingSunday] = useState(initialStartingSunday);

  const [daysToBook, setDaysToBook] = useState<Date[]>([]);

  useEffect(() => {
    getWeeksSessions(startingSunday);
    let storedDaysToBookString = localStorage.getItem('lastDaysToBook');
    if (storedDaysToBookString) {
      const storedDaysToBookArrayOfDateStrings: string[] = JSON.parse(
        storedDaysToBookString
      );
      const storedDaysToBook = storedDaysToBookArrayOfDateStrings.map(
        (dateString) => {
          return new Date(dateString);
        }
      );
      setDaysToBook(storedDaysToBook);
      console.log('stored days to book', storedDaysToBook);
    }
  }, []);

  return (
    <div>
      <Nav />
      <Wrapper>
        <AreaWithMargin>
          <WeekSelector
            startingSunday={startingSunday}
            setStartingSunday={setStartingSunday}
          />

          <WeekDayLabels />

          <DateLabels startingSunday={startingSunday} />

          <HourSelector
            startingSunday={startingSunday}
            daysToBook={daysToBook}
            setDaysToBook={setDaysToBook}
          />
          <Bill daysToBook={daysToBook} setDaysToBook={setDaysToBook} />
        </AreaWithMargin>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

const AreaWithMargin = styled.div`
  min-width: 350px;
  padding-left: 5px;
  padding-right: 5px;
  flex: 1;
`;

export default Book;
