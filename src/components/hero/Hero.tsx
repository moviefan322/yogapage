import React from "react";

function Hero() {
  return (
    <div className="header vh-100 text-center position-relative">
      <div
        className="text-container position-relative d-flex flex-column
       justify-content-center align-items-center h-100"
      >
        <div className="col-md-8 bg-dark p-3 w-75 opacity-75">
          <h1 className="text-light">Hidden Healings</h1>
          <p className="text-light">
            &ldquo;Inner stillness is the key to outer strength.&rdquo; – Jared
            Brock
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
