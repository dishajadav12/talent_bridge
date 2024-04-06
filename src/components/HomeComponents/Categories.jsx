import React from "react";
import IMAGE1 from "./sd.png";
import IMAGE2 from "./pm.png";
import IMAGE3 from "./ds.png";
import IMAGE4 from "./ui.png";

const Categories = () => {
  return (
    <div>
      <div className="feature_cards">
        <div className="icon-cards d-flex justify-content-around my-3 ">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-title">Software Developers</div>
            <img className="card-img-top" src={IMAGE1} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Harness the power of top-notch software engineers from diverse
                backgrounds to build robust, scalable, and innovative solutions
                for your business.
              </p>
            </div>
            <button className="more-info-btn">more info </button>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-title">Product Managers</div>
            <img className="card-img-top" src={IMAGE2} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                {" "}
                Empower your product development process with visionary product
                managers who possess a unique blend of market insights,
                strategic thinking, and user-centric approach.{" "}
              </p>
            </div>
            <button className="more-info-btn">more info</button>
          </div>{" "}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-title">Data Scientists</div>
            <img className="card-img-top" src={IMAGE3} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                Leverage data-driven decision-making by recruiting exceptional
                data scientists through TalentBridge.
              </p>
            </div>
            <button className="more-info-btn">more info </button>
          </div>{" "}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-title">UI-UX Developers</div>
            <img className="card-img-top" src={IMAGE4} alt="Card image cap" />

            <div className="card-body">
              <p className="card-text">
                Elevate your product's aesthetics and user experience with
                creative UX/UI designers sourced via TalentBridge.
              </p>
            </div>
            <button className="more-info-btn">more info </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
