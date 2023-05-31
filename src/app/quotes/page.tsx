"use client";

import { QuoteSection, SellingPoints, Summary } from "@components/QuotesPage";
import { BackButton } from "@components/BackButton";

// eslint-disable-next-line react/function-component-definition
export default function Quotes() {
  return (
    <>
      <BackButton />
      <Summary />
      <QuoteSection />
      <SellingPoints />
    </>
  );
}
