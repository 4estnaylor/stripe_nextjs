import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';
import HourSelector2 from '../../components/book2/HourSelector2/HourSelector2';
import PaymentArea2 from '../../components/book2/PaymentArea2/PaymentArea2';
import Nav from '../../components/Nav/Nav';

const timesUTC = [
  //sunday ↓
  [20, 21, 22, 23],
  //monday ↓
  [20, 21, 22, 23],
  // tuesday ↓
  [20, 21, 22, 23],
  // wednesday ↓
  [20, 21, 22, 23],
  // thursday ↓
  [20, 21, 22, 23],
  // friday ↓
  [20, 21, 22, 23],
  // saturday ↓
  [20, 21, 22, 23],
];

const getMostRecentSundayAtMidnight = () => {
  const currentDate = new Date();
  const mostRecentSunday = new Date(currentDate.getTime());
  mostRecentSunday.setDate(
    mostRecentSunday.getDate() - mostRecentSunday.getDay()
  );
  mostRecentSunday.setHours(0);
  mostRecentSunday.setMinutes(0);
  mostRecentSunday.setSeconds(0);
  mostRecentSunday.setMilliseconds(0);
  return mostRecentSunday;
};

const BookingPage = () => {
  const [sundays, setSundays] = useState<Date[]>([]);
  const [allTimeSlots, setAllTimeSlots] = useState<Date[]>([]);
  const [weekIndex, setWeekIndex] = useState(0);
  const [daysSelectedForBooking, setDaysSelectedForBooking] = useState<Date[]>(
    []
  );
  const weeksVisible = 10;

  const hourSelector2Props = {
    sundays,
    weekIndex,
    setWeekIndex,
    allTimeSlots,
    daysSelectedForBooking,
    setDaysSelectedForBooking,
  };

  const paymentArea2Props = {
    daysSelectedForBooking,
    setDaysSelectedForBooking,
  };

  const initializeSundays = () => {
    const firstSunday = getMostRecentSundayAtMidnight();
    // const firstSundayClone = new Date(firstSunday.getTime());

    const allSundays = [];
    for (let i = 0; i < weeksVisible; i++) {
      const sundayToAdd = getMostRecentSundayAtMidnight();
      sundayToAdd.setDate(sundayToAdd.getDate() + 7 * i);
      allSundays.push(new Date(sundayToAdd));
    }

    setSundays([...allSundays]);
  };

  const initializeAllSessionTimeSlots = () => {
    const allSlotsByWeek = sundays.map((sunday) => {
      const currentWeekTimeSlots = [];
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        let currentDay = new Date(sunday.getTime());
        currentDay.setDate(currentDay.getDate() + dayIndex);

        const currentDayTimeSlots = timesUTC[dayIndex].map((time) => {
          const timeSlot = new Date(currentDay.getTime());

          timeSlot.setUTCHours(time);
          timeSlot.setUTCMinutes(0);
          timeSlot.setUTCSeconds(0);
          timeSlot.setUTCMilliseconds(0);

          return timeSlot;
        });

        currentWeekTimeSlots.push(...currentDayTimeSlots);
      }

      return currentWeekTimeSlots;
    });

    const allSlots: Date[] = [];

    allSlotsByWeek.forEach((week) => {
      allSlots.push(...week);
    });

    const sortedAllSlots = allSlots.sort((a, b) => a.getTime() - b.getTime());

    setAllTimeSlots(sortedAllSlots);
  };

  const getPreviouslySelectedTimeSlotsFromLocalStorage = () => {
    const timeSlotsSelectedForBookingString =
      localStorage.getItem('timeSlotsSelectedForBooking') || '[]';
    let parsed: string[] = JSON.parse(timeSlotsSelectedForBookingString);
    let initialTimeSlotsSelectedForBooking = parsed.map(
      (string) => new Date(string)
    );

    // setDaysSelectedForBooking([...initialTimeSlotsSelectedForBooking]);

    return initialTimeSlotsSelectedForBooking;
  };

  useEffect(() => {
    initializeSundays();
    setDaysSelectedForBooking(getPreviouslySelectedTimeSlotsFromLocalStorage());
  }, []);

  useEffect(() => {
    initializeAllSessionTimeSlots();
  }, [sundays]);
  return (
    <div>
      <Nav />
      <Gap20 />
      <OuterWrapper>
        <WhiteTopSection>
          <HourSelector2 {...hourSelector2Props} />
          <Gap20 />
        </WhiteTopSection>
        <DarkBottomSection>
          <PaymentArea2 {...paymentArea2Props} />
        </DarkBottomSection>
      </OuterWrapper>
    </div>
  );
};

const OuterWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const WhiteTopSection = styled.div`
  background-color: ${colors.white};
  width: 100%;
  margin: auto;
`;

const DarkBottomSection = styled.div`
  background-color: ${colors.black};
  width: 100%;
  height: 100px;
  margin: auto;
  min-height: 50vh;
  height: fit-content;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const Gap20 = styled.div`
  height: 20px;
  background-color: ${colors.white};
`;

export default BookingPage;
