"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackButton } from "@components/BackButton";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Label } from "@twilio-paste/core/label";
import { Select, Option } from "@twilio-paste/core/select";
import { Text } from "@twilio-paste/core/text";
import { RadioOption } from "@components/RadioOption";
import { FlexWithGap } from "@components/FlexWithGap";

export default function AboutYourBusiness() {
  return (
    <>
      <BackButton />
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
            <FlexWithGap>
              <RadioOption id={useUID()} value="yes" name="secondary-service">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="secondary-service">
                No
              </RadioOption>
            </FlexWithGap>
          </RadioGroup>
        </Box>

        <Box marginBottom="space100">
          <RadioGroup
            name="legal-structure"
            legend="What is the legal structure of your business?"
          >
            <RadioOption
              id={useUID()}
              value="individual"
              name="legal-structure"
            >
              Individual/Sole proprietor
            </RadioOption>
            <RadioOption id={useUID()} value="llc" name="legal-structure">
              Limited Liability Company (LLC)
            </RadioOption>
            <RadioOption
              id={useUID()}
              value="corporation"
              name="legal-structure"
            >
              Corporation
            </RadioOption>
            <RadioOption id={useUID()} value="other" name="legal-structure">
              Other
            </RadioOption>
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
