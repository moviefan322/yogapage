import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div>
      <h1 className="text-center">SERVICES</h1>
      <div className="d-flex align-items-center px-2 mx-1">
        <div className="col-md-10 d-flex align-items-center border border-2 border-dark px-1">
          <div className="col-md-8">
            <h2>Acupressure</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore.
            </p>
          </div>
          <div className="col-md-2 p-1 image1">
            <Image
              src="/acupress.jpeg"
              alt="hand massage"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-md-2">
          <button>Book Now</button>
        </div>
      </div>
      <div className="d-flex align-items-center px-2 mx-1">
        <div className="col-md-10 d-flex align-items-center border border-2 border-dark px-1">
          <div className="col-md-8">
            <h2>Cupping</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore.
            </p>
          </div>
          <div className="col-md-2 p-1 image1">
            <Image
              src="/acupress.jpeg"
              alt="hand massage"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-md-2">
          <button>Book Now</button>
        </div>
      </div>
      <div className="d-flex align-items-center px-2 mx-1">
        <div className="col-md-10 d-flex align-items-center border border-2 border-dark px-1">
          <div className="col-md-8">
            <h2>Accu x cupping</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore.
            </p>
          </div>
          <div className="col-md-2 p-1 image1">
            <Image
              src="/acupress.jpeg"
              alt="hand massage"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-md-2">
          <button>Book Now</button>
        </div>
      </div>
      <div className="d-flex align-items-center px-2 mx-1">
        <div className="col-md-10 d-flex align-items-center border border-2 border-dark px-1">
          <div className="col-md-8">
            <h2>Private Yoga Session</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore.
            </p>
          </div>
          <div className="col-md-2 p-1 image1">
            <Image
              src="/acupress.jpeg"
              alt="hand massage"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-md-2">
          <button>Book Now</button>
        </div>
      </div>
      <div className="d-flex align-items-center px-2 mx-1">
        <div className="col-md-10 d-flex align-items-center border border-2 border-dark px-1">
          <div className="col-md-8">
            <h2>Yoga/self acupressure consultation</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              tempore.
            </p>
          </div>
          <div className="col-md-2 p-1 image1">
            <Image
              src="/acupress.jpeg"
              alt="hand massage"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="col-md-2">
          <button>Book Now</button>
        </div>
      </div>
      {/* CUPPING, ACCU X CUPPING, PRIVATE YOGA SESSION, YOGA/SELF ACUPRESSURE CONSULTATION */}
    </div>
  );
};

export default services;
