import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckBoxesProps {
  dateTime: Date;
  sessionsToCreate: any[];
  setSessionsToCreate: any;
}

const CheckBoxes = ({
  dateTime,
  sessionsToCreate,
  setSessionsToCreate,
}: CheckBoxesProps) => {
  const [sundayChecked, setSundayChecked] = useState(true);
  const [mondayChecked, setMondayChecked] = useState(true);
  const [tuesdayChecked, setTuesdayChecked] = useState(true);
  const [wednesdayChecked, setWednesdayChecked] = useState(true);
  const [thursdayChecked, setThursdayChecked] = useState(true);
  const [fridayChecked, setFridayChecked] = useState(true);
  const [saturdayChecked, setSaturdayChecked] = useState(true);

  const getWeekForCertainHourChecked = () => {
    return {
      dateTime: dateTime,
      sunday: sundayChecked,
      monday: mondayChecked,
      tuesday: tuesdayChecked,
      wednesday: wednesdayChecked,
      thursday: thursdayChecked,
      friday: fridayChecked,
      saturday: saturdayChecked,
    };
  };

  const handleChangeForSessionsToCreate = () => {
    const sessionsToCreateInfo = getWeekForCertainHourChecked();
    const newSessionsToCreateInfoArray = sessionsToCreate.filter(function (
      obj
    ) {
      return obj.dateTime !== dateTime;
    });
    setSessionsToCreate([
      ...newSessionsToCreateInfoArray,
      sessionsToCreateInfo,
    ]);
  };

  return (
    <Wrapper>
      <input
        type="checkbox"
        id="Sunday"
        onChange={() => {
          setSundayChecked(!sundayChecked);
          handleChangeForSessionsToCreate();
        }}
        checked={sundayChecked}
      />
      <input
        type="checkbox"
        id="Monday"
        onChange={() => {
          setMondayChecked(!mondayChecked);
        }}
        checked={mondayChecked}
      />
      <input
        type="checkbox"
        id="tuesday"
        onChange={() => {
          setTuesdayChecked(!tuesdayChecked);
        }}
        checked={tuesdayChecked}
      />
      <input
        type="checkbox"
        id="wednesday"
        onChange={() => {
          setWednesdayChecked(!wednesdayChecked);
        }}
        checked={wednesdayChecked}
      />
      <input
        type="checkbox"
        id="thursday"
        onChange={() => {
          setThursdayChecked(!thursdayChecked);
        }}
        checked={thursdayChecked}
      />
      <input
        type="checkbox"
        id="friday"
        onChange={() => {
          setFridayChecked(!fridayChecked);
        }}
        checked={fridayChecked}
      />
      <input
        type="checkbox"
        id="saturday"
        onChange={() => {
          setSaturdayChecked(!saturdayChecked);
        }}
        checked={saturdayChecked}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default CheckBoxes;
