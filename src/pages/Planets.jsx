import React, { useRef } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/swapiSlice';
import './People.css'

const PREFIX = 'https://www.swapi.tech/api/planets/';

export default function Planets() {
  const [value, setValue] = useState(PREFIX);
  const [loading, setLoading] = useState(false);
  const planet = useSelector(state => state.swapi.planets);

  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    if (!value.startsWith(PREFIX)) {
      return;
    }
    setValue(value);
    setLoading(true);  
    
    const num = value.replace(PREFIX, '');
    dispatch(getData({ entity: 'planets', num }))
      .finally(() => setLoading(false));  
  }

  const num = value.replace(PREFIX, '');
  const currentPlanet = planet[num];

  return (
    <div className='entity-form'>
      <h1>PLanets</h1>
      <form>
        <input value={value} onChange={handleChange} />
      </form>

      {loading && <p>Loading planet data...</p>}

      {!loading && !currentPlanet && <p>No any planet available yet</p>}

      {!loading && currentPlanet && (
        <div className='data'>{JSON.stringify(currentPlanet)}</div>
      )}
    </div>
  );
}