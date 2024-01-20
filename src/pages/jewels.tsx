import React from "react";
import { Product } from "@/interface/interface";
import Image from "next/image";

const jewels = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Diamond",
      price: 1000,
    },
    {
      id: 2,
      name: "Ruby",
      price: 500,
    },
    {
      id: 3,
      name: "Emerald",
      price: 200,
    },
    {
      id: 4,
      name: "Sapphire",
      price: 300,
    },
    {
      id: 5,
      name: "Amethyst",
      price: 100,
    },
    {
      id: 6,
      name: "Topaz",
      price: 150,
    },
  ];
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
        <h1 className="mx-auto mt-5">JEWELS</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-4" key={product.id}>
              <div className="card m-3 bg-success">
                <div className="card-body d-flex flex-column justify-content-center m-3">
                  <Image className="mx-auto mb-3"
                    src="/gems.jpeg"
                    alt="gems"
                    width={100}
                    height={100} />
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text text-center">${product.price}</p>
                  <button className='btn btn-sm btn-primary'>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default jewels;
