import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "52p0te8l",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skWPX793z9HgEPcPK1K0wHLrioqBjeZSAJRgtlyiWJluzXtm6ibheCEyoQ63i9wogajjK7UJzAYA0a7UxvgJBzYe8GLcnHufecMGFCSUnObEjwvAM4r5JVoUrtQqjYKgip5YOf7pctdM8O3OYih6zyyzflGghVD54QjcGRgJxu2DNOzHx8SK",
  useCdn: false,
});
