import React from "react";
import Link from "next/link";

const products = () => {
  return (
    <div>
      <h1 className="text-center pt-5">PRODUCTS</h1>
      <div className="d-flex flex-column justify-content-around mt-4 align-items-center flex-md-row">
        <div className="d-flex flex-column text-center">
          <Link href="/self-care">
            <div className="col-md-4 border border-3 border-dark m-3 p-3 imgcont6"></div>
          </Link>
          <h2>Self-Care</h2>
        </div>
        <div className="d-flex flex-column text-center">
          <Link href="/self-care">
            <div className="col-md-4 border border-3 border-dark m-3 p-3 imgcont7"></div>
          </Link>
          <h2>Jewels/Gems</h2>
        </div>
      </div>
    </div>
  );
};

export default products;
