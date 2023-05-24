"use client";

import { BackButton } from "@components/BackButton";
import { Box } from "@twilio-paste/core/box";
import { Info } from "@components/Info";
import { Input } from "@twilio-paste/core/input";
import { NextButton } from "@components/NextButton";
import { Section } from "@components/Section";
import { Text } from "@twilio-paste/core/text";
import { DollarSignIcon } from "@components/Icon/DollarSignIcon";
import { PageTitle } from "@components/PageTitle";

export default function Costs() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="Before we continue..." />

        <Box marginTop="space50">
          <Text as="h2" fontSize="fontSize40">
            What is your estimated revenue over the next 12 months?
          </Text>
        </Box>
        <Box marginTop="space30">
          <Text as="p" fontSize="fontSize30" color="colorTextWeak">
            This typically may include gross sales, commissions, and fees for
            your professional services or goods sold.
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="estimated_revenue"
              id="estimated_revenue"
              name="estimated_revenue"
              type="text"
              insertBefore={
                <Text
                  color="colorTextWeak"
                  as="span"
                  fontWeight="fontWeightSemibold"
                >
                  <DollarSignIcon
                    style={{ width: "12px", marginBottom: "-4px" }}
                  />
                </Text>
              }
            />
          </Box>
          <Info>It&apos;s ok to estimate here!</Info>
        </Box>

        <Box marginTop="space50">
          <Text as="h2" fontSize="fontSize40">
            What is your estimated total payroll over the next 12 months?
          </Text>
        </Box>
        <Box marginTop="space30">
          <Input
            aria-label="estimated_payroll"
            id="estimated_payroll"
            name="estimated_payroll"
            type="text"
            insertBefore={
              <Text
                color="colorTextWeak"
                as="span"
                fontWeight="fontWeightSemibold"
              >
                <DollarSignIcon
                  style={{ width: "12px", marginBottom: "-4px" }}
                />
              </Text>
            }
          />
          <Info>
            <Text as="span">
              <strong>Include</strong> yourself, full-time employyes, part-time
              employees and temporary employees (W2).
            </Text>
            <Text as="span" paddingTop="space40">
              <strong>Do not include</strong> subcontractors (1099). Please note
              the payroll may be adjusted to meet state requirements.
            </Text>
          </Info>
        </Box>

        <Box marginTop="space50">
          <Text as="h2" fontSize="fontSize40">
            What is your estimated cost of the subcontracted work over the next
            12 months?
          </Text>
        </Box>
        <Box marginTop="space30">
          <Text as="p" fontSize="fontSize30" color="colorTextWeak">
            Subcontractors cost should include any equipment, materials or other
            costs associated with subcontractors.
          </Text>
          <Box paddingTop="space40">
            <Input
              aria-label="estimated_revenue"
              id="estimated_revenue"
              name="estimated_revenue"
              type="text"
              insertBefore={
                <Text
                  color="colorTextWeak"
                  as="span"
                  fontWeight="fontWeightSemibold"
                >
                  <DollarSignIcon
                    style={{ width: "12px", marginBottom: "-4px" }}
                  />
                </Text>
              }
            />
          </Box>
        </Box>

        <Box marginY="space100">
          <NextButton href="./work" />
        </Box>
      </Section>
    </>
  );
}
