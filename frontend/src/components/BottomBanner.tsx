import { urlFor } from "../client";
import { Banner } from "../types/typing";

interface Props {
  data: Banner | undefined;
}

const BottomBanner = ({ data }: Props) => {
  return (
    <div className="rounded-xl  relative  text-white  mt-28 bg-banner-bottom min-h-[35vh] p-6 md:p-10">
      <div className="absolute flex inset-x-0  -top-14 sm:-top-20 lg:-top-24  items center  justify-center">
        <img src={urlFor(data?.image)} alt="product" className="w-[300px] -mr-10 sm:w-[375px] md:w-[450px] aspect-square" />
      </div>
      <div className="relative  flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex flex-col gap-2 ">
          <span className="text-lg">{data?.discount}% Off </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase">{data?.largeText1}</h1>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase">{data?.largeText2}</h1>
          <p className="text-base sm:text-lg">{data?.saleTime}</p>
        </div>
        <div className="flex flex-col gap-0 md:gap-2 items-end">
          <span className="font-medium text-base md:text-xl capitalize">
            {data?.smallText}
          </span>
          <h3 className="text-2xl  sm:text-5xl font-bold capitalize">{data?.midText}</h3>
          <p className="text-sm sm:text-base">{data?.desc}</p>
          <button className="px-5 py-2 mt-5 text-sm sm:text-base rounded-xl font-medium bg-white text-orange-600">
            {data?.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
