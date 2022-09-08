import { time } from 'console';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../../../../colors/colors';

interface TimeSlotTile2Props {
  timeSlot: Date;
  daysSelectedForBooking: Date[];
  setDaysSelectedForBooking: React.Dispatch<React.SetStateAction<Date[]>>;
  givenTheme: TileTheme;
}

interface TileTheme {
  color: string;
  backgroundColor: string;
  textDecoration?: string;
  opacity?: number;
  hover?: {
    color?: string;
    backgroundColor?: string;
    opacity?: number;
  };
  cursor?: string;
}

const TimeSlotTile2 = (props: TimeSlotTile2Props) => {
  const {
    timeSlot,
    daysSelectedForBooking,
    setDaysSelectedForBooking,
    givenTheme,
  } = props;
  // const [theme, setTheme] = useState;
  const theme = givenTheme;

  if (timeSlot.getTime() < new Date().getTime()) {
    return <Wrapper />;
  }

  // useEffect(() => {
  //   if (timeSlot.getTime() > new Date().getTime()) {
  //     setTheme(tileThemes.available);
  //   }
  // }, []);

  const timeString = timeSlot.toLocaleTimeString('en-US', {
    hour: 'numeric',
  });
  const hourString = timeString.split(' ')[0];
  const ampmString = timeString.split(' ')[1];

  const handleClick = () => {
    if (givenTheme === tileThemes.booked) {
      return;
    }

    setDaysSelectedForBooking((prev) => {
      const isAlreadySelectedForBooking =
        prev.filter((e) => e.getTime() === timeSlot.getTime()).length > 0;

      if (isAlreadySelectedForBooking) {
        const daysSelectedForBookingMinusThisOne = prev.filter(
          (dateObj) => dateObj.getTime() !== timeSlot.getTime()
        );
        localStorage.setItem(
          'timeSlotsSelectedForBooking',
          JSON.stringify(daysSelectedForBookingMinusThisOne)
        );

        return [...daysSelectedForBookingMinusThisOne];
      } else {
        const daysSelectedForBookingPlusThisOne = [...prev, timeSlot].sort(
          (a, b) => a.getTime() - b.getTime()
        );

        localStorage.setItem(
          'timeSlotsSelectedForBooking',
          JSON.stringify(daysSelectedForBookingPlusThisOne)
        );
        return daysSelectedForBookingPlusThisOne;
      }
    });
  };

  return (
    <Wrapper>
      <ButtonArea onClick={handleClick} theme={theme}>
        <HourDisplay>{hourString}</HourDisplay>
        <AMPMDisplay>{ampmString}</AMPMDisplay>
      </ButtonArea>
    </Wrapper>
  );
};

export const tileThemes: {
  available: TileTheme;
  past: TileTheme;
  booked: TileTheme;
  selectedForBooking: TileTheme;
} = {
  available: {
    color: colors.black,
    backgroundColor: 'transparent',
    hover: {
      backgroundColor: colors.black,
      color: colors.white,
    },
  },
  past: {
    color: colors.black,
    backgroundColor: colors.white,
  },
  booked: {
    color: colors.gray_light,
    backgroundColor: colors.white,
    textDecoration: 'line-through',
    cursor: 'auto',
  },
  selectedForBooking: {
    color: colors.white,
    backgroundColor: colors.red,
    opacity: 1,
    hover: {
      opacity: 1,
    },
  },
};

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonArea = styled.button<{ theme: TileTheme }>`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${(p) => (p.theme.cursor ? p.theme.cursor : 'pointer')};
  color: ${(p) => p.theme.color};
  background-color: ${(p) => p.theme.backgroundColor};
  text-decoration: ${(p) =>
    p.theme.textDecoration ? p.theme.textDecoration : 'none'};
  opacity: ${(p) => (p.theme.opacity ? p.theme.opacity : 1)};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(p) =>
        p.theme.hover && p.theme.hover.backgroundColor
          ? p.theme.hover.backgroundColor
          : p.theme.backgroundColor};
      color: ${(p) =>
        p.theme.hover && p.theme.hover.color
          ? p.theme.hover.color
          : p.theme.color};
      opacity: ${(p) =>
        p.theme.hover && p.theme.hover.opacity ? p.theme.hover.opacity : 1};
    }
  }
`;

const HourDisplay = styled.div`
  font-size: 1rem;
  background-color: transparent;
  font-weight: 500;
`;

const AMPMDisplay = styled.div`
  font-size: 0.75rem;
  opacity: 1;
  background-color: transparent;
`;

export default TimeSlotTile2;
