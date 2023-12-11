import React from "react";

function About() {
  return (
    <div className="header vh-100 text-center position-relative">
      <div
        className="text-container position-relative d-flex flex-column
       justify-content-center align-items-center h-100"
      >
        <div className="col-md-8 bg-dark p-3 w-75 opacity-75">
          <h1 className="text-light">About</h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum
            architecto dolor delectus quam quos illum, dolorem et quia modi
            reprehenderit ipsum, iure itaque tempora corporis corrupti velit
            dignissimos ad rem excepturi maiores ducimus obcaecati quo porro.
            Maxime, repellendus error.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
