import React from 'react'
import CreatableSelect from 'react-select/creatable'
import { cityOptions } from "../data";
import { SelectWrapper } from '../styles';
import { useNavigate } from 'react-router-dom';

const CitySelect = () => {
  const navigate = useNavigate();

  const handleChange = (newValue, actionmeta) => {
    console.log(newValue)
    navigate(`/${newValue?.value}`)
  }
  const handleCreate = (inputValue) => {
    console.log("New Option Created:", inputValue);
  }
  return (
    <SelectWrapper>
      <CreatableSelect
        isClearable
        options={cityOptions}
        onChange={handleChange}
        onCreateOption={handleCreate}
        value={null}

        className='react-select-container'
        classNamePrefix='react-select'
      />


    </SelectWrapper>
  )
}

export default CitySelect