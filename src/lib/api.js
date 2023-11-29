import { useSanityClient, groq, createImageBuilder } from 'astro-sanity';
import imageUrlBuilder from '@sanity/image-url';

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ypaaup99',
  dataset: 'production',
  apiVersion: 'v2021-03-25',
  useCdn: true, // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function getFirstBlogPost() {
  const query = groq`*[_type == "funtazia"]`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}

export const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
