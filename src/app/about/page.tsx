import { Suspense } from "react";
import { Planets } from "./Planets";

export default async function About() {
  return (
    <>
      <main>
        <h1>About Us</h1>
        <p>
          This page uses <strong>dynamic data fetching</strong> to fetch data
          from an API on the server. Data will be refetched on each visit. If
          your data doesn't change very often - or at all - then use{" "}
          <strong>Static Data fetching</strong> instead (see the Projects page
          for an example).
        </p>
        <p>
          The page will not render a loading state until data has been fetched.
        </p>

        <p>
          Read more about{" "}
          <a href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#dynamic-data-fetching">
            dynamic data fetching
          </a>
        </p>

        <Suspense
          fallback={
            <div>
              <p>Loading...</p>
            </div>
          }
        >
          {/* @ts-expect-error server component */}
          <Planets />
        </Suspense>
      </main>
    </>
  );
}
