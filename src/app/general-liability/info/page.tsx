"use client";

import Link from "next/link";
import { Flex } from "@twilio-paste/flex";
import { Heading } from "@twilio-paste/heading";
import { Text } from "@twilio-paste/text";
import { Button } from "@twilio-paste/button";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/box";
import { AcceptIcon } from "@twilio-paste/icons/esm/AcceptIcon";
import { BackButton } from "@components/BackButton";
import { Info } from "@components/Info";
import { ListWithIcon } from "@components/ListWithIcon";

const coverItems = [
  "Third-party bodily injury",
  "Third-party property damage",
  "Personal and advertising injury",
  "Claims arising from product liability",
  "Third-party medical payments",
];

// eslint-disable-next-line react/function-component-definition
export default function Information() {
  return (
    <>
      <BackButton />
      <Section>
        <Flex paddingY="space40" vertical>
          <Text as="p">LET&apos;S START YOUR QUOTE FOR</Text>
          <Heading as="h2" variant="heading10">
            General Liability
          </Heading>
          <Info>
            Some example outlining why its important for your specific trade...
          </Info>
          <Link href="#">More Information</Link>
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
          <Button
            variant="primary"
            as="a"
            fullWidth
            href="/general-liability/policy-holder"
          >
            Start
          </Button>
        </Box>
      </Section>
    </>
  );
}
