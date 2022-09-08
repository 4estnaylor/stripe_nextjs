import React from 'react';
import styled from 'styled-components';
import ListItem2 from './ListItem2/ListItem2';

interface Props {
  daysSelectedForBooking: Date[];
  setDaysSelectedForBooking: React.Dispatch<React.SetStateAction<Date[]>>;
}

const SelectedItemsList2 = (props: Props) => {
  const listItems = props.daysSelectedForBooking.map((timeSlot) => {
    return (
      <ListItem2 key={timeSlot.getTime()} {...props} timeSlot={timeSlot} />
    );
  });
  return <Wrapper>{listItems}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default SelectedItemsList2;
