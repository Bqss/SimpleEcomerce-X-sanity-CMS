import { urlFor } from "../client"
import { Banner } from "../types/typing"

interface Props {
  data: Banner| undefined
}

const TopBanner = ({data}:Props) => {
  return (
    <div className='bg-banner-top relative min-h-[45vh] rounded-xl flex items-center p-8 mt-20'>
      {data?.image && (
        <div className="absolute inset-0 flex items-center  justify-end lg:justify-center">
          <img  alt="product" className="w-[450px] aspect-square" src={urlFor(data?.image)} />
        </div>
      )}
      <div className='flex flex-col relative z-2 gap-2 items-start'>
        <span className='capitalize text-base md:text-xl font-medium'>{data?.smallText}</span>
        <h3 className='text-3xl sm:text-4xl  md:text-5xl capitalize font-bold'>{data?.midText}</h3>
        <h1 className='text-5xl sm:text-7xl  md:text-8xl uppercase font-bold -ml-2 md:-ml-4 text-white'>{data?.largeText1}</h1>
        <button className='text-sm sm:text-lg font-medium text-white bg-orange-600 px-5 py-2 rounded-xl mt-6'>{data?.buttonText}</button>
      </div>
      
      <div className='absolute bottom-6 right-12'>
        <span className='text-sm md:text-base font-medium block text-right'>Description</span>
        <p className='text-sm sm:text-lg sm:mt-2'>{data?.desc}</p>
      </div>
    </div>
  )
}

export default TopBanner