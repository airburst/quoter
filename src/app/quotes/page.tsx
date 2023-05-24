"use client";

import { QuoteSection, SellingPoints, Summary } from "@components/QuotesPage";
import { BackButton } from "@components/BackButton";

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
