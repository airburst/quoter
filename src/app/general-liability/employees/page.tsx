"use client";

import { useState } from "react";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackButton } from "@components/BackButton";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Label } from "@twilio-paste/core/label";
import { NumberInput } from "@components/NumberInput";
import { HelpText } from "@twilio-paste/core/help-text";
import { Text } from "@twilio-paste/core/text";
import { CheckboxGroup } from "@twilio-paste/core/checkbox";
import { RadioOption } from "@components/RadioOption";
import { CheckboxOption } from "@components/CheckboxOption";
import { FlexWithGap } from "@components/FlexWithGap";

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
      <BackButton />
      <Section>
        <PageTitle title="Great, can you tell us more about who works for your business." />

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
            <FlexWithGap>
              <RadioOption id={useUID()} value="yes" name="subcontractors">
                Yes
              </RadioOption>
              <RadioOption id={useUID()} value="no" name="subcontractors">
                No
              </RadioOption>
            </FlexWithGap>
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
                <CheckboxOption id="family-dwellings" value="family-dwellings">
                  Work on 1 or 2 Family Dwellings
                </CheckboxOption>
                <CheckboxOption
                  id="commercial-buildings"
                  value="commercial-buildings"
                >
                  Work on Commercial Buildings
                </CheckboxOption>
                <CheckboxOption
                  id="industrial-buildings"
                  value="industrial-buildings"
                >
                  Work on Industrial Buildings
                </CheckboxOption>
                <CheckboxOption
                  id="unrelated-buildings"
                  value="unrelated-buildings"
                >
                  Work unrelated to any buildings
                </CheckboxOption>
              </CheckboxGroup>
            </Box>
            <Box marginBottom="space100">
              <RadioGroup
                name="proof-of-insurance"
                legend="Will you require subcontractors to submit proof of insurance to you with limits greater than or equal to your own?"
                helpText="Without documentation of a certificate of insurance listing you or your business as an additional insured, some policies may not cover a claim related to subcontractors."
              >
                <FlexWithGap>
                  <RadioOption
                    id={radioYesId}
                    value="yes"
                    name="proof-of-insurance"
                  >
                    Yes
                  </RadioOption>
                  <RadioOption
                    id={radioNoId}
                    value="no"
                    name="proof-of-insurance"
                  >
                    No
                  </RadioOption>
                </FlexWithGap>
              </RadioGroup>
            </Box>
          </>
        )}
        <NextButton href="./costs" />
      </Section>
    </>
  );
}
