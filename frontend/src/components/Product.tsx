import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { urlFor } from "../client";
import { Product } from "../types/typing";

interface ProductProps {
  data: Product;
}

const Product = ({ data }: ProductProps) => {


  return (
    <Link
      to={`/product/${data?.slug?.current}`}
      className=" hover:scale-110 transition-transform duration-500"
      
    >
      <div className="bg-product w-[250px] aspect-square rounded-xl">
        <img
          src={urlFor(data?.image[0])}
          alt={data?.name}
          className={
            "w-[250px] aspect-square rounded-lg " 
          }
        />
      </div>
      <div className="py-1">
        <p className="text-sm font-medium capitalize">{data?.name}</p>
        <span className="font-extrabold">${data?.price}</span>
      </div>
    </Link>
  );
};

export default Product;
