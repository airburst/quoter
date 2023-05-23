"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackLink } from "@components/BackLink";
import { Radio, RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";

export default function PolicyHolder() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            First, let us check something.
          </Heading>
        </Flex>
        <Box marginBottom="space100">
          <RadioGroup
            name="policy-holder"
            legend="Will you be the policyholder?"
            helpText="The policyholder is the person or organization who owns the insurance policy."
          >
            <Radio id={useUID()} value="yes" name="policy-holder">
              Yes, I am purchasing for my own business
            </Radio>
            <Radio id={useUID()} value="no" name="policy-holder">
              No, I am acting on behalf of the business owner
            </Radio>
          </RadioGroup>
        </Box>
        <NextButton href="/customer-details" />
      </Section>
    </>
  );
}
