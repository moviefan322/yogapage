import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div>
      <h1 className="text-center">SERVICES</h1>
      <div className="d-flex align-items-center px-2 mx-1">
        <div className="col-md-8">
          <h2>Acupressure</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            tempore.
          </p>
        </div>
        <div className="col-md-2 p-1">
          <Image
            src="/acupress.jpeg"
            alt="hand massage"
            width={100}
            height={100}
          />
        </div>
        <div className="col-md-2">
          <button>Book Appt</button>
        </div>
      </div>
      {/* CUPPING, ACCU X CUPPING, PRIVATE YOGA SESSION, YOGA/SELF ACUPRESSURE CONSULTATION */}
    </div>
  );
};

export default services;
