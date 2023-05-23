"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackLink } from "@components/BackLink";

export default function WhatYouDo() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            General Liability.
          </Heading>
        </Flex>
        <Box marginBottom="space100"></Box>
      </Section>
    </>
  );
}

// TODO: Redirect to /info sub-route
