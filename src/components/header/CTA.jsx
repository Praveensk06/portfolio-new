import React from "react";
import Cv from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Cv} download className="btn">
        Download cv
      </a>
      <a href="#contact" className="btn btn-primary">
        Let'Talk
      </a>
    </div>
  );
};

export default CTA;
