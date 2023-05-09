import { Metadata } from "@components/Metadata";
import {
  BackLink,
  QuoteSection,
  SellingPoints,
  Summary,
} from "@components/QuotesPage";

export default function Quotes() {
  return (
    <>
      <Metadata />
      <BackLink />
      <Summary />
      <QuoteSection />
      <SellingPoints />
    </>
  );
}
