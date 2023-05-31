"use client";

import { Section } from "@components/Section";
import { Box } from "@twilio-paste/box";
import { BackButton } from "@components/BackButton";
import { PageTitle } from "@components/PageTitle";

// eslint-disable-next-line react/function-component-definition
export default function WhatYouDo() {
  return (
    <>
      <BackButton />
      <Section>
        <PageTitle title="General Liability." />
        <Box marginBottom="space100"></Box>
      </Section>
    </>
  );
}
