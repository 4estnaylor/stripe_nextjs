import React from 'react';
import styled from 'styled-components';
import colors from '../../../../colors/colors';
import NullTile from './TimeTile/NullTile.tsx/NullTile';
import TimeTile from './TimeTile/TimeTile';
import TimeTile2 from './TimeTile/TimeTile2';

interface DayColumnProps {
  timeDatesAvailable: Date[];
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

const DayColumn = ({
  timeDatesAvailable,
  daysToBook,
  setDaysToBook,
}: DayColumnProps) => {
  const DisplayHours = timeDatesAvailable.map((timeDateGiven) => {
    return (
      <TimeTile
        key={timeDateGiven.getTime()}
        timeDate={timeDateGiven}
        daysToBook={daysToBook}
        setDaysToBook={setDaysToBook}
      />
    );
  });

  return <Wrapper>{DisplayHours}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 1rem;
  flex: 1;
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 7px;
  box-sizing: border-box;
  max-width: 50px;
`;

const NullDate = styled.div`
  flex: 1;
`;

export default DayColumn;
