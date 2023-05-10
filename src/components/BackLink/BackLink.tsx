"use client";

import { useRouter } from "next/navigation";
import { Link } from "@simplybusiness/mobius";
import { Section } from "@components/Section";
import styles from "./Backlink.module.css";

export const BackLink = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Section>
      <div className={styles.container}>
        <Link href="#" onClick={goBack}>
          Back
        </Link>
      </div>
    </Section>
  );
};
