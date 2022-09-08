import React from 'react';
import styled from 'styled-components';
import colors from '../../../colors/colors';
import Payment from '../Payment/Payment';
import BillItem from './BillItem/BillItem';
import BillSummary from './BillSummary/BillSummary';

interface BillProps {
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

const pricePerSession = 38;

const Bill = ({ daysToBook, setDaysToBook }: BillProps) => {
  const billItems = daysToBook.map((dayToBook) => {
    return (
      <BillItem
        key={dayToBook.getTime()}
        dateTime={dayToBook}
        daysToBook={daysToBook}
        setDaysToBook={setDaysToBook}
      />
    );
  });
  return (
    <WrapperWrapper>
      <Wrapper>
        <BillSummary
          numberOfSessions={daysToBook.length}
          pricePerSession={pricePerSession}
        />

        <Payment daysToBook={daysToBook} />
        {billItems}
      </Wrapper>
    </WrapperWrapper>
  );
};

const WrapperWrapper = styled.div`
  background-color: ${colors.black};
  margin-left: -5px;
  margin-right: -5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 15px;
  align-items: flex-start;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${colors.black};
  color: ${colors.blue_light};

  padding-top: 20px;
  padding-bottom: 20px;
  max-width: 400px;
  min-height: 400px;
`;

const PushToCenter = styled.div`
  padding-left: 10px;
  width: 350px;
  margin: auto;
  background-color: inherit;
`;

export default Bill;
