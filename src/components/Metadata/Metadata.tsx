import Head from "next/head";

export const Metadata = ({
  title = "Simply Business",
  description = "Generated using Simply Business Next.js app template",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
