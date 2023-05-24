"use client";

import { Section } from "@components/Section";
import { TradeSelector } from "@components/TradeSelector";
import { NextButton } from "@components/NextButton";
import { PageTitle } from "@components/PageTitle";

export default function Trade() {
  return (
    <Section>
      <PageTitle title="Get quotes, compare prices, get your certificate of insurance today." />
      <TradeSelector />
      <NextButton href="/location" />
    </Section>
  );
}
