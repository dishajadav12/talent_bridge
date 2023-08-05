import React from 'react'
import './HomeStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";


const footer = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='footer-curve1'><path fill="#071952" fill-opacity="1" d="M0,32L1440,224L1440,320L0,320Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='footer-curve'>
    <path fill="#cccccc" fill-opacity="1" d="M0,288L1440,256L1440,320L0,320Z"></path>
  </svg>
    <div className='footer-container'>
       <footer>
      <div className='d-flex justify-content-around'>
        <div>
        <h6>Jobs by Location</h6>
          <p>Startup Jobs in India</p>
          <p>Startup Jobs in Bangalore</p>
          <p>Startup Jobs in Delhi / Gurgaon / Noida</p>
          <p>Startup Jobs in Pune</p>
          <p>Startup Jobs in Hyderabad</p>
        </div>
        <div>
        <h6>Technology Jobs</h6>
          <p>Android Developer Jobs</p>
          <p>iOS Development Jobs</p>
          <p>Frontend Developer Jobs</p>
          <p>Backend Developer Jobs</p>
          <p>DevOps Jobs</p>
        </div>
        <div>
        <h6>Business & Design Jobs</h6>
          <p>Marketing and Sales Jobs</p>
          <p>Digital Marketing Jobs</p>
          <p>UX and Graphic Design Jobs</p>
          <p>Product Manager Jobs</p>
          <p>Product Based Company Jobs</p>
        </div>
      </div>
      <hr />
      <div className='d-flex justify-content-center'>
        <a className='footer-links' href="/about">About</a>
        <a className='footer-links' href="/channels">Channels</a>
        <a className='footer-links' href="/case-studies">Case studies</a>
        <a className='footer-links' href="/faqs">FAQs</a>
        <a className='footer-links' href="/terms-of-use">Terms of use</a>
        <a className='footer-links' href="/privacy-policy">Privacy policy</a>
        <a className='footer-links' href="/pricing">Pricing</a>
        <a className='footer-links' href="/sitemap">Sitemap</a>
        <a className='footer-links' href="/refer-and-earn">Refer &amp; earn</a>
        <a className='footer-links' href="/become-a-problem-setter">Become a problem setter</a>
        <a className='footer-links' href="/blog">Blog</a>
      </div>
      <div className="copyright-container">
        <FontAwesomeIcon icon={faCopyright} /> 2023 talentBridge.co
      </div>
    </footer>
      </div>
      </>
  )
}

export default footer