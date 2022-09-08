import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TileColumn from './TileColumn';
import TimeSlotTile2 from './TimeSlotTile2';
import { tileThemes } from './TimeSlotTile2';

interface HourTiles2Props {
  sundays: Date[];
  weekIndex: number;
  setWeekIndex: React.Dispatch<React.SetStateAction<number>>;
  allTimeSlots: Date[];
  daysSelectedForBooking: Date[];
  setDaysSelectedForBooking: React.Dispatch<React.SetStateAction<Date[]>>;
}

interface SessionString {
  id: string;
  notes: string | null;
  meetTime: string;
  createdAt: string;
  studentId: string;
}

interface Session {
  id: string;
  notes: string | null;
  meetTime: Date;
  createdAt: Date;
  studentId: string;
}

const HourTiles2 = (props: HourTiles2Props) => {
  const {
    sundays,
    weekIndex,
    setWeekIndex,
    allTimeSlots,
    daysSelectedForBooking,
    setDaysSelectedForBooking,
  } = props;

  const [reservedSessions, setReservedSessions] = useState<Session[]>([]);
  const [allTimeSlotTiles, setAllTimeSlotTiles] = useState<JSX.Element[]>([]);

  const updateReservedSessions = async () => {
    // const result = await fetch('/api/CRUD/Read/' + JSON.stringify(timeDate), {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    const result = await fetch('/api/CRUD/Read/readAll', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await result.json();
    const reservedSessions: Session[] = data.reservedSessions;

    reservedSessions.forEach((session) => {
      session.meetTime = new Date(session.meetTime);
      session.createdAt = new Date(session.createdAt);
    });

    setReservedSessions(reservedSessions);

    // const data = await result.json();
    // setIsReserved(match.match);
    // return allSessions
  };

  const getTileTheme = (timeSlot: Date) => {
    let givenTheme = tileThemes.past;

    // if reserved
    const isReserved =
      reservedSessions.filter(
        (e) => e.meetTime.getTime() === timeSlot.getTime()
      ).length > 0;

    if (isReserved) {
      givenTheme = tileThemes.booked;
      return givenTheme;
    } else {
      givenTheme = tileThemes.available;
    }

    // if selected
    if (
      daysSelectedForBooking.filter((e) => e.getTime() === timeSlot.getTime())
        .length > 0
    ) {
      givenTheme = tileThemes.selectedForBooking;
    }

    return givenTheme;
  };

  useEffect(() => {
    updateReservedSessions();
  }, []);

  useEffect(() => {
    const convertedToTimeSlots = allTimeSlots.map((timeSlot) => {
      let givenTheme = getTileTheme(timeSlot);

      return (
        <TimeSlotTile2
          key={timeSlot.getTime()}
          timeSlot={timeSlot}
          setDaysSelectedForBooking={setDaysSelectedForBooking}
          daysSelectedForBooking={daysSelectedForBooking}
          givenTheme={givenTheme}
        />
      );
    });

    setAllTimeSlotTiles(convertedToTimeSlots);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    reservedSessions,
    allTimeSlots,
    daysSelectedForBooking,
    setDaysSelectedForBooking,
  ]);

  const firstVisibleTimeSlot = sundays[weekIndex];
  const lastVisibleTimeSlot = new Date(firstVisibleTimeSlot);
  lastVisibleTimeSlot.setDate(lastVisibleTimeSlot.getDate() + 7);

  const visibleTimeSlotTiles = allTimeSlotTiles.filter(
    (timeSlotTile) =>
      timeSlotTile.key &&
      timeSlotTile.key >= firstVisibleTimeSlot.getTime() &&
      timeSlotTile.key &&
      timeSlotTile.key < lastVisibleTimeSlot.getTime()
  );

  const getTilesForDayOfWeekByIndex = (indexForDayOfWeek: number) => {
    return visibleTimeSlotTiles.filter((timeSlotTile) => {
      const key = Number(timeSlotTile.key);
      const date = new Date(Number(key));
      return timeSlotTile.key && date.getDay() === indexForDayOfWeek;
    });
  };

  // const TimeSlotsToDisplay = visibleTimeSlots.map((timeSlot) => {
  //   return (
  //     <div key={timeSlot.getTime()}>
  //       {timeSlot.toLocaleDateString('en-US', {
  //         hour: 'numeric',
  //       })}
  //     </div>
  //   );
  // });

  return (
    <Wrapper>
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(0)} />
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(1)} />
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(2)} />
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(3)} />
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(4)} />
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(5)} />
      <TileColumn timeSlotTiles={getTilesForDayOfWeekByIndex(6)} />

      {/* {visibleTimeSlotTiles} */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default HourTiles2;
