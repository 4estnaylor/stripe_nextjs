import React from 'react';
import styled from 'styled-components';
import BillSummary from '../../book/Bill/BillSummary/BillSummary';
import LoginButton from '../../book/Payment/LoginButton/LoginButton';
import Payment from '../../book/Payment/Payment';
import SelectedItemsList2 from './SelectedItemsList2/SelectedItemsList2';

interface Props {
  daysSelectedForBooking: Date[];
  setDaysSelectedForBooking: React.Dispatch<React.SetStateAction<Date[]>>;
}

const PaymentArea2 = (props: Props) => {
  const { setDaysSelectedForBooking, daysSelectedForBooking } = props;
  if (daysSelectedForBooking.length > 0) {
    return (
      <Wrapper>
        {/* <LoginAndPayment>
        <LoginButton daysToBook={daysSelectedForBooking} />
        <
      </LoginAndPayment> */}
        <SelectedItemsList2 {...props} />
        <Gap30 />
        <Payment daysToBook={daysSelectedForBooking} />
        <Gap30 />
        <BillSummary
          numberOfSessions={daysSelectedForBooking.length}
          pricePerSession={28}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        {/* <LoginAndPayment>
      <LoginButton daysToBook={daysSelectedForBooking} />
      <
    </LoginAndPayment> */}

        <BillSummary
          numberOfSessions={daysSelectedForBooking.length}
          pricePerSession={28}
        />
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  width: 350px;
  margin: auto;
`;

const LoginAndPayment = styled.div``;

const Gap30 = styled.div`
  height: 30px;
`;

export default PaymentArea2;
