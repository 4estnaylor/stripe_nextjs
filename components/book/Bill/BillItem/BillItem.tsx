import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../../../colors/colors';

interface BillItemProps {
  dateTime: Date;
  daysToBook: Date[];
  setDaysToBook: React.Dispatch<React.SetStateAction<Date[]>>;
}

const displayOptions = {};

const BillItem = ({ dateTime, daysToBook, setDaysToBook }: BillItemProps) => {
  const [language, setLanguage] = useState('en-US');
  useEffect(() => {
    if (navigator.language) {
      const navLanguage = navigator.language;
      setLanguage(navLanguage);
    }
  }, []);

  const handleDeleteButtonClick = () => {
    console.log('delete me!');

    setDaysToBook((prev) =>
      [...prev].filter(function (obj) {
        return obj.getTime() !== dateTime.getTime();
      })
    );
  };

  return (
    <Wrapper>
      {dateTime.toLocaleDateString(language, {
        weekday: 'short',
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'shortGeneric',
      })}

      <DeleteButton onClick={handleDeleteButtonClick}>×</DeleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  background-color: transparent;
  padding-left: 20px;
  padding-top: 10px;
  color: ${colors.white};
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;

const DeleteButton = styled.button`
  background-color: inherit;
  color: inherit;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 50px;
  padding-right: 80px;
`;

export default BillItem;
