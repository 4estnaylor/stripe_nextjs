import React from 'react';
import styled from 'styled-components';
import colors from '../../../../../colors/colors';

interface Props {
  daysSelectedForBooking: Date[];
  setDaysSelectedForBooking: React.Dispatch<React.SetStateAction<Date[]>>;
  timeSlot: Date;
}

const ListItem2 = (props: Props) => {
  const { daysSelectedForBooking, setDaysSelectedForBooking, timeSlot } = props;
  const handleDeleteButtonClick = () => {
    setDaysSelectedForBooking((prev) => {
      const filtered = prev.filter((e) => e.getTime() !== timeSlot.getTime());

      localStorage.setItem(
        'timeSlotsSelectedForBooking',
        JSON.stringify(filtered)
      );
      return filtered;
    });
  };

  const weekDayDisplay = timeSlot.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const monthDisplay = timeSlot.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  const dayDisplay = timeSlot.toLocaleDateString('en-US', {
    day: 'numeric',
  });

  const hourDisplay = timeSlot.toLocaleTimeString('en-US', {
    hour: 'numeric',
  });

  const [digitDisplay, ampmDisplay] = hourDisplay.split(' ');

  const fullDateDisplay = timeSlot.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
  });
  return (
    <Wrapper>
      <FullDate>
        <Hour>
          <InnerHour>
            <Digit>{digitDisplay}</Digit>
            <AMPM>{ampmDisplay}</AMPM>
          </InnerHour>
        </Hour>
        <Weekday>{weekDayDisplay}</Weekday>
        <Month>{monthDisplay}</Month>
        <DeleteButton onClick={handleDeleteButtonClick}>✕</DeleteButton>
      </FullDate>
    </Wrapper>
  );
};

const DisplayTile = styled.div``;

const Weekday = styled.div`
  width: 100px;
  padding-left: 10px;
`;
const Month = styled.div`
  width: 100px;
  padding-left: 20px;
`;
const Day = styled.div``;
const Hour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
`;
const InnerHour = styled.div`
  height: 45px;
  width: 45px;
  border: 2px solid ${colors.white};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.black};
`;

const Digit = styled.div``;
const AMPM = styled.div`
  font-size: 0.75rem;
`;

const Wrapper = styled.div`
  color: ${colors.white};
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding-right: 0px;
`;

const FullDate = styled.div`
  flex: 2;
  align-items: center;
  display: flex;
  position: relative;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${colors.white};
  width: 50px;
  height: 100%;

  cursor: pointer;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
`;

export default ListItem2;
