"use client";

import { useRouter } from "next/navigation";
import { Link, Flex } from "@simplybusiness/mobius";
import styles from "./Backlink.module.css";

export const BackLink = () => {
  const router = useRouter();

  const goBack = () => router.back();

  return (
    <Flex className={styles.container}>
      <Link href="#" onClick={goBack}>
        Back
      </Link>
    </Flex>
  );
};
