import React from "react";
import FEAT1 from "./feature1.png";
import FEAT2 from "./feature2.png";
import FEAT3 from "./feature3.png";

const features = () => {
  return (
    <div style={{ marginTop: "50px" }}>
      <h2 className="my-3" style={{ textAlign: "center" }}>
        What can TalentBridge help you with?
      </h2>
      <div className="intro-curve"> </div>
      <div className="intro-curve-2"> </div>

      <div className="feature-container">
        <div className="features">
          <div className="feature-1 f-content d-flex justify-content-around my-3">
            <div className="feature-content">
              <h4> | Diverse Talent Pool</h4>
              <div className="feature-sub-dec">
                {" "}
                Access a diverse talent pool of skilled professionals from
                various backgrounds and specializations, ensuring you find the
                right fit for your team's unique needs.
              </div>
              <button className="feature-btn">Find Jobs</button>
              <button className="feature-btn-1">Learn more</button>
            </div>
            <div className="feature-1-img">
              <img src={FEAT1} className="feature-img" alt="" />
            </div>
          </div>
          <div className="feature-2 f-content d-flex justify-content-around">
            <div className="feature-2-img">
              <img src={FEAT2} className="feature-img" alt="" />
            </div>
            <div className="feature-content">
              <h4>| Efficient Hiring Process</h4>
              <div className="feature-sub-dec">
                Streamline your hiring process with TalentBridge's user-friendly
                platform, saving time and effort in posting job openings,
                screening candidates, and scheduling interviews.
              </div>
              <button className="feature-btn">Hire Telent</button>
              <button className="feature-btn-1">Learn more</button>
            </div>
          </div>{" "}
          <div className="feature-3 f-content d-flex justify-content-around">
            <div className="feature-content">
              <h4>| Global Reach</h4>
              <div className="feature-sub-dec">
                Expand your reach beyond local boundaries and connect with
                exceptional talent from around the world, enabling your company
                to compete on a global scale.
              </div>
              <button className="feature-btn">Hire Telent</button>
              <button className="feature-btn-1">Learn more</button>
            </div>
            <div className="feature-3-img">
              <img src={FEAT3} className="feature-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
