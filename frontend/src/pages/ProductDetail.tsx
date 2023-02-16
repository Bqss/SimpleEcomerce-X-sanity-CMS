import { Rating } from "@mui/material";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { urlFor } from "../client";
import { useContext, useState } from "react";
import { getProductBySlug, getRelevantProduct } from "../utils/data";
import Product from "../components/Product";
import { CartContext } from "../components/cart/cartContext";
import { Product as ProductTy } from "../types/typing";

const ProductDetail = () => {
  const { slug } = useParams();
  const [count, setCount] = useState(1);
  const {addToCart} = useContext(CartContext);
  const [hoveredImage, setHoveredImage] = useState(0);
  const { data: productDetail } = useQuery(
    ["product", slug],
    () => getProductBySlug(slug),
    {
      onSuccess: (data) => {
        window.scrollTo(0, 0,{behavior: "smooth"});
        mutate(data?._id);
      },
      refetchOnWindowFocus: false
    }
  );
  const handleAddToChart = (product: ProductTy| undefined, qty: number) => {
    if(!product) return ;
    addToCart({product,qty})
  }

  const {data: relevantProduct , mutate} = useMutation( getRelevantProduct); 

  return (
    <>
      <div className="flex flex-col md:flex-row  gap-10 p-8 ">
        <div className="space-y-6 transition-colors duration-500">
          <div className="bg-product hover:bg-banner-bottom rounded-xl">
            <img
              src={urlFor(productDetail?.image[hoveredImage])}
              alt="df"
              className="w-[350px] aspect-square rounded-xl md:w-[400px]"
            />
          </div>
          <div className="flex gap-2  ">
            {productDetail?.image.map((image, i) => (
              <div
                className={
                  " hover:cursor-pointer hover:bg-banner-bottom rounded-xl " +
                  (hoveredImage === i ? "bg-banner-bottom" : "bg-product")
                }
                key={i}
                onMouseOver={() => setHoveredImage(i)}
              >
                <img
                  src={urlFor(image)}
                  alt={image.originalFilename ?? ""}
                  className="w-[70px] rounded-xl aspect-square"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          <h2 className="text-4xl font-bold capitalize">
            {productDetail?.name}
          </h2>
          <div className="flex gap-3">
            <Rating name="product Rating" value={4} readOnly />
            <span>({19})</span>
          </div>
          <div className="space-y-2 -mt-1 ">
            <span className="font-medium block">Details :</span>
            <p>{productDetail?.details}</p>
          </div>
          <span className="text-2xl  font-bold text-orange-600">
            ${productDetail?.price}
          </span>
          <div className="flex gap-4 ">
            <span className="tex-lg font-medium">Quantity : </span>
            <div className="flex gap-4">
              <button className="border border-black px-1" 
              onClick={() => setCount(prev => prev-1)} disabled={count ==1}>
                <AiOutlineMinus />
              </button>
              <span className="text-lg">{count}</span>
              <button className="border border-black px-1" 
              onClick={() => setCount(prev => prev+1)}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="flex gap-4 mt-6 ">
            <button className="inline-flex gap-2 text-orange-600 items-center bg-transparent border border-orange-600 px-10 py-2 rounded-md" onClick={() => {
              handleAddToChart(productDetail,  count),
              setCount(0)
            }}>
              <AiOutlineShoppingCart />
              <span>Add To Chart</span>
            </button>
            <button className="bg-orange-600 text-white px-10 py-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-20">
        <h3 className="text-2xl font-bold text-gray-700">You may also like</h3>
        <div className="mt-20 overflow-x-hidden max-w-full h-[400px] ">
          <div className="ml-5 flex gap-4">
            {relevantProduct?.map((product,i) => <Product data={product} key={i}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
