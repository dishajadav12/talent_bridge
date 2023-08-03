import React from 'react'
import IMAGE from './bd_2.png'
import './HomeStyle.css'

const intro = () => {
  return (
    <div>
      <div className="background-container">
        <h1 className='intro-header'>Find Your Dream Team with TalentBridge</h1>
        <h3 className='intro-sub-header my-3'>Connecting Top Companies with Exceptional Talent Worldwide</h3>
        <div className='intro-img d-flex justify-content-between'>
        <img  src={IMAGE} alt="talent bridge" />
        </div>
      </div>
    </div>
  )
}

export default intro