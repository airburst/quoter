import { Metadata } from "@components/Metadata";

export default async function Projects() {
  const calculated = Promise.resolve(
    "Static Data is data that doesn't change often. For example, a blog post.",
  );

  return (
    <>
      <Metadata />
      <h1>Projects</h1>
      <p>
        This page uses <strong>static data fetching</strong>.
      </p>

      <p>{calculated}</p>

      <p>
        Read more about{" "}
        <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching">
          static data fetching
        </a>
        .
      </p>
    </>
  );
}
