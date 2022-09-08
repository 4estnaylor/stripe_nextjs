import React, { useState } from 'react';
import styled from 'styled-components';

const AddSession = () => {
  const [hourTimeEntered, setHourTimeEntered] = useState(null);
  const [minuteTimeEntered, setMinuteTimeEntered] = useState(null);
  const [preferredNameEntered, setPrefferedNameEntered] = useState('');
  const [lastNameEntered, setLastNameEntered] = useState('');
  const [emailEntered, setEmailEntered] = useState('');

  const handleAddSession = (e: any) => {
    e.preventDefault();
    const newSessionInfo = {
      preferredName: preferredNameEntered,
      lastName: lastNameEntered,
      email: emailEntered,
      meetLink: 'https://meet.google.com/vcg-gkvz-jqr',
    };
    console.log(newSessionInfo);
  };

  const handleHourChange = (e: any) => {
    if (e.target.value > 12) {
      return;
    }
    const hour = e.target.value;
    setHourTimeEntered(e.target.value);
  };

  const handleMinuteChange = (e: any) => {
    if (e.target.value > 59) {
      return;
    }
    const minute = e.target.value;
    setMinuteTimeEntered(e.target.value);
  };
  return (
    <Wrapper>
      <SessionToAdd onSubmit={(e) => handleAddSession(e)}>
        <NameInput type="date" placeholder="date" />
        <NameInput type="time" placeholder="time" />
        {/* <TimeToAdd>
          <TimeInput
            type="number"
            placeholder="hh"
            value={hourTimeEntered || 'none'}
            onChange={handleHourChange}
          />{' '}
          {' : '}
          <TimeInput
            type="number"
            placeholder="mm"
            value={minuteTimeEntered || 'none'}
            onChange={handleMinuteChange}
          />
        </TimeToAdd> */}
        <NameInput
          placeholder="Preferred Name"
          value={preferredNameEntered}
          onChange={(e) => setPrefferedNameEntered(e.target.value)}
        />
        <NameInput
          placeholder="Last Name"
          value={lastNameEntered}
          onChange={(e) => setLastNameEntered(e.target.value)}
        />
        <NameInput
          placeholder="email"
          value={emailEntered}
          onChange={(e) => {
            setEmailEntered(e.target.value);
          }}
        />
        <button type="submit"> + </button>
      </SessionToAdd>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type='date']::placeholder {
    color: black;
  }
  display: flex;
  flex-direction: column;
`;

const SessionToAdd = styled.form`
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
`;

const TimeToAdd = styled.div`
  margin: auto;
`;

const TimeInput = styled.input`
  border: none;
  width: 50px;
  height: 50px;
  font-size: inherit;
  text-align: center;
`;

const NameInput = styled.input`
  border: none;
  min-width: 120px;
  color: black;
  height: 50px;
  font-size: inherit;
  text-align: center;
`;

export default AddSession;
