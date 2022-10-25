import React from 'react';
import './weather.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchTempData } from './actionWeather';

 const WeatherComponent = () => {

    const state = useSelector(state =>state.tempData);
    const dispatch = useDispatch();
    const [city,setCity] = useState("");

    const handleChange = (e) =>{
        setCity(e.target.value)
    }

    const handleSubmit = () =>{
      dispatch(fetchTempData(city))
      setCity("");

      if (city === '') {
        alert("Entry Any City");        
      } 
    }

  return (
    <div className='divbody'>
        <div>
          <h1>Check Weather</h1>
        <input type="text" name={city} id="city" value={city} onChange={handleChange} autoComplete='off' /><br />&nbsp;
        <button  onClick={handleSubmit}>Submit</button>
        </div>
        <div>
            {
           <div>
             <>
            {state !== '' ? (
                <h2>Temparature at  {state}<sup>o</sup>C</h2>
            ) : null}
            </>
           </div>
           }
        </div>
    </div>
  )
}

export default WeatherComponent;
