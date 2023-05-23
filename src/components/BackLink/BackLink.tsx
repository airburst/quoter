"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Section } from "@components/Section";
import { Box } from "@twilio-paste/core/box";
import styles from "./BackLink.module.css";

type BackLinkProps = {
  href?: string;
};

export const BackLink = (props: BackLinkProps) => {
  const { href = "#" } = props;
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <Section>
      <Box
        paddingTop="space80"
        paddingBottom="space40"
        color="colorTextPrimary"
      >
        <Link href={href} onClick={goBack} className={styles.link}>
          Back
        </Link>
      </Box>
    </Section>
  );
};
