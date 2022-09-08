import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../../../colors/colors';

type WeekSelectorProps = {
  startingSunday: Date;
  setStartingSunday: any;
};

const getEndingSaturday = (startingSunday: Date) => {
  const endingSaturday = new Date(
    startingSunday.getFullYear(),
    startingSunday.getMonth(),
    startingSunday.getDate() + 6,
    24
  );
  return endingSaturday;
};

const MyScheduleWeekSelector = (props: WeekSelectorProps) => {
  const [language, setLanguage] = useState('en-US');
  useEffect(() => {
    if (navigator.language) {
      const navLanguage = navigator.language;
      setLanguage(navLanguage);
    }
  }, []);

  const { startingSunday, setStartingSunday } = props;

  const initialSaturday = getEndingSaturday(startingSunday);

  const [canMoveForwardWeek, setCanMoveForwardWeek] = useState(true);
  const [canMoveBackwardWeek, setCanMoveBackwardWeek] = useState(false);

  const buttonCannotMoveStyle =
    'background-color: ' + colors.white + '; color: ' + colors.white + ';';

  const now = new Date();
  const timeGap = startingSunday.getTime() - now.getTime();
  const limitDaysTo = 77;
  const timeLimit = limitDaysTo * 24 * 60 * 60 * 1000;

  const moveForwardWeek = () => {
    const now = new Date();
    const nextSunday = new Date(
      startingSunday.getFullYear(),
      startingSunday.getMonth(),
      startingSunday.getDate() + 7
    );

    const nextSaturday = getEndingSaturday(nextSunday);

    const timeGap = nextSaturday.getTime() - now.getTime();

    const limitDaysTo = 77;

    const timeLimit = limitDaysTo * 24 * 60 * 60 * 1000;

    const WeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

    if (timeGap + WeekInMilliseconds >= timeLimit) {
      setCanMoveForwardWeek(false);
    }

    if (timeGap >= timeLimit) {
      return;
    } else {
      setCanMoveBackwardWeek(true);
      setStartingSunday(nextSunday);
      setEndingStaturday(nextSaturday);
    }
  };

  const moveBackwardWeek = () => {
    const nextSunday = new Date(
      startingSunday.getFullYear(),
      startingSunday.getMonth(),
      startingSunday.getDate() - 7
    );

    const nextSaturday = getEndingSaturday(nextSunday);

    const now = new Date();

    const WeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

    if (nextSaturday.getTime() < now.getTime() + WeekInMilliseconds) {
      setCanMoveBackwardWeek(false);
    }

    if (nextSaturday.getTime() < now.getTime()) {
      return;
    } else {
      setStartingSunday(nextSunday);
      setEndingStaturday(nextSaturday);
      setCanMoveForwardWeek(true);
    }
  };

  const [endingSaturday, setEndingStaturday] = useState(initialSaturday);

  return (
    <Wrapper>
      <WeekLabel>
        {startingSunday.toLocaleDateString(language, {
          month: 'short',
          day: 'numeric',
        })}{' '}
        -{' '}
        {endingSaturday.toLocaleDateString(language, {
          month: 'short',
          day: 'numeric',
        })}
        <WeekButtonsContainter>
          <WeekButtonBackward
            onClick={moveBackwardWeek}
            canMove={canMoveBackwardWeek}
          >
            {' '}
            ◀{' '}
          </WeekButtonBackward>
          <WeekButtonForward
            onClick={moveForwardWeek}
            canMove={canMoveForwardWeek}
          >
            {' '}
            ◀{' '}
          </WeekButtonForward>
        </WeekButtonsContainter>
      </WeekLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 20px;
`;
const WeekLabel = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  color: ${colors.black};
  gap: 20px;
`;

const WeekButtonsContainter = styled.div`
  display: flex;
  margin-left: auto;
  flex: 1;
  gap: 10px;
  justify-content: flex-end;
`;

interface WeekButtonProps {
  canMove: boolean;
}
const WeekButton = styled.button<WeekButtonProps>`
  height: 100%;
  background-color: inherit;
  color: ${colors.black};
  border: none;
  font-size: 1.25rem;
  min-width: 45px;
  border-radius: 4px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${colors.gray_light};
    }
  }

  ${(props) =>
    !props.canMove
      ? 'color: ' +
        colors.white +
        '; background-color: ' +
        colors.white +
        ';' +
        ':hover{' +
        'background-color: ' +
        colors.white +
        ';};'
      : null}
`;
const WeekButtonForward = styled(WeekButton)`
  transform: scale(-1);
`;
const WeekButtonBackward = styled(WeekButton)``;
const DayButtonContainer = styled.div``;
const DayButton = styled.button``;

export default MyScheduleWeekSelector;
