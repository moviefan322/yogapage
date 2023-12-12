import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div className="container">
      <h1 className="text-center">SERVICES</h1>
      <div className="d-flex flex-column w-100">
        <div className="d-flex align-items-center px-1 mx-1">
          <div className="col-md-10 d-flex align-items-center border border-2 border-dark ps-1 bg-success">
            <div className="col-md-8">
              <div className="content px-3">
                <h2>Acupressure</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, tempore.
                </p>
              </div>
            </div>
            <div className="col-md-2 px-1 imgcont1"></div>
          </div>
          <div className="col-md-2">
            <button className="booknow bg-primary">Book Now</button>
          </div>
        </div>
        <div className="d-flex align-items-center px-1 mx-1 w-100">
          <div className="col-md-10 d-flex align-items-center border border-2 border-dark ps-1 bg-success">
            <div className="col-md-8">
              <div className="content px-3">
                <h2>Cupping</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, tempore.
                </p>
              </div>
            </div>
            <div className="col-md-2 px-1 imgcont2"></div>
          </div>
          <div className="col-md-2">
            <button className="booknow bg-primary">Book Now</button>
          </div>
        </div>

        <div className="d-flex align-items-center px-1 mx-1 w-100">
          <div className="col-md-10 d-flex align-items-center border border-2 border-dark ps-1 bg-success">
            <div className="col-md-8">
              <div className="content px-3">
                <h2>accu x cupping</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, tempore.
                </p>
              </div>
            </div>
            <div className="col-md-2 px-1 imgcont3"></div>
          </div>
          <div className="col-md-2">
            <button className="booknow bg-primary">Book Now</button>
          </div>
        </div>
        <div className="d-flex align-items-center px-1 mx-1 w-100">
          <div className="col-md-10 d-flex align-items-center border border-2 border-dark ps-1 bg-success">
            <div className="col-md-8">
              <div className="content px-3">
                <h2>Private yoga session</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, tempore.
                </p>
              </div>
            </div>
            <div className="col-md-2 px-1 imgcont4"></div>
          </div>
          <div className="col-md-2">
            <button className="booknow bg-primary">Book Now</button>
          </div>
        </div>
        <div className="d-flex align-items-center px-1 mx-1 w-100">
          <div className="col-md-10 d-flex align-items-center border border-2 border-dark ps-1 bg-success">
            <div className="col-md-8">
              <div className="content px-3">
                <h2>yoga/self acupressure consultation</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Optio, tempore.
                </p>
              </div>
            </div>
            <div className="col-md-2 px-1 imgcont5"></div>
          </div>
          <div className="col-md-2">
            <button className="booknow bg-primary">Book Now</button>
          </div>
        </div>
      </div>
      {/* CUPPING, ACCU X CUPPING, PRIVATE YOGA SESSION, YOGA/SELF ACUPRESSURE CONSULTATION */}
    </div>
  );
};

export default services;
