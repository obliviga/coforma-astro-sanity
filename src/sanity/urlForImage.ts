import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlForImage(source: any) {
  return builder.image(source);
}
