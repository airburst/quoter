"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Text } from "@twilio-paste/core/text";
import { Anchor } from "@twilio-paste/core/anchor";
import { Button } from "@twilio-paste/core/button";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { AcceptIcon } from "@twilio-paste/icons/esm/AcceptIcon";
import { BackLink } from "@components/BackLink";
import { Info } from "@components/Info";
import { ListWithIcon } from "@components/ListWithIcon";

const coverItems = [
  "Third-party bodily injury",
  "Third-party property damage",
  "Personal and advertising injury",
  "Claims arising from product liability",
  "Third-party medical payments",
];

export default function Information() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40" vertical>
          <Text as="p">LET&apos;S START YOUR QUOTE FOR</Text>
          <Heading as="h2" variant="heading10">
            General Liability
          </Heading>
          <Info>
            Some example outlining why its important for your specific trade...
          </Info>
          <Anchor href="#">More Information</Anchor>
        </Flex>
        <Box marginTop="space50">
          <Text as="h2" fontSize="fontSize50">
            What is usually covered:
          </Text>
        </Box>
        <Box marginTop="space20">
          <ListWithIcon
            items={coverItems}
            icon={<AcceptIcon decorative color="colorTextPrimary" />}
          />
        </Box>
        <Box marginY="space100">
          <Button variant="primary" as="a" fullWidth href="./policy-holder">
            Start
          </Button>
        </Box>
      </Section>
    </>
  );
}
