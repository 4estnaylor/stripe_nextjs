import React from 'react';
import styled from 'styled-components';
import colors from '../../../colors/colors';
import LoginButton from './LoginButton/LoginButton';
import PayButton from './PayButton/PayButton';
import { useSession, signIn, signOut } from 'next-auth/react';

interface PaymentProps {
  daysToBook: Date[];
}

const Payment = ({ daysToBook }: PaymentProps) => {
  const { data: session } = useSession();
  const price = 28;
  if (daysToBook.length < 1) {
    return <InvisiblePayment></InvisiblePayment>;
  } else if (!session?.user) {
    return (
      <ColumnWrapper>
        {/* <Total>$ {price * daysToBook.length} </Total> */}
        <Wrapper>
          <LoginButton daysToBook={daysToBook} />
          <PayButton daysToBook={daysToBook} />
        </Wrapper>
      </ColumnWrapper>
    );
  } else {
    return (
      <ColumnWrapper>
        {/* <Total>$ {price * daysToBook.length} </Total> */}
        <SoloWrapper>
          <PayButton daysToBook={daysToBook} />;
        </SoloWrapper>
      </ColumnWrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${colors.black};

  border-radius: 8px;
`;

const SoloWrapper = styled(Wrapper)`
  justify-content: center;
  width: 350px;
  gap: 0;
`;

const InvisiblePayment = styled(Wrapper)`
  opacity: 0;
`;

const Arrow = styled.div`
  font-size: 2.5rem;
  background-color: inherit;
  color: ${colors.gray_mid};
  padding-top: 60px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const GoogleSignInExplainer = styled.div`
  flex: 1;
  background-color: inherit;
  color: ${colors.white};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Total = styled.div`
  color: ${colors.white};
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

export default Payment;
