"use client";

import Link from "next/link";
import { BackLink } from "@components/BackLink";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { Info } from "@components/Info";
import { Input } from "@twilio-paste/core/input";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { Text } from "@twilio-paste/core/text";
import { CheckboxOption } from "@components/CheckboxOption";

export default function Customer() {
  return (
    <>
      <BackLink />
      <Section>
        <Box paddingY="space40">
          <Heading as="h2" variant="heading10">
            Amazing, we should get to know you better.
          </Heading>
          <Link href="#">More Information</Link>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            First name
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="first name"
              id="first_name"
              name="first_name"
              type="text"
            />
          </Box>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            Last name
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="last name"
              id="last_name"
              name="last_name"
              type="text"
            />
          </Box>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            Email
          </Text>
          <Box paddingTop="space40">
            <Input aria-label="email" id="email" name="email" type="email" />
          </Box>
          <Info>
            We will use it to send quotes, policy documents and certificate of
            insurance (COI).
          </Info>
        </Box>

        <Box marginTop="space50">
          <Text as="label" fontSize="fontSize40">
            Phone number
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="phone_number"
              id="phone_number"
              name="phone_number"
              type="text"
            />
          </Box>
          <Info>
            Why are we asking? We may use this nmumebr to reach out to you about
            your application status, quote, or policy.
          </Info>
        </Box>

        <Box marginTop="space50">
          <CheckboxOption
            id="keep_updated"
            value="keep_updated"
            name="keep_updated"
          >
            Keep me updated on the latest small biz news, Simply Business
            updates, offers, and promotions. I understand I can unsubscribe at
            any time.
          </CheckboxOption>
        </Box>

        <Box marginY="space100">
          <NextButton href="./about-your-business" />
        </Box>
      </Section>
    </>
  );
}
