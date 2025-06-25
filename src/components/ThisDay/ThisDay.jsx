
import React from 'react'

const ThisDay = () => {
  let imageSrc = "./images/weatherIcons/rain.svg";
  return (
    <>
      <div>
        <h2>100°</h2>
        <h3>Now</h3>
      </div>
      <img src={imageSrc} alt="" />
      <div>16:03</div>
      <div>
        Seoul - KR
      </div>
    </>

  )
}

export default ThisDay