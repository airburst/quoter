import { QuoteSection, SellingPoints, Summary } from "@components/QuotesPage";
import { BackLink } from "@components/BackLink";

export default function Quotes() {
  return (
    <>
      <BackLink />
      <Summary />
      <QuoteSection />
      <SellingPoints />
    </>
  );
}
