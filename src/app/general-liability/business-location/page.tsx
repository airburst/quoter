"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { BackLink } from "@components/BackLink";
import { Radio, RadioGroup } from "@twilio-paste/core/radio-group";
import { useUID } from "@twilio-paste/core/uid-library";
import { NextButton } from "@components/NextButton";
import { Label } from "@twilio-paste/core/label";
import { Button } from "@twilio-paste/core/button";
import { MinusIcon, PlusIcon } from "@components/Icon";
import { useState } from "react";
import { Input } from "@twilio-paste/core/input";
import { Info } from "@components/Info";

export default function BusinessLocation() {
  const [isCountVisible, setIsCountVisible] = useState(false);
  const [count, setCount] = useState(1);

  const handleChange = () => {
    setIsCountVisible(true);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingY="space40">
          <Heading as="h2" variant="heading10">
            Now, let’s move on to where you do business from.
          </Heading>
        </Flex>
        <Box marginBottom="space100">
          <RadioGroup
            name="location"
            legend="Where does your business operate?"
          >
            <Radio id={useUID()} value="home-only" name="location">
              Home only
            </Radio>
            <Radio
              id={useUID()}
              value="home-and-client-locations"
              name="location"
            >
              Home and client locations
            </Radio>
            <Radio id={useUID()} value="own-or-rent-space" name="location">
              Own/rent space
            </Radio>
          </RadioGroup>
        </Box>
        <Box marginBottom="space100">
          <RadioGroup
            name="legal-structure"
            legend="What is the legal structure of your business?"
            onChange={handleChange}
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
        {isCountVisible && (
          <Box marginBottom="space100">
            <Label htmlFor="location-count">
              How many locations does your business own or rent?
            </Label>
            <Flex vAlignContent="center">
              <Button variant="primary_icon" size="icon" onClick={decrement}>
                <MinusIcon style={{ width: "30px" }} />
              </Button>
              <Input
                id="location-count"
                name="location-count"
                type="text"
                defaultValue={count}
              />
              <Button variant="primary_icon" size="icon" onClick={increment}>
                <PlusIcon style={{ width: "30px" }} />
              </Button>
            </Flex>
            <Info>
              If your business is solely based out of your home, select
              &quot;1&quot;
            </Info>
          </Box>
        )}
        <NextButton href="/employees" />
      </Section>
    </>
  );
}
