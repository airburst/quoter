"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { TradeSelector } from "@components/TradeSelector";
import { NextButton } from "@components/NextButton";

export default function Trade() {
  return (
    <Section>
      <Flex paddingY="space40">
        <Heading as="h2" variant="heading10">
          Get quotes, compare prices, get your certificate of insurance today.
        </Heading>
      </Flex>
      <TradeSelector />
      <NextButton href="/location" />
    </Section>
  );
}
