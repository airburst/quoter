"use client";

import { useRouter } from "next/navigation";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import { Button } from "@twilio-paste/core/button";

export const BackButton = () => {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <Section>
      <Box
        paddingTop="space80"
        paddingBottom="space40"
        color="colorTextPrimary"
      >
        <Button variant="link" onClick={goBack}>
          Back
        </Button>
      </Box>
    </Section>
  );
};
