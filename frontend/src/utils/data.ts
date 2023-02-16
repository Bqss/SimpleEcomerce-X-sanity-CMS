import { Banner, Product, slug } from './../types/typing.d';
import { client } from './../client';



export const getBanner = async() =>{
  const result = await client.
  fetch<Banner[]>(`*[_type=="banner"]`);
  return result;
}

export const getProduct = async() => {
  const result = await client.fetch<Product[]>(
    `*[_type=="product"]`
  )

  return result;
}

export const getProductBySlug = async(slug: string|undefined) => {
  if(slug){
    const result = await client.fetch<Product[]>(
  `*[_type=="product"&&slug.current match "${slug}"]`);
  return result?.at(0);
  }
  
}


export const getRelevantProduct = async(productId : string|undefined) => {
  if(productId){
    const result = await client.fetch<Product[]>(
      `*[_type=="product"&&_id!="${productId}"]`);
    return result ;
  }
}