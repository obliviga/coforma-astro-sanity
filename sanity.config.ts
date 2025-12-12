// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./schemas";
import { sanityClient } from "sanity:client";

const { projectId, dataset } = sanityClient.config();

if (!projectId || !dataset) {
  throw new Error(
    "Both environment variables PUBLIC_SANITY_PROJECT_ID and PUBLIC_SANITY_DATASET must be set in order for the Sanity Studio to properly function",
  );
}

export default defineConfig({
  name: "astro-test-blog",
  title: "astro test blog",
  projectId: projectId,
  dataset: dataset,
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});
