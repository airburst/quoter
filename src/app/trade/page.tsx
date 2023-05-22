"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { TradeSelector } from "@components/TradeSelector";
import { Button } from "@twilio-paste/core/button";
import { Box } from "@twilio-paste/core/box";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";
import { Text } from "@twilio-paste/core/text";

export default function Trade() {
  return (
    <Section>
      <Flex paddingY="space40">
        <Heading as="h2" variant="heading10">
          Get quotes, compare prices, get your certificate of insurance today.
        </Heading>
      </Flex>
      <Box marginBottom="space100">
        <TradeSelector />
        <Button variant="primary" fullWidth>
          Next
          <ArrowForwardIcon decorative />
        </Button>
      </Box>
    </Section>
  );
}
