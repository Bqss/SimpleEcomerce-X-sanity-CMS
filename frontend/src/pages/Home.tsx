import { useQuery } from "react-query";
import BottomBanner from "../components/BottomBanner";

import Product from "../components/Product";
import TopBanner from "../components/TopBanner";
import { getBanner, getProduct } from "../utils/data";

const Home = () => {
  const {data: banner } = useQuery("banners",getBanner,{
    initialData : [],
    refetchOnWindowFocus: false,

  });
  const {data: products} = useQuery("products",getProduct,{
    initialData: [],
    refetchOnWindowFocus: false,
 
  })

  return (
    <>
      <TopBanner data={banner?.at(0)}/>
      <div className="py-6">
        <div className="flex flex-col items-center py-6">
          <h2 className="text-3xl font-bold text-gray-700">Best Selling Products</h2>
          <span className="mt-1">Speakers of many variations</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {products?.map((product,i) => <Product key={i} data={product}/>)}
        </div>
      </div>
      <BottomBanner data={banner?.at(0)}/>
    </>
  );
};

export default Home;
