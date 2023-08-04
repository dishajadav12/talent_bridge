import React from 'react'
import './HomeStyle.css'
import IMAGE from './before_image.jpg'
import IMAGE2 from './after_image.jpg'
import CAROUSAL1 from './c (1).png'
import CAROUSAL11 from './c (2).png'
import CAROUSAL2 from './c (3).png'
import CAROUSAL22 from './c (4).png'
import CAROUSAL3 from './c (5).png'
import CAROUSAL33 from './c (6).png'



const services = () => {
  return (
    <div>
      <div className="curve-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#071952" fill-opacity="1" d="M0,256L48,250.7C96,245,192,235,288,197.3C384,160,480,96,576,96C672,96,768,160,864,170.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
</svg>
    <div className="service-main-container">
      <h1>      Ready to elevate your company with exceptional talent ?</h1>
      <h4 className="content-1">
          Join TalentBridge today and embark on a journey to discover the perfect fit for your organization.  <br />
          <h4 className='my-2'> <b> Sign up now and experience the future of recruitment.</b></h4> 
      </h4>
      <button className=' get-started-btn'> Get Started</button>
      <h4 className="content-2">
          Over <b>30 million</b>  professionals from diverse industries are fast-tracking their journey to success through our recruitment website, joining <b>16,500 companies</b>  already benefiting from our platform.
          </h4>
          <div className="company-carousal">
            <div className="carousal-slide-1">
            <div className="carousal-1">
              <img src={CAROUSAL1} alt="company logo animation" />
              <img src={CAROUSAL11} alt="company logo animation" />

            </div>
            <div className="carousal-1">
              <img src={CAROUSAL1} alt="company logo animation" />
              <img src={CAROUSAL11} alt="company logo animation" />

            </div>
            </div>
            <div className="carousal-slide-1">
            <div className="carousal-2">
              <img src={CAROUSAL2} alt="company logo animation" />
              <img src={CAROUSAL22} alt="company logo animation" />
            </div>
            <div className="carousal-2">
              <img src={CAROUSAL2} alt="company logo animation" />
              <img src={CAROUSAL22} alt="company logo animation" />
            </div>
            </div>         
            <div className="carousal-slide-1"> 
            <div className="carousal-1">
              <img src={CAROUSAL3} alt="company logo animation" />
              <img src={CAROUSAL33} alt="company logo animation" />
              </div>
              <div className="carousal-1">
              <img src={CAROUSAL3} alt="company logo animation" />
              <img src={CAROUSAL33} alt="company logo animation" />
              </div>
            </div>
          </div>

          {/* <div className="short-cut-container d-flex justify-content-around">
          <div className="img-before">
            <h2>The usual path</h2>
            <img src={IMAGE} alt="" />
          </div>
          <div className="img-after">
            <h2>With Talent Bridge</h2>
            <img src={IMAGE2} alt="" />

          </div>
      </div> */}
    </div>
      </div>
    </div>
  )
}

export default services