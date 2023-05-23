"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackLink } from "@components/BackLink";
import { Radio, RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Stack } from "@twilio-paste/core/stack";
import { Label } from "@twilio-paste/core/label";
import { Select, Option } from "@twilio-paste/core/select";
import { Text } from "@twilio-paste/core/text";

export default function AboutYourBusiness() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            Great to meet you John! Can you tell us more about your business.
          </Heading>
        </Flex>

        <Box marginBottom="space100">
          <RadioGroup
            name="secondary-service"
            legend="Do you provide a secondary service for customers that is a significant part of your business?"
            helpText="If your business fits in more than one box, tell us about it here."
          >
            <Stack orientation="horizontal" spacing="space50">
              <Radio id={useUID()} value="yes" name="secondary-service">
                Yes
              </Radio>
              <Radio id={useUID()} value="no" name="secondary-service">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        <Box marginBottom="space100">
          <RadioGroup
            name="legal-structure"
            legend="What is the legal structure of your business?"
          >
            <Radio id={useUID()} value="individual" name="legal-structure">
              Individual/Sole proprietor
            </Radio>
            <Radio id={useUID()} value="llc" name="legal-structure">
              Limited Liability Company (LLC)
            </Radio>
            <Radio id={useUID()} value="corporation" name="legal-structure">
              Corporation
            </Radio>
            <Radio id={useUID()} value="other" name="legal-structure">
              Other
            </Radio>
          </RadioGroup>
        </Box>

        <Box marginBottom="space100">
          <Label htmlFor="start-year">When did you start your business?</Label>
          <Text as="p" marginBottom="space50" color="colorTextWeak">
            This is when you first began conducting paid work and/or when you
            first registered your business.
          </Text>
          <Select id="start-year" defaultValue="">
            <Option value="">Please select</Option>
            <Option value="1">Less than a year ago</Option>
            <Option value="2">2 years ago</Option>
            <Option value="3-5">3-5 years ago</Option>
            <Option value="5+">More than 5 years ago</Option>
          </Select>
        </Box>
        <NextButton href="./business-location" />
      </Section>
    </>
  );
}
