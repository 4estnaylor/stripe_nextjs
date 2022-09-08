import { time } from 'console';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../../../colors/colors';

interface TimeTileProps {
  dateTime: Date;
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

interface TileFormTheme {
  color: string;
  backgroundColor: string;
  hover?: {
    color?: string;
    backgroundColor?: string;
    cursor?: string;
  };
}

type TileFormThemeObject = {
  available: TileFormTheme;
  past: TileFormTheme;
  reserved: TileFormTheme;
  reservedByUser: TileFormTheme;
  selected: TileFormTheme;
};

const tileFormThemes: TileFormThemeObject = {
  available: {
    color: colors.black,
    backgroundColor: colors.white,
    hover: {
      backgroundColor: colors.black,
      color: colors.white,
      cursor: 'pointer',
    },
  },
  past: {
    color: colors.white,
    backgroundColor: colors.white,
  },
  reserved: {
    color: colors.gray_light,
    backgroundColor: colors.white,
  },
  reservedByUser: {
    color: colors.purpleBlue,
    backgroundColor: colors.green,
  },
  selected: {
    color: colors.white,
    backgroundColor: colors.red,
    hover: {
      cursor: 'pointer',
    },
  },
};

const TimeTile = ({ dateTime, daysToBook, setDaysToBook }: TimeTileProps) => {
  const [timeString, setTimeString] = useState('');
  const [ampmString, setAmPmString] = useState('PM');
  const [tileFormTheme, setTileFormTheme] = useState(tileFormThemes.available);

  const isTimeTileDateTimeInDaysToBook = () => {
    const matchInDaysToBook = daysToBook.find(
      (d) => d.getTime() === dateTime.getTime()
    );
    const hasMatchInDaysToBook = !!matchInDaysToBook;

    return hasMatchInDaysToBook;
  };

  const handleSelectionToggle = () => {
    const matchInDaysSelected = daysToBook.find(
      (d) => d.getTime() === dateTime.getTime()
    );
    const hasMatchInDaysSelected = !!matchInDaysSelected;

    if (hasMatchInDaysSelected) {
      setDaysToBook((prev) =>
        [...prev].filter(function (obj) {
          return obj.getTime() !== dateTime.getTime();
        })
      );
      setTileFormTheme(tileFormThemes.available);
    } else {
      setTileFormTheme(tileFormThemes.selected);
      setDaysToBook((prev) =>
        [...prev, dateTime].sort((a, b) => a.getTime() - b.getTime())
      );
    }
  };

  useEffect(() => {
    const checkLocalStorage = () => {
      const match = isTimeTileDateTimeInDaysToBook();
      if (match) {
        setTileFormTheme(tileFormThemes.selected);
      }
    };

    window.addEventListener('storage', checkLocalStorage);

    const fullString = dateTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
    });

    const timeString = fullString.split(' ')[0];
    const ampm = fullString.split(' ')[1];

    setTimeString(timeString);

    return () => {
      window.removeEventListener('storage', checkLocalStorage);
    };
  }, []);

  return (
    <Wrapper tileFormTheme={tileFormTheme} onClick={handleSelectionToggle}>
      {timeString}
      <AMPM>{ampmString}</AMPM>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ tileFormTheme: TileFormTheme }>`
  height: 45px;
  width: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: ${(p) => p.tileFormTheme.color};
  background-color: ${(p) => p.tileFormTheme.backgroundColor};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(p) =>
        p.tileFormTheme.hover?.color
          ? p.tileFormTheme.hover.color
          : p.tileFormTheme.color};
      background-color: ${(p) =>
        p.tileFormTheme.hover?.backgroundColor
          ? p.tileFormTheme.hover.backgroundColor
          : p.tileFormTheme.backgroundColor};
    }
    cursor: ${(p) =>
      p.tileFormTheme.hover?.cursor ? p.tileFormTheme.hover.cursor : 'default'};
  } ;
`;

const AMPM = styled.div`
  background-color: inherit;
  font-size: 0.7rem;
`;

export default TimeTile;
