import React from 'react';
import styled from 'styled-components';
import colors from '../../colors/colors';

const WeekDayLabels = () => {
  return (
    <Wrapper>
      <WeekDayLable>S</WeekDayLable>
      <WeekDayLable>M</WeekDayLable>
      <WeekDayLable>T</WeekDayLable>
      <WeekDayLable>W</WeekDayLable>
      <WeekDayLable>T</WeekDayLable>
      <WeekDayLable>F</WeekDayLable>
      <WeekDayLable>S</WeekDayLable>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: 20px;
  width: 350px;
  gap: 0px;
  margin: auto;
`;
const WeekDayLable = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  color: ${colors.gray_mid};
  width: 50px;
`;
export default WeekDayLabels;
