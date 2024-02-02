// src/FilterChips.tsx
"use client"
import React, { useState } from 'react';
import { Input, Button, Chip } from '@nextui-org/react';

interface FilterChipsProps {
  filterButtonText?: string;
  inputPlaceholder?: string;
  chipLabel?: string;
}

const FilterChips: React.FC<FilterChipsProps> = ({
  filterButtonText = 'Show Filter',
  inputPlaceholder = 'Type something...',
  chipLabel = 'Chip',
}) => {
  const [inputText, setInputText] = useState<string>('');
  const [chips, setChips] = useState<string[]>([]);
  const [showInput, setShowInput] = useState<boolean>(false);

  const handleGoClick = () => {
    if (inputText.trim() !== '') {
      setChips([...chips, inputText]);
      setInputText('');
    }
  };

  const handleFilterClick = () => {
    setShowInput(!showInput);
  };

  return (
    <>
  <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='flex justify-center gap-3'>
          <Input
            className='w-[calc(100vh-40px)] h-[20px]' // Adjusted the width to accommodate the button
            placeholder={inputPlaceholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
      
       <div className='pt-1'>
          <Button className='' onClick={handleGoClick}>
            Go
          </Button>
        </div>
        </div >

        <div className='pt-6 gap-2 flex justify-center'>
          {chips.map((chip, index) => (
            <Chip className='' key={index}>
              {chip}
            </Chip>
          ))}
        </div>
      </div>
      </>

  );
};

export default FilterChips;
