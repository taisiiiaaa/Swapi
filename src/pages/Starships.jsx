import React, { useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/swapiSlice';
import './People.css'

const PREFIX = 'https://www.swapi.tech/api/starships/';

export default function Planets() {
  const [value, setValue] = useState(PREFIX);
  const [loading, setLoading] = useState(false);
  const starship = useSelector(state => state.swapi.starships);

  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    if (!value.startsWith(PREFIX)) {
      return;
    }
    setValue(value);
    setLoading(true);  
    
    const num = value.replace(PREFIX, '');
    dispatch(getData({ entity: 'starships', num }))
      .finally(() => setLoading(false));  
  }

  const num = value.replace(PREFIX, '');
  const currentStarship = starship[num];

  return (
    <div className='entity-form'>
      <h1>Starships</h1>
      <form>
        <input value={value} onChange={handleChange} />
      </form>

      {loading && <p>Loading starship data...</p>}

      {!loading && !currentStarship && <p>No any starship available yet</p>}

      {!loading && currentStarship && (
        <div className='data'>{JSON.stringify(currentStarship)}</div>
      )}
    </div>
  );
}