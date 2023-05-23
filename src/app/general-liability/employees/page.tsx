"use client";

import { useState } from "react";
import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackLink } from "@components/BackLink";
import { Radio, RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Label } from "@twilio-paste/core/label";
import { NumberInput } from "@components/NumberInput";
import { HelpText } from "@twilio-paste/core/help-text";
import { Text } from "@twilio-paste/core/text";
import { Stack } from "@twilio-paste/core/stack";
import { CheckboxGroup, Checkbox } from "@twilio-paste/core/checkbox";

export default function Employees() {
  const [isAdditionalVisible, setIsAdditionalVisible] = useState(false);

  const handleChange = (value: string) => {
    if (value === "yes") {
      setIsAdditionalVisible(true);
      return;
    }

    setIsAdditionalVisible(false);
  };

  const radioYesId = useUID();
  const radioNoId = useUID();

  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            Great, can you tell us more about who works for your business.
          </Heading>
        </Flex>

        <Box marginBottom="space100">
          <Label htmlFor="owner-count">Number of owners</Label>
          <NumberInput id="owner-count" />
        </Box>

        <Box marginBottom="space100">
          <Label htmlFor="employee-count">Number of employees</Label>
          <HelpText>
            Please{" "}
            <Text as="span" fontWeight="fontWeightBold">
              do not
            </Text>{" "}
            include subcontractors.
          </HelpText>
          <NumberInput id="employee-count" />
        </Box>

        <Box marginBottom="space100">
          <RadioGroup
            name="subcontractors"
            legend="Does your business hire subcontractors to work on your behalf?"
            helpText="Subcontractors (1099) are contracted by you but work under their own direction using their own tools and materials. They tend to be specialists in a specific skill or trade."
            onChange={handleChange}
          >
            <Stack orientation="horizontal" spacing="space50">
              <Radio id={useUID()} value="yes" name="subcontractors">
                Yes
              </Radio>
              <Radio id={useUID()} value="no" name="subcontractors">
                No
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>

        {isAdditionalVisible && (
          <>
            <Box marginBottom="space100">
              <CheckboxGroup
                name="coverages"
                legend="What do your subcontractors do on your behalf?"
                helpText="Select all that apply"
              >
                <Checkbox id="family-dwellings" value="family-dwellings">
                  Work on 1 or 2 Family Dwellings
                </Checkbox>
                <Checkbox
                  id="commercial-buildings"
                  value="commercial-buildings"
                >
                  Work on Commercial Buildings
                </Checkbox>
                <Checkbox
                  id="industrial-buildings"
                  value="industrial-buildings"
                >
                  Work on Industrial Buildings
                </Checkbox>
                <Checkbox id="unrelated-buildings" value="unrelated-buildings">
                  Work unrelated to any buildings
                </Checkbox>
              </CheckboxGroup>
            </Box>
            <Box marginBottom="space100">
              <RadioGroup
                name="proof-of-insurance"
                legend="Will you require subcontractors to submit proof of insurance to you with limits greater than or equal to your own?"
                helpText="Without documentation of a certificate of insurance listing you or your business as an additional insured, some policies may not cover a claim related to subcontractors."
              >
                <Stack orientation="horizontal" spacing="space50">
                  <Radio id={radioYesId} value="yes" name="proof-of-insurance">
                    Yes
                  </Radio>
                  <Radio id={radioNoId} value="no" name="proof-of-insurance">
                    No
                  </Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </>
        )}
        <NextButton href="./before-we-continue" />
      </Section>
    </>
  );
}
