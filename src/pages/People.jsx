import React, { useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/swapiSlice';
import './People.css'

const PREFIX = 'https://www.swapi.tech/api/people/';

export default function People() {
  const [value, setValue] = useState(PREFIX);
  const [loading, setLoading] = useState(false);
  const person = useSelector(state => state.swapi.people);

  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    if (!value.startsWith(PREFIX)) {
      return;
    }
    setValue(value);
    setLoading(true);  
    
    const num = value.replace(PREFIX, '');
    dispatch(getData({ entity: 'people', num }))
      .finally(() => setLoading(false));  
  }

  const num = value.replace(PREFIX, '');
  const currentPerson = person[num];

  return (
    <div className='entity-form'>
      <h1>People</h1>
      <form>
        <input value={value} onChange={handleChange} />
      </form>

      {loading && <p>Loading person data...</p>}

      {!loading && !currentPerson && <p>No any person available yet</p>}

      {!loading && currentPerson && (
        <div className='data'>{JSON.stringify(currentPerson)}</div>
      )}
    </div>
  );
}
