"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";

export const BackLink = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Section>
      <Box paddingY="space40">
        <Link href="#" onClick={goBack}>
          Back
        </Link>
      </Box>
    </Section>
  );
};
