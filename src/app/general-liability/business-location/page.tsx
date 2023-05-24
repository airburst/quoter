"use client";

import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackButton } from "@components/BackButton";
import { RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Label } from "@twilio-paste/core/label";
import { useState } from "react";
import { Info } from "@components/Info";
import { NumberInput } from "@components/NumberInput";
import { RadioOption } from "@components/RadioOption";
import { PageTitle } from "@components/PageTitle";

export default function BusinessLocation() {
  const [isCountVisible, setIsCountVisible] = useState(false);

  const handleChange = () => {
    setIsCountVisible(true);
  };

  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Now, let’s move on to where you do business from." />
        <Box marginBottom="space100">
          <RadioGroup
            name="location"
            legend="Where does your business operate?"
          >
            <RadioOption id={useUID()} value="home-only" name="location">
              Home only
            </RadioOption>
            <RadioOption
              id={useUID()}
              value="home-and-client-locations"
              name="location"
            >
              Home and client locations
            </RadioOption>
            <RadioOption
              id={useUID()}
              value="own-or-rent-space"
              name="location"
            >
              Own/rent space
            </RadioOption>
          </RadioGroup>
        </Box>
        <Box marginBottom="space100">
          <RadioGroup
            name="legal-structure"
            legend="What is the legal structure of your business?"
            onChange={handleChange}
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
        {isCountVisible && (
          <Box marginBottom="space100">
            <Label htmlFor="location-count">
              How many locations does your business own or rent?
            </Label>
            <NumberInput id="location-count" />
            <Info>
              If your business is solely based out of your home, select
              &quot;1&quot;
            </Info>
          </Box>
        )}
        <NextButton href="./employees" />
      </Section>
    </>
  );
}
