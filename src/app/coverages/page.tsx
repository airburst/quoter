"use client";

import { Flex } from "@twilio-paste/core/flex";
import { Heading } from "@twilio-paste/core/heading";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/core/checkbox";
import { BackLink } from "@components/BackLink";
import { NextButton } from "@components/NextButton";
import { Button } from "@twilio-paste/core/button";
import { Text } from "@twilio-paste/core/text";
import { CameraIcon, ShieldHalvedIcon, SquarePlusIcon } from "@components/Icon";

export default function Coverages() {
  return (
    <>
      <BackLink />
      <Section>
        <Flex paddingBottom="space40">
          <Heading as="h2" variant="heading10">
            Select all the coverage you would like quotes for today.
          </Heading>
        </Flex>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="coverages"
            legend="Recommended for your business"
          >
            <Checkbox
              id="equipment_and_business_property"
              value="equipment_and_business_property"
            >
              <Flex>
                <Flex grow>
                  <Box
                    marginBottom="space30"
                    color="colorTextWeak"
                    width="30px"
                  >
                    <CameraIcon />
                  </Box>
                </Flex>
                <Box
                  borderLeftStyle="solid"
                  borderLeftWidth="borderWidth20"
                  borderLeftColor="colorBorderPrimaryStrong"
                  paddingLeft="space20"
                >
                  <Text as="span" fontSize="fontSize20" color="colorTextWeak">
                    From
                  </Text>
                  <br />{" "}
                  <Text
                    as="span"
                    fontSize="fontSize40"
                    fontWeight="fontWeightBold"
                    color="colorTextWeak"
                  >
                    $21
                  </Text>
                  <Text as="span" fontSize="fontSize20" color="colorTextWeak">
                    /mo
                  </Text>
                </Box>
              </Flex>
              <Heading as="label" variant="heading40" color="colorTextWeak">
                Equipment and Business Property
              </Heading>
              <Text as="p" color="colorTextWeak">
                This coverage can help you cover your business&apos;s equipment
                or property while it&apos;s in transit or stored off-site.
              </Text>
              <Button variant="link">What is Covered</Button>
            </Checkbox>
            <Checkbox id="general_liability" value="general_liability">
              <Box marginBottom="space30" color="colorTextWeak" width="30px">
                <ShieldHalvedIcon />
              </Box>
              General Liability
              <Box>
                <Button variant="link">What is Covered</Button>
              </Box>
            </Checkbox>
            <Checkbox id="workers_compensation" value="workers_compensation">
              <Box marginBottom="space30" color="colorTextWeak" width="30px">
                <SquarePlusIcon />
              </Box>
              Workers&apos; Compensation
              <Box>
                <Button variant="link">What is Covered</Button>
              </Box>
            </Checkbox>
          </CheckboxGroup>
        </Box>
        <Box marginBottom="space100">
          <CheckboxGroup
            name="other_coverages"
            legend="Other coverages available"
          >
            <Checkbox
              id="professional_liability"
              value="professional_liability"
            >
              Professional Liability / Errors & Omissions{" "}
              <Box>
                <Button variant="link">What is Covered</Button>
              </Box>
            </Checkbox>
            <Checkbox id="cyber" value="cyber">
              Cyber{" "}
              <Box>
                <Button variant="link">What is Covered</Button>
              </Box>
            </Checkbox>
          </CheckboxGroup>
        </Box>
        <NextButton href="/what-you-do" />
      </Section>
    </>
  );
}
