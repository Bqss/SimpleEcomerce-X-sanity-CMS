import createClient, { SanityImageAssetDocument } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId : import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset : "production",
  useCdn : false,
  apiVersion : "2023-02-15"
});

const builder  =   ImageUrlBuilder(client);


export const urlFor  = (image : SanityImageAssetDocument|undefined) => {
  return image ? builder.image(image).url() : "";
}