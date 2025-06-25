
import React from 'react'
import { ThisDayInfoWrapper, ImgWrapper } from './styles'

const ThisDayInfo = () => {
  return (
    <ThisDayInfoWrapper>
      <div className="info-row">
        <ImgWrapper>
          <img src="./images/temperature.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>

      <div className="info-row">
        <ImgWrapper>
          <img src="./images/pressure.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>

      <div className="info-row">
        <ImgWrapper>
          <img src="./images/Humidity.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>

      <div className="info-row">
        <ImgWrapper>
          <img src="./images/Wind.svg" />
        </ImgWrapper>
        <h2>Temperature</h2>
        <p>100</p>
      </div>

    </ThisDayInfoWrapper >

  )
}

export default ThisDayInfo