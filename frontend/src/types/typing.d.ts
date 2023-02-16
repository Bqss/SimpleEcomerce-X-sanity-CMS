import { SanityImageAssetDocument } from '@sanity/client';
export interface Banner {
  _id: string,
  type: "banners",
  image : SanityImageAssetDocument,
  buttonText : string,
  product : string,
  desc : string,
  smallText : string,
  midText : string,
  largeText1 : string,
  largeText2 : string,
  discount: number,
  saleTime: string
}

type slug = {
  current: string,
  _type : "slug",
}

export interface Product{
  _id: string,
  name: string,
  image: SanityImageAssetDocument[],
  slug: slug ,
  price: number,
  details : string
}

export type cartItem = {
  id: string,
  product : Product,
  qty : number
}