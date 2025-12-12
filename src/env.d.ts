/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

// This file is intentionally left empty.
// It's a good idea to keep it around in case you need to add any global types.
export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  image: any;
  publishedAt: string;
  body: any;
};
