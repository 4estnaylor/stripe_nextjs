import React from 'react';
import styled from 'styled-components';
import colors from '../../../../colors/colors';

interface BillSummaryProps {
  numberOfSessions: number;
  pricePerSession: number;
}

const BillSummary = ({
  numberOfSessions,
  pricePerSession,
}: BillSummaryProps) => {
  let breakdownDisplay;
  let sessionForm;
  if (numberOfSessions === 1) {
    sessionForm = 'session';
  } else {
    sessionForm = 'sessions';
  }
  if (numberOfSessions === 0) {
    breakdownDisplay = (
      <PriceSchemeWrapper>
        <PriceScheme>
          <FortyFiveMinCircle>
            <FortyFiveMinCircleText>
              <Digit>45</Digit>
              <Min>min</Min>
            </FortyFiveMinCircleText>
          </FortyFiveMinCircle>
          session ${pricePerSession}
        </PriceScheme>
        <div>select a session</div>
      </PriceSchemeWrapper>
    );
  } else {
    breakdownDisplay = (
      <Inline>
        {numberOfSessions}
        <FortyFiveMinCircleLight>
          <FortyFiveMinCircleTextLight>
            <DigitLight>45</DigitLight>
            <Min>min</Min>
          </FortyFiveMinCircleTextLight>
        </FortyFiveMinCircleLight>
        {sessionForm} × ${pricePerSession} = $
        {numberOfSessions * pricePerSession}
      </Inline>
    );
  }
  return (
    <Wrapper>
      {/* <Total>Total: ${numberOfSessions * pricePerSession}</Total> */}
      <BreakDown>{breakdownDisplay}</BreakDown>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* padding-top: 10px;
  padding-left: 20px; */
`;
const Total = styled.div`
  font-size: 1.25rem;
  background-color: inherit;
  font-weight: 400;
  color: ${colors.white};
`;
const BreakDown = styled.div`
  background-color: inherit;
  font-size: 1rem;
  color: ${colors.gray_mid};
`;

const PriceSchemeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2px;
`;
const PriceScheme = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.white};
`;

const Price = styled.div``;

const FortyFiveMinCircle = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 4px solid ${colors.white};
  border-left: 4px solid transparent;
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;

const FortyFiveMinCircleLight = styled(FortyFiveMinCircle)`
  height: 35px;
  width: 35px;
  color: ${colors.gray_mid};
  border: 2px solid ${colors.gray_mid};
  border-left: 2px solid transparent;
`;

const FortyFiveMinCircleText = styled.div`
  position: absolute;
  transform: rotate(-45deg);
  background-color: transparent;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FortyFiveMinCircleTextLight = styled(FortyFiveMinCircleText)`
  height: 40px;
  width: 40px;
`;

const Digit = styled.div`
  font-size: 1rem;
`;

const DigitLight = styled.div`
  font-size: 0.7rem;
`;
const Min = styled.div`
  font-size: 0.5rem;
`;
const Inline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
export default BillSummary;
