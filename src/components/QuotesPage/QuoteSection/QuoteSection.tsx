import { ActionBar } from "../ActionBar";
import { QuoteCard } from "../QuoteCard";

export const QuoteSection = () => {
  return (
    <>
      <ActionBar />
      <ul>
        <QuoteCard />
        <QuoteCard />
        <QuoteCard />
      </ul>
    </>
  );
};
