
import React, { useEffect, useState } from 'react'
import { ThisDayWrapper, Top, Bottom } from './styles';
import CurrentTime from './CurrentTime';
import useWeather from '../../utils/useWeather.js';

const ThisDay = () => {
  const { data, isLoading } = useWeather("seoul");
  const temperature = Math.round(data?.main.temp || 0);
  const cityName = data?.name;

  let imageSrc = "./images/weatherIcons/";
  const [imgsrc, setImgsrc] = useState(imageSrc + "clear-sky.svg")

  return (
    <ThisDayWrapper>
      <Top>
        <div>
          <h2>{temperature}°</h2>
          <h3>Now</h3>
        </div>
        <img src={imgsrc} alt="" />
      </Top>
      <Bottom>
        <CurrentTime />
        <div>
          {cityName} - {data?.sys.country}
        </div>
      </Bottom>
    </ThisDayWrapper>
  )
}

export default ThisDay